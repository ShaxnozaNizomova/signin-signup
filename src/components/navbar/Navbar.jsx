import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div>
        <ul className='navbar__menu'>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/login"}>Login</NavLink></li>
            <li><NavLink to={"/register"}>Register</NavLink></li>
            <li><NavLink to={"/user"}>User</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
