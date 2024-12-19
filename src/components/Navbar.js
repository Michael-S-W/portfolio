import './Navbar.css'
import React from 'react'
import logo from '../icons-svg/logo-new.png'
import { NavLink } from 'react-router'



export default function Navbar({theme, setTheme}) {


  return (
    <div className={theme?'navbar dark':'navbar'}>
      <div className='navbar-logo'>
        <img src={logo} alt="logo"/>
        <span style={theme?{color:"white"}:{color:"black"}}>
        Portfolio
        </span>
      </div>
      <div className='navbar-list main-div'>
        <NavLink className={theme?"link black":"link"} to={"/"}><span className='navbar-list-item'>Home</span>
        </NavLink>
        <NavLink className={theme?"link black":"link"} to={"/projects"}><span className='navbar-list-item'>Projects</span>
        </NavLink>
        <NavLink className={theme?"link black":"link"} to={"/contact"}><span className='navbar-list-item'>Contact</span>
        </NavLink>
        <button onClick={()=>setTheme(p=>!p)}>{theme?<span>🌞</span>:<span>🌚</span>}</button>
        
      </div>
      <div className='navbar-list small-screens'>
        <NavLink className={theme?"link black":"link"} to={"/"}><span className='navbar-list-item'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
</svg></span>
        </NavLink>
        <NavLink className={theme?"link black":"link"} to={"/projects"}><span className='navbar-list-item'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-window-stack" viewBox="0 0 16 16">
  <path d="M4.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M6 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
  <path d="M12 1a2 2 0 0 1 2 2 2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM2 12V5a2 2 0 0 1 2-2h9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1m1-4v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8zm12-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2z"/>
</svg></span>
        </NavLink>
        <NavLink className={theme?"link black":"link"} to={"/contact"}><span className='navbar-list-item'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
</svg></span>
        </NavLink>
        <button onClick={()=>setTheme(p=>!p)}>{theme?<span>🌞</span>:<span>🌚</span>}</button>
        
      </div>
      
    </div>
  )
}
