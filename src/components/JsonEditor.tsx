import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

interface JsonEditorProps {
  onChange: (value: string) => void;
  error: string;
  isDarkMode: boolean;
}


const JsonEditor: React.FC<JsonEditorProps> = ({ onChange, error }) => {
  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = (value: string | undefined) => {
    if (value) {
      setEditorContent(value);
      onChange(value);
    }
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(editorContent).then(() => {
      const copyButton = document.getElementById('copyButton');
      if (copyButton) {
        const originalText = copyButton.innerText;
        copyButton.innerText = 'Copied!';
        copyButton.classList.add('bg-green-500');
        
        setTimeout(() => {
          copyButton.innerText = originalText;
          copyButton.classList.remove('bg-green-500');
        }, 2000);
      }
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          JSON Schema Editor
        </h2>
        <button
          id="copyButton"
          onClick={handleCopyJson}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Copy JSON
        </button>
      </div>
      <div className="h-[600px] border rounded-lg overflow-hidden">
        <Editor
          defaultLanguage="json"
          defaultValue={JSON.stringify({
            title: "Dynamic Sample Form",
            fields: []
          }, null, 2)}
          onChange={handleEditorChange}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
          }}
        />
      </div>
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}
    </div>
  );
};

export default JsonEditor;
