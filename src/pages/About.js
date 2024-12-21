import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import './About.css'

function About() {
  const theme = useContext(ThemeContext)
  return (
    <div className='about' style={theme?{color: "white"}:{color:"black"}}>
      about
    </div>
  )
}

export default About
