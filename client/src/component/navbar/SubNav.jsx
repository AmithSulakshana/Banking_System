import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SubNav() {

    const[show,setShow] = useState(false)
    const[show1,setShow1] = useState(false)
    const head = ["Everyday Deposits","Everyday Loans","Business Loans","Cards","Digital Banking","Others","Memberships","Apply for"]
    const navigate = useNavigate()
    const user = useSelector(store=>store.userSlice)
    
    const handleMenu = (val) =>{
    
        if(val==="Everyday Deposits"){
            setShow(true)
            setShow1(false)
        }
        else if(val==="Everyday Loans"){ 
            setShow1(true)
            setShow(false)
        }   
    }

    const handleLeave = () =>{
        setShow(false)
        setShow1(false)
    }

    const handleOnline = () =>{
        if(user.authState){
            navigate("/userpage")
        }
        else{
            alert("Please login or singup")
        }
      
    }
  
    return (
        <>
        <div className='h-[50px] shadow-md flex border-[1px] border-slate-200 items-center px-1 gap-4 lg:gap-3 bg-gradient-to-r from-yellow-400 to-yellow-200 max-sm:hidden max-md:hidden max-lg:hidden'>
            {head.map((val,index)=>(
            <div className='flex items-center gap-2 cursor-pointer' key={index} onMouseEnter={()=>handleMenu(val)} onMouseLeave={handleLeave}>
               <p className='m-0 font-semibold hover:text-red-500'>{val}</p>
               <FaAngleDown className='mt-1'/>

            {show && val === 'Everyday Deposits' &&
            <div className='absolute top-[120px] bg-yellow-400 shadow-md rounded-xl w-[180px] z-10 p-3'>
                    <h1 className='text-center text-[18px] font-semibold hover:text-red-500 cursor-pointer'>Saving Account</h1>
                    <h1 className='text-center text-[18px] font-semibold hover:text-red-500 cursor-pointer'>Current Account</h1>
                    <h1 className='text-center text-[18px] font-semibold hover:text-red-500 cursor-pointer'>Forein Currency</h1>
                    <h1 className='text-center text-[18px] font-semibold hover:text-red-500 cursor-pointer'>Forein Currency</h1>
            </div>
           }

           {show1 && val === 'Everyday Loans' &&
            <div className='absolute top-[120px] bg-yellow-400 shadow-md rounded-xl w-[180px] z-10 p-3'>
                    <h1 className='text-center text-[18px] font-semibold hover:text-red-500 cursor-pointer'>Saving Account</h1>
                    <h1 className='text-center text-[18px] font-semibold hover:text-red-500 cursor-pointer'>Current Account</h1>
                    <h1 className='text-center text-[18px] font-semibold hover:text-red-500 cursor-pointer'>Forein Currency</h1>
                    <h1 className='text-center text-[18px] font-semibold hover:text-red-500 cursor-pointer'>Forein Currency</h1>
            </div>
           }
              
            </div>
            ))
            }
        
            <div className='w-[150px] h-[30px] bg-red-500 flex items-center justify-center cursor-pointer rounded-xl font-normal hover:bg-red-400' onClick={handleOnline}>
                 Online Banking
            </div>

        </div>

        

        </>
       )
    }

export default SubNav
