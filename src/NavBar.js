import React from 'react';
import './NavBar.css';
import { Link, Outlet } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
    

    <>
      <nav>
        <Link to='/'>HomePage</Link>
        <div className='btns'>
        <Link to='/todolist' className='nav-btn1'>Todos</Link>
        <br></br>
        <Link to='/form' className='nav-btn2'>Forms</Link>
        </div>
        <Link to='/profile'>About Us</Link>
      </nav>
      <Outlet />
    </>
  
    </div>
  )
}

export default NavBar
