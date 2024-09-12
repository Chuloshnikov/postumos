"use client"
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
          onClick={toggleTheme}
          className="p-2 text-sm bg-gray-200 dark:bg-gray-800 rounded-md"
        >
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
      );
}

export default ThemeToggle;