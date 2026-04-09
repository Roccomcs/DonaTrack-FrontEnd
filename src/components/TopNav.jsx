import { Heart } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export function TopNav() {
  return (
    <header className="dt-header">
      <div className="container dt-header-row">
        <NavLink className="brand" to="/">
          <span className="brand-mark" aria-hidden="true">
            <Heart size={20} />
          </span>
          DonaTrack
        </NavLink>

        <nav className="dt-nav" aria-label="Navegacion principal">
          <a href="/#about">Acerca de</a>
          <a href="/#donations">Donaciones</a>
          <a href="/#gallery">Galeria</a>
          <NavLink to="/explorar-donaciones">Explorar donaciones</NavLink>
        </nav>

        <div className="auth-actions">
          <NavLink to="/login" className="nav-auth-link">
            <button type="button" className="btn btn-ghost-primary">
              Iniciar sesión
            </button>
          </NavLink>
          <NavLink to="/registro" className="nav-auth-link">
            <button type="button" className="btn btn-primary">Registrarse</button>
          </NavLink>
        </div>
      </div>
    </header>
  )
}