import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Summery = () => {

    const[summery,setSummery] = useState()
    const[loding,setLoding] = useState(true)

    useEffect(()=>{
        axios.get("http://localhost:3001/account/summery",{headers:{accessToken:localStorage.getItem("accessToken")}}).then((res)=>{
            setSummery(res.data)
            setLoding(false)
        })
    },[])

    if(loding){
        return <p>Loding...</p>
    }

  return (
    <div className='p-4'>
         {summery.map((val,index)=>(
             <div className='w-[400px] h-[300px] p-3 shadow-md border-[1px] border-slate-400 rounded-xl' key={index}>
                  <div className='bg-gradient-to-r from-orange-500 to-yellow-100 w-full p-2 h-[40px] flex items-center text-[18px] font-medium'>Account Summery</div>
                  <p className='mt-3 text-slate-400'>Account No</p>
                  <p className='text-[18px] text-slate-700 font-semibold'>{val.accountNumber}</p>
                  <p className='mt-3 text-slate-400'>Account Type</p>
                  <p className='text-[18px] text-slate-700 font-semibold'>{val.accountType}</p>
                  <p className='mt-3 text-slate-400'>Available balance</p>
                  <p className='text-[20px] text-red-600 font-bold'>LKR {val.balance}</p>
            </div>
         ))

         }   
    </div>
  )
}

export default Summery
