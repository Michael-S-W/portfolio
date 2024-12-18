import React, { useContext } from 'react'
import './Home.css'
import { ThemeContext } from '../App'
import homeImage from '../icons-svg/landing-img.png'
import htmlLogo from '../technologies/HTML-Edited-min.png'
import cssLogo from '../technologies/CSS-Edited-min.png'
import jsLogo from '../technologies/JS-Edited-min.png'
import jqueryLogo from '../technologies/JQuery-Edited-min.png'
import bootstrapLogo from '../technologies/Bootstrap-Edited-min.png'
import gitLogo from '../technologies/Git-Edited-min.png'
import githubLogo from '../technologies/Github-Edited-min.png'
import reactLogo from '../technologies/React-Edited-min.png'

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
      <div className='home-logos'>
        <img src={htmlLogo}  alt='html'/>
        <img src={cssLogo} alt='css'/>
        <img src={jsLogo} alt='js'/>
        <img src={jqueryLogo} alt='jquery'/>
        <img src={bootstrapLogo} alt='bootstrap'/>
        <img src={reactLogo} alt='react'/>
        <img src={gitLogo} alt='git'/>
        <img src={githubLogo} alt='github'/>
      </div>
    </div>
  )
}

export default Home
