// components/Navbar.jsx
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-3xl font-medium text-gray-200">Nuhu<span className='text-blue-400'>Estate</span></span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-700 font-medium text-lg dark:text-gray-200 hover:text-blue-600">Home</a>
            <a href="/about" className="text-gray-700 font-medium text-lg dark:text-gray-200 hover:text-blue-600">About</a>
            <a href="/properties" className="text-gray-700 font-medium text-lg dark:text-gray-200 hover:text-blue-600">Properties</a>
            <a href="/contact" className="flex items-center gap-2 text-white rounded-xl bg-blue-400 px-5 py-2 font-medium text-lg dark:text-gray-200 hover:bg-blue-700">SCHEDULE VISIT<FaArrowRight /></a>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 space-y-4 pt-20">
          <a href="/" onClick={toggleMenu} className="block text-gray-800 dark:text-gray-200 hover:text-blue-600">Home</a>
          <a href="/about" onClick={toggleMenu} className="block text-gray-800 dark:text-gray-200 hover:text-blue-600">About</a>
          <a href="/properties" onClick={toggleMenu} className="block text-gray-800 dark:text-gray-200 hover:text-blue-600">Properties</a>
          <a href="/contact" onClick={toggleMenu} className="block text-gray-800 dark:text-gray-200 hover:text-blue-600">Contact</a>
        </div>
      </div>

      {/* Overlay behind the menu */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
        />
      )}
    </nav>
  );
};

export default Navbar;
