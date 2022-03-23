import React from 'react'
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import axios from '../../config/axios';
import { getUser } from "../../slice/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const history = useNavigate()

  async function login (){
    try {
      const email = document.querySelector('#email').value
      const password = document.querySelector('#password').value
      if(email && password){
        if(email.includes('@')){
          const res = await axios.post('/user/login', {email, password})
          if(res.data.status === 200){
            console.log(res.data);
            setCookie('uID', res.data.token, 7)
            history('/') 
          }else{
            alert(res.data.mess)
          }
        }else{
          alert('email thieu @')
        }
      }else{
        alert('vui long nhap email, password')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='Login'>
      <h1>Login</h1>
      <div className="logo">
        <img src="../../../logo192.png" alt='logo'/>
      </div>
      <div className="input">
        <input placeholder="Email" id="email"></input>
      </div>
      <div className="input">
        <input placeholder="Password" id="password"></input>
      </div>
      <div className="login">
        <button onClick={login}>Login</button>
      </div>
      <div className="text">
        <p>
          Don't have an account? <Link to='/signup'>Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export default Login
