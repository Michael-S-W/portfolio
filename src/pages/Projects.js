import React, { useEffect, useState, useContext} from 'react'
import { ThemeContext } from '../App'
import './Projects.css'
import { RotatingLines } from 'react-loader-spinner'



function Projects() {
  const [github , setGithub] = useState('')
  const [liveLink, setLiveLink]  = useState('')
  const theme = useContext(ThemeContext)

  useEffect(()=>{
    fetch('https://api.github.com/users/Michael-S-W/repos')
    .then(res=>res.json())
    .then(data=>setGithub(data))
    .catch(err=>console.log(err))
  },[])


  function handleClick(e){
    if(e.target.className === 'active'){
      e.target.classList.remove('active')
      setLiveLink('')
      return
    }
    document.querySelectorAll(".project-text button").forEach(e=>e.classList.remove('active'))
    setLiveLink(`${'https://Michael-S-W.github.io/'+e.target.id+'/'}`) 
    e.target.classList.add('active')
  }

  return (
    <div className='projects'>
      <div className='project' >
      <RotatingLines
        visible={!github}
        height="96"
        width="96"
        color="blue"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
        {github&&
        github.map((data)=>
            <div key={data.id} >
              <div className='project-text'>
              <button 
              id={data.name} 
              onClick={handleClick}
              style={theme?{color:"white"}:{color:"black"}}
              >{data.name}</button>
              <a href={data.html_url} target='_blank' rel='noreferrer'>Source code here</a>
              {/* <hr/> */}
              </div>
            </div>
        )
      }
      </div>
        {liveLink?<iframe className='project-iframe' src={liveLink} title='liveMirror' width={'100%'} height={'100%'} style={{margin:"0 0"}}></iframe>:<h2>Click project to view</h2>}
    </div>
  )
}

export default Projects
