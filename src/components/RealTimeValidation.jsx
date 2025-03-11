import React, { useState } from 'react'

const  RealTimeValidation = ()=> {
   const [userDetails, setUserDetails] = useState({name: "", email: "", password: ""})
   const [nameError, setNameError] = useState("")
   const [emailError, setEmailError] = useState("")
   const [passError, setPassError] = useState("")
   const userPassword = (e)=> {
     let password = e.target.value
     if(password.length < 6)  {
        setPassError("Password must be at least 6 characters long")
     } else {
        setPassError("")
     }
   }
   const userEmail = (e)=> {
    let email = e.target.value
    let regx =  /^[a-zA-Z0-9](\.?[a-zA-Z0-9]){5,}@g(oogle)?mail\.com$/
    // if (email.match('gmail')) {
    //     regx = /^[a-zA-Z0-9](\.?[a-zA-Z0-9]){5,}@g(oogle)?mail\.com$/
    // }
    if(email.match(regx)) {
        setEmailError("")
    } else {
        setEmailError("Invalid email format")
    }
   }
   const userName = (e)=> {
    let name = e.target.value
    if(name.length < 1)  {
       setNameError("Name is required")
    } else {
       setNameError("")
    }
   }
  return (
    <div>
        <form>
            <div>
                <label htmlFor="name">Name:</label><br />
                <input onChange={userName} type="text" id='name' />
                {/* <p className='error-message'>{nameError ? nameError : ""}</p> */}
                {nameError && <p className='error-message'>{nameError}</p>}
            </div>
           <br /><br />
            <div>
                <label htmlFor="email">Email:</label><br />
                <input onChange={userEmail} id='email' type="email" />
                <p className='error-message'>{emailError ? emailError : ""}</p>
            </div>
            <br /><br />
            <div>
                <label htmlFor="password">Password:</label><br />
                <input onChange={userPassword} id='password' type="password" />
                <p className='error-message'>{passError? passError : ""}</p>
            </div>
        </form>

    </div>
  )
}

export default RealTimeValidation