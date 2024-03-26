import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logingSuccess } from '../../store/reducers/UserSlice';
import { useNavigate } from 'react-router-dom';

const Loging = () => {
    const[userName,setUserName] = useState('');
    const[password,setPassword] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = () =>{
        axios.post("http://localhost:3001/user/login",{userName:userName,password:password}).then((res)=>{

            if(res.data.error){
                alert(res.data.error)
            }
            else{
                localStorage.setItem("accessToken",res.data.token)
                dispatch(logingSuccess({userName:res.data.userName,id:res.data.id}))
                alert("loging success")
                navigate("/")
            }
        })
    }
   
  return (
    <div className='pt-[20px] pl-3 '>
        <div>
            <label>User Name: </label>
            <input value={userName} type='text' onChange={(e)=>setUserName(e.target.value)}/>
        </div>
        
        <div>
            <label>Password: </label>
            <input value={password} type='password' onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <button onClick={handleLogin}>Login</button>
      
    </div>
  )
}

export default Loging;
