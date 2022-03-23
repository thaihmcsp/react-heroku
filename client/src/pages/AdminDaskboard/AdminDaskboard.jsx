import React, {useEffect, useState} from 'react'
import './AdminDaskboard.css'
import DaskboardBody from './DaskboardBody'
import DaskboardNav from './DaskboardNav'
import axios from '../../config/axios'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function AdminDaskboard() {
  const user = useSelector(state => state.user)
  const [userInfo, setUserInfo] = useState({})
  const [daskboard, setDaskboard] = useState('DaskboardSummary')
  const history = useNavigate()
  console.log(28, user);
  useEffect(() => {
    const token = getCookie('uID')
    if(token){
      async function checkAdmin (){
        try {
          const user = await axios.get('/user/admin', {
            headers: {
              Authorization: token
            }
          })
          setUserInfo(user.data.user)
        } catch (error) {
          console.log(error);
        }
      }
      checkAdmin()
    }else{
      history('/login')
    }
  }, [])

  function changeDaskboard (menuDaskboard){
    setDaskboard(menuDaskboard)
  }

  return (
    <div className='AdminDaskboard'>
      <DaskboardNav userInfo={userInfo} changeDaskboard={changeDaskboard} />
      <DaskboardBody daskboard={daskboard}/>
    </div>
  )
}

export default AdminDaskboard
