import React from 'react'
import { Routes,Route} from 'react-router'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import About from '../pages/About'
import './Navpage.css'

function Navpage({theme}) {
  return (
    <div className={theme?'navpage dark':'navpage'} style={theme?{color:"white"}:{color:"black"}}>
      <div className='empty-div'></div>
      <div className='page-div'>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/portfolio' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default Navpage
