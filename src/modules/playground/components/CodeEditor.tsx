/* eslint-disable @typescript-eslint/no-explicit-any */
import MonacoEditor, { EditorProps } from '@monaco-editor/react';
import { SupportedLanguage } from './Playground';

interface CodeEditorProps {
  code: string;
  height?: string;
  language: SupportedLanguage;
  onChange: EditorProps['onChange'];
  isFullScreen?: boolean;
}

const editorConfig = {
  fontSize: 14,
  minimap: {
    enabled: false,
  },
  wordWrap: 'on',
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
  const handleEditorMount = (editor: any) => {
    setTimeout(function () {
      try {
        editor.getAction('editor.action.formatDocument')?.run();
      } catch (error) {
        // Some languages might not support formatting
        console.warn('Formatting not available for this language');
      }
    }, 500);
  };

  return (
    <MonacoEditor
      height={isFullScreen ? '70vh' : height}
      language={getMonacoLanguage(language)}
      theme='vs-dark'
      value={code}
      onChange={onChange}
      options={editorConfig}
      onMount={handleEditorMount}
    />
  );
};

export default CodeEditor;