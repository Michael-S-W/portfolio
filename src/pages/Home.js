import React, { useContext } from 'react'
import './Home.css'
import { ThemeContext } from '../App'
import homeImage from '../icons-svg/landing-img.png'
function Home() {

  const theme = useContext(ThemeContext)
  return (
    <div className='home' style={theme?{color: "white"}:{color:"black"}}>
      <div className='img'>
        <img src={homeImage} alt='home-image'/>
      </div>
      <div className='home-text'>
        <p>Hi, I'm </p>
        <p><span>Michael</span>,</p>
        <span>Front End Developer</span>
      </div>
      <div className='home-logos'></div>
    </div>
  )
}

export default Home
