/* eslint-disable no-console */
import { transform } from '@babel/standalone';
import { useCallback,useEffect, useState } from 'react';

import ModalWrapper from '@/common/components/elements/ModalWrapper';

import CodePlayground from './CodePlayground';
import PlaygroundHeader from './PlaygroundHeader';

// Language types
export type SupportedLanguage = 'javascript' | 'typescript' | 'python';

interface PlaygroundProps {
  id?: string | undefined;
  isHeading?: boolean;
  initialCode?: string;
  initialLanguage?: SupportedLanguage;
}

// Pyodide global declaration
declare global {
  interface Window {
    pyodide?: any;
    loadPyodide?: any;
  }
}

const Playground = ({
  id = undefined,
  isHeading = false,
  initialCode,
  initialLanguage = 'javascript',
}: PlaygroundProps) => {
  const [code, setCode] = useState<string>(initialCode ?? '');
  const [output, setOutput] = useState<string>('');
  const [isError, setError] = useState<boolean>(false);
  const [isFullScreen, setFullScreen] = useState<boolean>(false);
  const [language, setLanguage] = useState<SupportedLanguage>(initialLanguage);
  const [pyodideReady, setPyodideReady] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pyodideLoading, setPyodideLoading] = useState<boolean>(false);

  // Initialize Pyodide with better error handling
  const initPyodide = useCallback(async () => {
    if (language !== 'python' || window.pyodide || pyodideReady || pyodideLoading) {
      return;
    }

    setPyodideLoading(true);
    setIsLoading(true);

    try {
      // Check if loadPyodide is already available
      if (window.loadPyodide) {
        window.pyodide = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/"
        });
        setPyodideReady(true);
        return;
      }

      // Load Pyodide script
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js';
      script.async = true;
      
      const loadPromise = new Promise<void>((resolve, reject) => {
        script.onload = async () => {
          try {
            if (window.loadPyodide) {
              window.pyodide = await window.loadPyodide({
                indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/"
              });
              setPyodideReady(true);
              resolve();
            } else {
              reject(new Error('loadPyodide function not available'));
            }
          } catch (error) {
            reject(error);
          }
        };
        
        script.onerror = () => {
          reject(new Error('Failed to load Pyodide script'));
        };

        // Timeout after 30 seconds
        setTimeout(() => {
          reject(new Error('Pyodide loading timeout'));
        }, 30000);
      });

      document.head.appendChild(script);
      await loadPromise;

    } catch (error: unknown) {
      console.error('Failed to initialize Pyodide:', error);
      setError(true);
      
      const errorMessage = error instanceof Error 
        ? error.message 
        : typeof error === 'string' 
          ? error 
          : 'Unknown error occurred while loading Python environment';
          
      setOutput(`Failed to load Python environment: ${errorMessage}`);
    } finally {
      setIsLoading(false);
      setPyodideLoading(false);
    }
  }, [language, pyodideReady, pyodideLoading]);

  useEffect(() => {
    if (language === 'python') {
      initPyodide();
    }
  }, [language, initPyodide]);

  const handleFullScreen = () => {
    setFullScreen(!isFullScreen);
  };

  const handleLanguageChange = (newLanguage: SupportedLanguage) => {
    setLanguage(newLanguage);
    setOutput('');
    setError(false);
  };

  const executeJavaScript = (code: string): string => {
    let capturedConsoleOutput = '';
    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;
    const originalConsoleWarn = console.warn;

    // Capture all console outputs
    console.log = (...args) => {
      capturedConsoleOutput += args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' ') + '\n';
    };
    console.error = (...args) => {
      capturedConsoleOutput += 'ERROR: ' + args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' ') + '\n';
    };
    console.warn = (...args) => {
      capturedConsoleOutput += 'WARNING: ' + args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' ') + '\n';
    };

    try {
      // Use Function constructor for safer evaluation
      const result = new Function(`
        ${code}
      `)();
      
      let output = capturedConsoleOutput;
      if (result !== undefined) {
        output += (output ? '\n' : '') + 'Return value: ' + 
          (typeof result === 'object' ? JSON.stringify(result, null, 2) : String(result));
      }
      
      return output || '(no output)';
    } catch (jsError: unknown) {
      const errorMessage = jsError instanceof Error 
        ? jsError.message 
        : typeof jsError === 'string' 
          ? jsError 
          : 'Unknown JavaScript execution error';
          
      throw new Error(errorMessage);
    } finally {
      // Restore original console methods
      console.log = originalConsoleLog;
      console.error = originalConsoleError;
      console.warn = originalConsoleWarn;
    }
  };

  const executeTypeScript = (code: string): string => {
    try {
      // Transpile TypeScript to JavaScript using Babel
      const result = transform(code, {
        presets: ['@babel/preset-typescript'],
        filename: 'temp.ts',
      });

      const jsCode = result.code;
      if (!jsCode) throw new Error('Failed to transpile TypeScript');

      return executeJavaScript(jsCode);
    } catch (transpileError: unknown) {
      const errorMessage = transpileError instanceof Error 
        ? transpileError.message 
        : typeof transpileError === 'string' 
          ? transpileError 
          : 'Unknown TypeScript compilation error';
          
      throw new Error(`TypeScript Error: ${errorMessage}`);
    }
  };

  const executePython = async (code: string): Promise<string> => {
    if (!window.pyodide || !pyodideReady) {
      throw new Error('Python environment not ready. Please wait for initialization to complete...');
    }

    try {
      // Clear any previous output capture
      await window.pyodide.runPython(`
        import sys
        from io import StringIO
        
        # Create a new StringIO object for capturing output
        captured_output = StringIO()
        
        # Redirect stdout to capture print statements
        old_stdout = sys.stdout
        old_stderr = sys.stderr
        sys.stdout = captured_output
        sys.stderr = captured_output
      `);

      // Execute the user's Python code
      let result;
      try {
        result = await window.pyodide.runPython(code);
      } catch (pythonError: unknown) {
        // Python execution error - get the captured output first
        const capturedOutput = await window.pyodide.runPython(`
          sys.stdout = old_stdout
          sys.stderr = old_stderr
          captured_output.getvalue()
        `);
        
        const errorMessage = pythonError instanceof Error 
          ? pythonError.message 
          : typeof pythonError === 'string' 
            ? pythonError 
            : 'Unknown Python error';
            
        throw new Error(capturedOutput || errorMessage);
      }

      // Get the captured output and restore stdout/stderr
      const capturedOutput = await window.pyodide.runPython(`
        output = captured_output.getvalue()
        sys.stdout = old_stdout
        sys.stderr = old_stderr
        output
      `);

      let output = capturedOutput || '';
      if (result !== undefined && result !== null && result !== '') {
        output += (output ? '\n' : '') + 'Return value: ' + String(result);
      }

      return output || '(no output)';
    } catch (pythonExecError: unknown) {
      const errorMessage = pythonExecError instanceof Error 
        ? pythonExecError.message 
        : typeof pythonExecError === 'string' 
          ? pythonExecError 
          : 'Unknown Python execution error';
          
      throw new Error(errorMessage);
    }
  };

  const handleRunCode = async () => {
    if (!code.trim()) {
      setOutput('(no code to execute)');
      return;
    }

    // Check if Python is selected but not ready
    if (language === 'python' && (!pyodideReady || pyodideLoading)) {
      setOutput('Python environment is loading... Please wait and try again.');
      return;
    }

    setIsLoading(true);
    setError(false);

    try {
      let result: string;

      switch (language) {
        case 'javascript':
          result = executeJavaScript(code);
          break;
        case 'typescript':
          result = executeTypeScript(code);
          break;
        case 'python':
          result = await executePython(code);
          break;
        default:
          throw new Error(`Unsupported language: ${language}`);
      }

      setOutput(result || '(no output)');
    } catch (execError: unknown) {
      setError(true);
      
      const errorMessage = execError instanceof Error 
        ? execError.message 
        : typeof execError === 'string' 
          ? execError 
          : 'An unknown error occurred during code execution';
          
      setOutput(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isHeading && <PlaygroundHeader />}

      <CodePlayground
        id={id}
        onFullScreen={handleFullScreen}
        code={code}
        output={output}
        isError={isError}
        isLoading={isLoading || (language === 'python' && pyodideLoading)}
        language={language}
        onLanguageChange={handleLanguageChange}
        onRunCode={handleRunCode}
        onSetCode={setCode}
        onSetOutput={setOutput}
      />

      <ModalWrapper isOpen={isFullScreen} onClose={handleFullScreen}>
        <CodePlayground
          id={id}
          isFullScreen={isFullScreen}
          onCloseFullScreen={handleFullScreen}
          code={code}
          output={output}
          isError={isError}
          isLoading={isLoading || (language === 'python' && pyodideLoading)}
          language={language}
          onLanguageChange={handleLanguageChange}
          onRunCode={handleRunCode}
          onSetCode={setCode}
          onSetOutput={setOutput}
        />
      </ModalWrapper>
    </>
  );
};

export default Playground;