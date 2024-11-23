import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
   <section className="topBarSection">
        <div className="companyTitle">
            <Link to='/' className='link'>
            <h2>SUBY</h2>
            </Link>
            

        </div>
        <div className="searchBar">
            <input type="text" placeholder='Search...' />
        </div>
        <div className="userAuth">
        <a 
          href="https://backend-dashboard-foodapp.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="authLink"
        >
          Login / SignUp
        </a>
        </div>
   </section>
  )
}

export default TopBar