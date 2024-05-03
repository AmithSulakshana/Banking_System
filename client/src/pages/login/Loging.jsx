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
    <div className='w-[450px] min-h-[450px] rounded-2xl shadow-lg p-2 flex flex-col gap-2 border-[1px] border-slate-400 m-5'>
        <div className='bg-gradient-to-r from-orange-500 to-yellow-100 w-full p-2 h-[40px] flex items-center text-[18px] font-medium'>
               Loging
        </div>
        <div className='m-1'>
            <label className='font-semibold'>User Name: </label>
            <input className='pl-1 outline-none' value={userName} type='text' onChange={(e)=>setUserName(e.target.value)}/>
        </div>
        
        <div className='m-1'>
            <label className='font-semibold'>Password: </label>
            <input  className='pl-1 outline-none' value={password} type='password' onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <button onClick={handleLogin} className='w-[120px] h-[45px] rounded-3xl font-semibold bg-orange-400 mx-auto hover:bg-orange-500'>Login</button>
      
    </div>
  )
}

export default Loging;
