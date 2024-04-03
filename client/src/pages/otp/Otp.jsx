import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Otp() {
    const[otp,setOtp] = useState('')
    const account =  useSelector(store=>store.paySlice)

    const handleOtp = () => {
          const money = parseFloat(account.amount)
        axios.post(
            "http://localhost:3001/account/sendmoney",
            { accountNumber: account.account, money: money, otp: otp },
            {
                headers: {
                    accessToken: localStorage.getItem("accessToken")
                }
            }
        ).then((res) => {
            alert(res.data);
            axios.delete("http://localhost:3001/account/clearotp",{headers:{
                accessToken: localStorage.getItem("accessToken")

            }}).then((res)=>{
                console.log(res.data)
            })
        }).catch(error => {
            console.error("Error:", error);
        });
    }
    
  return (
    <div className='p-4'>
        <div className='w-[350px] h-[350px] shadow-md flex flex-col gap-2'>
            <div className='bg-gradient-to-r from-orange-500 to-yellow-100 w-full p-2 h-[40px] font-medium'>Enter your Otp</div>
            <div className='w-full h-[50px] flex items-center border-[1px] border-slate-400 rounded-3xl p-3'>
               <input className='outline-none' value={otp} type='text' onChange={(e)=>setOtp(e.target.value)}/>
           </div>
            <button className='w-[120px] h-[45px] rounded-3xl font-semibold bg-orange-400 mx-auto hover:bg-orange-500' onClick={handleOtp}>Send Otp</button>
        </div>
     
    </div>
  )
}

export default Otp;
