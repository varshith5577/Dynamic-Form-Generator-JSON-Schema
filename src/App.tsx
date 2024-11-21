import React, { useState, useEffect } from 'react';
import JsonEditor from './components/JsonEditor';
import FormPreview from './components/FormPreview';
import { FormSchema } from './types/form';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  const [schema, setSchema] = useState<FormSchema | null>(null);
  const [jsonError, setJsonError] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleJsonChange = (jsonString: string) => {
    try {
      const parsed = JSON.parse(jsonString);
      setSchema(parsed);
      setJsonError('');
    } catch (error) {
      setJsonError((error as Error).message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          Dynamic Form Generator
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <JsonEditor onChange={handleJsonChange} error={jsonError} isDarkMode={isDarkMode} />
          <FormPreview schema={schema} />
        </div>
      </div>
    </div>
  );
};

export default App;
