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

  return (
    <div className='contact'>
      
      <form onSubmit={submit} style={theme?{color:"white"}:{color:"black"}}>
        <label htmlFor='name-input-field' className='"name-input-field"'>Name:</label>
        <input type='text' name="entry.214400734" id="name-input-field" placeholder='Enter Your Name' value={formData['entry.214400734']} required onChange={(e)=>setFormData(p=>({...p,"entry.214400734":e.target.value}))}></input>
        <label htmlFor='company-input-field'>Company:</label>
        <input type='text' name="entry.917476425" id="company-input-field" placeholder='Company Name' value={formData['entry.917476425']} required onChange={(e)=>setFormData(p=>({...p,"entry.917476425":e.target.value}))}></input>
        <label htmlFor='feedback-input-field'>Feedback:</label>
        <textarea type='text' name="entry.434279139" id="feedback-input-field" placeholder='Your Feedback' required value={formData['entry.434279139']} onChange={(e)=>setFormData(p=>({...p,"entry.434279139":e.target.value}))}/>
        
        {submitted?<h3>Thank You For Your Feedback</h3>:<button style={theme?{color:"white"}:{color:"black"}}>Submit Feedback</button>}
      </form>
    </div>
  )
}

export default Contact
