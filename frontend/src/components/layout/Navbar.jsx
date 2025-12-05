import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className='navbar'>
      <div className='navbar-inner'>
        <Link to='/' className='navbar-logo'>
          Sonoro
        </Link>
        <nav className='navbar-nav'>
          <NavLink to='/' end className='navbar-link'>
            Mixer
          </NavLink>
          <NavLink to='/mixes' end className='navbar-link'>
            Mixes
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
