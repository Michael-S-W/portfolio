import './Navbar.css'
import React from 'react'
import logo from '../icons-svg/logo-new.png'
import { NavLink } from 'react-router'


export default function Navbar({theme, setTheme}) {


  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt="logo"/>
        <span style={theme?{color:"white"}:{color:"black"}}>
        Portfolio
        </span>
      </div>
      <div className='navbar-list'>
        <NavLink className={theme?"link black":"link"} to={"/"}><span className='navbar-list-item'>Home</span>
        </NavLink>
        <NavLink className={theme?"link black":"link"} to={"/projects"}><span className='navbar-list-item'>Projects</span>
        </NavLink>
        <NavLink className={theme?"link black":"link"} to={"/contact"}><span className='navbar-list-item'>Contact</span>
        </NavLink>
        <button onClick={()=>setTheme(p=>!p)}>{theme?<span>🌞</span>:<span>🌚</span>}</button>
        
      </div>
      
    </div>
  )
}
