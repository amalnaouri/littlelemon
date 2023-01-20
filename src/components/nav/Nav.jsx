import logo from '../../assets/Logo .svg';
import './nav.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


const Nav = () => {
  return (
    <header>
      <nav>
        <Link to='/' className='logo'>
          <img src={logo} alt='logo' />
        </Link>
        <div className='menu'>
          <ul>
              <CustomLink to='/'>Home</CustomLink>
              <CustomLink to='/about'>About</CustomLink>
              <CustomLink to='/menu'>Menu</CustomLink>
              <CustomLink to='/reservations'>Reservations</CustomLink>
              <CustomLink to='/order-online'>Order Online</CustomLink>
              <CustomLink to='/login'>Login</CustomLink>
          </ul>
        </div>
      </nav>
    </header>
  )
}

function CustomLink({ to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive === to ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Nav
