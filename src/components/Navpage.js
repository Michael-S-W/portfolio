import React from 'react'
import { Routes,Route } from 'react-router'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import './Navpage.css'

function Navpage() {
  return (
    <div className='navpage'>
      <div className='empty-div'></div>
      <div className='page-div'>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default Navpage
