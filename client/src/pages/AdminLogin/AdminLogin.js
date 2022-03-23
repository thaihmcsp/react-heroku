import React from "react";
import './AdminLogin.css'
import { Link, useNavigate } from "react-router-dom";
import axios from '../../config/axios'
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../slice/userSlice";

function AdminLogin() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  async function login(){
    try {
      const email = document.querySelector('#email').value
      const password = document.querySelector('#password').value
      if(email && password){
        if(email.includes('@')){
          const res = await axios.post('/user/admin/login', {email, password})
          if(res.data.status === 200){
            setCookie('uID', res.data.token, 7)
            const action = getUser(res.data.user)
            dispatch(action)
            console.log(30, action);
            console.log(31, user);
            navigate('/admin/daskboard')
          }else{
            console.log(res);
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
    <div className="AdminLogin">
      <h1>Login Daskboard</h1>
      {user.username}
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
  );
}

export default AdminLogin;
