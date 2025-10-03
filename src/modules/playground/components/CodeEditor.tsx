import MonacoEditor, { EditorProps } from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import { SupportedLanguage } from './Playground';

interface CodeEditorProps {
  code: string;
  height?: string;
  language: SupportedLanguage;
  onChange: EditorProps['onChange'];
  isFullScreen?: boolean;
}

const editorConfig: editor.IStandaloneEditorConstructionOptions = {
  fontSize: 14,
  minimap: {
    enabled: false,
  },
  wordWrap: "on",
  scrollbar: {
    verticalScrollbarSize: 9,
  },
  scrollBeyondLastLine: false,
  formatOnPaste: true,
  formatOnType: true,
};

// Map our language types to Monaco language identifiers
const getMonacoLanguage = (language: SupportedLanguage): string => {
  switch (language) {
    case 'javascript':
      return 'javascript';
    case 'typescript':
      return 'typescript';
    case 'python':
      return 'python';
    default:
      return 'javascript';
  }
};

const CodeEditor = ({
  code,
  onChange,
  language,
  height = '300px',
  isFullScreen = false,
}: CodeEditorProps) => {
  const handleEditorMount = (editorInstance: editor.IStandaloneCodeEditor) => {
    setTimeout(() => {
      try {
        editorInstance.getAction('editor.action.formatDocument')?.run();
      } catch (error) {
        console.warn('Formatting not available for this language');
      }
    }, 500);
  };

  return (
    <MonacoEditor
      height={isFullScreen ? '70vh' : height}
      language={getMonacoLanguage(language)}
      theme="vs-dark"
      value={code}
      onChange={onChange}
      options={editorConfig}
      onMount={handleEditorMount}
    />
  );
};

export default CodeEditor;
