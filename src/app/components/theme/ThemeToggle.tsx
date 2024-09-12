"use client"
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
          onClick={toggleTheme}
          className="p-2 text-sm bg-gray-200 dark:bg-gray-800 rounded-full border-2 border-gray-200"
        >
          {theme === 'light' ? <IoMoonOutline className="w-6 h-6"/> : <IoSunnyOutline className="w-6 h-6"/>}
        </button>
      );
}

export default ThemeToggle;