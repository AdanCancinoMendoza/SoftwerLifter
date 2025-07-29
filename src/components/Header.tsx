// src/components/Header.tsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
         <img src="/devantis.jpg" alt="MiApp Logo" className="logo-img" />
      <div className="logo"> SoftwareLifter</div>
      <nav className="nav-links">
        <a href="#">Registro de competidores</a>
        <a href="#">Competencias</a>
        <a href="#">Difusíon de Información</a>
        <a href="#">Resultados</a>
      </nav>
      <div className="auth-buttons">
        <button className="btn-secondary">Registro</button>
        <button className="btn-primary">Inicio de sesión</button>
      </div>
    </header>
  );
};

export default Header;
