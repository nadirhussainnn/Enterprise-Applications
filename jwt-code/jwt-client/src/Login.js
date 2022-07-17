import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

export default function Login() {

    const [email, setEmail]=useState('')
    const [password, setPass]=useState('')

    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handlePass(e){
        setPass(e.target.value)
    }

    const navigate=useNavigate()

    function handleLogin(){

        console.log(email, password)
        fetch('http://localhost:5000/login',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify({email, password})
          }).then(res=>res.json()).then(res=>{

            localStorage.setItem('token', res.token)
            localStorage.setItem('_id', res.data._id)
            navigate('/dash')
        })

    }

  return (
    <div>
      <form>
        <div style={{ padding: 20, marginTop: 20, marginBottom: 10 }}>
          <label>Email</label>
          <input type="text" name="email" value={email} onChange={handleEmail} />
        </div>
        <div style={{ padding: 20, marginTop: 20, marginBottom: 10 }}>
          <label>Password</label>
          <input type="text" name="password" value={password} onChange={handlePass} />
        </div>
    </form>
      <div style={{ padding: 20, marginBottom: 10 }}>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
