import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>
        {/* Aquí irán tus páginas o contenido */}
        <h1>Bienvenido a MiAppFullstack</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
