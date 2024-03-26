import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { payment } from '../../store/reducers/Pay';
import { useNavigate } from 'react-router-dom';

const FundTransfer = () => {

  const[account,setAccount] = useState()
  const[amount,setAmount] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlePay = () =>{
    axios.post("http://localhost:3001/account/otp",{accountNumber:account},{headers:{accessToken:localStorage.getItem("accessToken")}}).then((res)=>{
      if(res.data.error){
        alert(res.data.error)
      }
      else{
        dispatch(payment({account:account,amount:amount}))
        navigate("/otp")
      }
      
    })
  }

  return (
    <div className='pl-4'>
       <h3>From Account: </h3>
       <h3>To Account: </h3>
       <input value={account} type='text' onChange={(e)=>setAccount(e.target.value)}/>
       <h3>Amount: </h3>
       <input value={amount} type='text' onChange={(e)=>setAmount(e.target.value)}/>

       <button onClick={handlePay}>Pay</button>
       
    </div>
  )
}

export default FundTransfer;
