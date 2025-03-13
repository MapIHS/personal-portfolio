import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-opacity-80 shadow-lg z-50 btn btn-circle"
      aria-label="Toggle Theme"
    >
      {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-gray-700" />}
    </button>
  );
};

export default ThemeToggle;