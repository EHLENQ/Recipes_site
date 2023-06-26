import React from 'react'
import { NavLink , Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


function Navbar() {
  const {color} = useContext(ThemeContext);


  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-dark bg-${color}`}>
            <div className="container">
                <Link className='navbar-brand' to='/'>Yemek Tarifleri</Link>
                <ul className='navbar-nav me-auto'>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/Create'>Create</NavLink>
                    </li>
                </ul>
                <SearchBar />
            </div>
        </nav>
    </div>
  )
}

export default Navbar