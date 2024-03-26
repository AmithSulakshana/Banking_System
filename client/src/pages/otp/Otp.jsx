import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Otp() {
    const[otp,setOtp] = useState()
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
    <div>
      <h3>Enter your Otp: </h3>
      <input value={otp} type='text' onChange={(e)=>setOtp(e.target.value)}/>
      <button onClick={handleOtp}>Send Otp</button>
    </div>
  )
}

export default Otp;
