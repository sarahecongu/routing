import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'

const LandPage = () => {
  return (
    <div>
      <div className='landing-page'>
      <h3>Get started with my app</h3>
      <p>Explore more by clicking the buttons below or using the navigation</p>
      <div className='home'>
        <button><Link to='/todolist' className='landing-button'>Go To Todos</Link></button>
        <br></br>
        <button><Link to='/form' className='landing-button'>Go To Forms</Link></button>
      </div>
    </div>

    </div>
  )
}

export default LandPage
