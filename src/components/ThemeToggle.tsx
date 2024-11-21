import React from 'react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white shadow-lg transition-all duration-200 hover:scale-105"
    >
      {isDarkMode ? (
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Light Mode</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Dark Mode</span>
        </div>
      )}
    </button>
  );
};

export default ThemeToggle;
