import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Header = ({ darkMode, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <header className="navbar fixed top-0 z-40 bg-opacity-90 backdrop-blur-md shadow-md w-full">
      <div className="container mx-auto px-4">
        <div className="navbar-start">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="btn btn-ghost normal-case text-xl cursor-pointer"
          >
            Portfolio
          </Link>
        </div>
        
        <div className="navbar-end">
          {/* Desktop menu */}
          <ul className="hidden md:flex menu menu-horizontal px-1 items-center">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer"
                  activeClass="active"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={toggleTheme}
                className="btn btn-ghost btn-circle ml-2"
                aria-label="Toggle Theme"
              >
                {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-gray-700" />}
              </button>
            </li>
          </ul>
          
          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-circle mr-2"
              aria-label="Toggle Theme"
            >
              {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-gray-700" />}
            </button>
            <button className="btn btn-ghost" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-base-100 shadow-md p-4 z-50">
          <ul className="menu">
            {menuItems.map((item) => (
              <li key={item.id} className="w-full">
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer p-2"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;