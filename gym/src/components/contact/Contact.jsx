import React, { useState } from 'react'
import './Contact.css'

function Contact() {
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [phone,setPhone] =useState()

const handleChange = (e) => {
  const { name, value } = e.target;
  if (name === "name") {
    setName(value);
  } else if (name === "email") {
    setEmail(value);
  } else if (name === "phone") {
    setPhone(value);
  }
};

const handleSubmit=(e)=>{
  e.preventDefault()  
  alert("Submitted");
  setName("")
  setEmail("")
  setPhone("")
}


  return (
    <div>
      <container>
      <h1 style={{textAlign: 'center',color: 'white',paddingTop:"50px"}}>CONTACT US</h1>
      <div className="contact">
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} value={name} /><br/><br/>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} value={email} /><br/><br/>
          <input type="text" name="number" placeholder="Phone" onChange={handleChange} value={phone} /><br/><br/>
          <button className="submit" type="submit" >SUBMIT</button>
        </form>
        
      </div>
      </container>
    </div>
  )
}

export default Contact;
