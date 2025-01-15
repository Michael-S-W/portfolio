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
        <p id='my-name'>
          <span style={{'animationDelay':'0.1s'}}>M</span>
          <span style={{'animationDelay':'0.2s'}}>c</span>
          <span style={{'animationDelay':'0.3s'}}>i</span>
          <span style={{'animationDelay':'0.4s'}}>h</span>
          <span style={{'animationDelay':'0.5s'}}>a</span>
          <span style={{'animationDelay':'0.6s'}}>e</span>
          <span style={{'animationDelay':'0.7s'}}>l</span>
        </p>
        <span>Front End Developer</span>
      </div>
      <div className='home-logos'>
        <img style={{'animationDelay':'0.125s'}} src={htmlLogo}  alt='html'/>
        <img style={{'animationDelay':'0.25s'}} src={cssLogo} alt='css'/>
        <img style={{'animationDelay':'0.375s'}} src={jsLogo} alt='js'/>
        <img style={{'animationDelay':'0.5s'}} src={jqueryLogo} alt='jquery'/>
        <img style={{'animationDelay':'0.625s'}} src={bootstrapLogo} alt='bootstrap'/>
        <img style={{'animationDelay':'0.75s'}} src={reactLogo} alt='react'/>
        <img style={{'animationDelay':'0.825s'}} src={gitLogo} alt='git'/>
        <img style={{'animationDelay':'1s'}} src={githubLogo} alt='github'/>
      </div>
    </div>
  )
}

export default Home
