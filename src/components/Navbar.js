import './Navbar.css'
import React from 'react'
import logo from '../icons-svg/logo-new.png'
// import homeLogo from '../icons-svg/home.svg'
// import projectsLogo from '../icons-svg/projects.svg'
// import contactLogo from '../icons-svg/call.svg'



export default function Navbar({theme, setTheme}) {


  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt="logo"/>
        <span>
        Portfolio
        </span>
      </div>
      <div className='navbar-list'>
        <span className='navbar-list-item'>Home</span>
        <span className='navbar-list-item'>Projects</span>
        <span className='navbar-list-item'>Contact</span>
        <button onClick={()=>setTheme(p=>!p)}>{theme?<span>🌞</span>:<span>🌚</span>}</button>
        
      </div>
      
    </div>
  )
}
