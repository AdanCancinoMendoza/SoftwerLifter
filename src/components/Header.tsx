import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/registro', label: 'Registro' },
    { path: '/competencias', label: 'Competencias' },
    { path: '/difusion', label: 'Difusión' },
    { path: '/resultados', label: 'Resultados' },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/src/assets/images/devantis.jpg"
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl font-bold text-gray-800">Lifters</span>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex md:items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}
        >
          {navItems.map(({ path, label }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium ${
                  active
                    ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1'
                    : 'text-gray-700 hover:text-indigo-500'
                }`}
              >
                {label}
              </Link>
            );
          })}

          <Link
            to="/cotizacion"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium ml-4"
          >
            Cotización Gratis
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
