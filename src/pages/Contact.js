import React, {useState, useContext} from 'react'
import './Contact.css'
import { ThemeContext } from '../App'



function Contact() {
  const theme = useContext(ThemeContext)
  const [formData, setFormData] = useState({
    "entry.214400734":"",
    "entry.917476425":"",
    "entry.434279139":""
  })
  const [submitted, setSubmitted] = useState(false)

  const submit=(e)=>{
    e.preventDefault()
    fetch(`https://docs.google.com/forms/u/0/d/e/1FAIpQLScpccJ6VSMNzlwwT1if20CitmDyEtyRLa6c9L265tg2fCDJWA/formResponse?entry.214400734=${formData['entry.214400734']}&entry.917476425=${formData['entry.917476425']}&entry.434279139=${formData['entry.434279139']}`,
      {
        method: "POST",
        mode: 'no-cors'
      })
    .then(()=>{
      setFormData({"entry.214400734":"",
        "entry.917476425":"",
        "entry.434279139":""})
        setSubmitted(true)

        setTimeout(() => {
          setSubmitted(false)
        }, 5000);
      }
    )
    .catch(err=>console.log("err"))
  }
  const colorStyle = theme?{color: "white"}:{color:"black"}
  return (
    <div className='contact'>
      <div className="links" >
        <a href="https://github.com/Michael-S-W" rel="noreferrer" target='_blank' style={colorStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/michaelswelson/" rel="noreferrer" target='_blank' style={colorStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
          </svg>
        </a>
        <a href="https://www.facebook.com/michaelsalahwelson2010" rel="noreferrer" target='_blank' style={colorStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
        </svg>
        </a>
        <a href="mailto:michael_s.wilson@ymail.com" rel="noreferrer" target='_blank' style={colorStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
          </svg>
        </a>
        <a href="tel:00201007015953" rel="noreferrer" target='_blank' style={colorStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
          </svg>
        </a>
      </div>
      <form onSubmit={submit} style={{colorStyle}}>
        <label htmlFor='name-input-field' className='"name-input-field"'>Name:</label>
        <input type='text' name="entry.214400734" id="name-input-field" placeholder='Enter Your Name' value={formData['entry.214400734']} required onChange={(e)=>setFormData(p=>({...p,"entry.214400734":e.target.value}))}></input>
        <label htmlFor='company-input-field'>Company:</label>
        <input type='text' name="entry.917476425" id="company-input-field" placeholder='Company Name' value={formData['entry.917476425']} required onChange={(e)=>setFormData(p=>({...p,"entry.917476425":e.target.value}))}></input>
        <label htmlFor='feedback-input-field'>Feedback:</label>
        <textarea type='text' name="entry.434279139" id="feedback-input-field" placeholder='Your Feedback' required value={formData['entry.434279139']} onChange={(e)=>setFormData(p=>({...p,"entry.434279139":e.target.value}))}/>
        
        {submitted?<h3>Thank You For Your Feedback</h3>:<button style={{colorStyle}}>Submit Feedback</button>}
      </form>
    </div>
  )
}

export default Contact
