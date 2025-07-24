import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <img src="https://i.imgur.com/nc3H3rN.png" alt="Lifters Logo" />
      <nav>
        <Link to="/">🏠 Inicio</Link>
        <Link to="/acerca">📋 Registro de Competidor</Link>
        <Link to="/contacto">🏆 Competencias Disponibles</Link>
        <Link to="#">📢 Difusión de Información</Link>
        <Link to="#">📊 Resultados</Link>
      </nav>
    </header>
  )
}

export default Nav
