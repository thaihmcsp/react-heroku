import React from 'react'
import './Signup.css'
import axios from '../../config/axios'
import { Link } from "react-router-dom";

function SignUp() {
  async function signUp (){
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const confirm = document.querySelector('#confirm').value
    const emailCheck = validateEmail(email)
    const passCheck = validatePass(password, confirm)
    const check = !(emailCheck || passCheck) ? '' : 
                  emailCheck ? emailCheck : passCheck
    if(check){
      alert(check)
    }
    try {
      const res = await axios.post('/user',{email, password, username:email})
      console.log(20, res.data);
    } catch (error) {
      console.log(22, error);
    }
  }

  function validateEmail(email){
    let check = email.includes('@') ? '' : 'email thiếu @'
    return check
  }

  function validatePass(password, confirm){
    let check = password === confirm ? '' : 'password chưa khớp'
    return check
  }

  return (
    <div className='SignUp'>
      <h1>Sign up</h1>
      <div className="logo">
        <img src="../../../logo192.png" alt='logo'/>
      </div>
      <div className="input">
        <input placeholder="Email" id="email" type='email'></input>
      </div>
      <div className="input">
        <input placeholder="Password" id="password" type='password'></input>
      </div>
      <div className="input">
        <input placeholder="Confirm password" id="confirm" type='password'></input>
      </div>
      <div className="login">
        <button onClick={signUp}>Sign up</button>
      </div>
      <div className="text">
        <p>Go to <Link to='/login'>Login</Link> </p>
      </div>
    </div>
  )
}

export default SignUp
