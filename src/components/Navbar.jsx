import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import './navbar.css'
import Logo from '../images/logo.png'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'


function Navbar() {
    const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
        <div className="container nav__container">
          <Link to="/" onClick={() => setIsNavShowing(prev => !prev)} className='logo'>
            <img src={Logo} alt="Nav Logo" />
          </Link>
          <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
            {
              links.map(({name, path}, index) => {
                return(
                  <li key={index}>
                    <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}
                    onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                  </li>
                )
              })
            }
          </ul>
          <button className="nav__toggle-btn" onClick={() => setIsNavShowing (prev => !prev)}>
            {
              isNavShowing ? <MdOutlineClose/> : <GoThreeBars/> 
            }
          </button>
        </div>
    </nav>
  )
}

export default Navbar