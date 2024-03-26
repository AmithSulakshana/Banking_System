import React from 'react';
import Drawer from '../drawer/Drawer';
import { IoIosInformationCircle } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { logingFail } from '../../store/reducers/UserSlice';

const Navbar = () => {

    const user = useSelector(store=>store.userSlice)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = ()=>{
         const conformLogout = window.confirm("Are you want to logout")
         if(conformLogout){

             localStorage.removeItem("accessToken")
             dispatch(logingFail())
             navigate("/")
         }
    }

    const handleLogin = () =>{
          navigate("/login")

    }

  return (
    <div className='flex justify-between h-[60px] pr-3 bg-gradient-to-r from-yellow-500 to-yellow-100 shadow-md'>
        <div className='flex items-center'>
            <Drawer/>
        </div>

        <div className='flex items-center gap-2'>
            <div className='flex-col'>
                <p className='m-0 text-red-500 font-medium'>Welcome</p>
                {user.authState &&
                   <p className='m-0 font-[500]'>{user.userName}</p>
                }
                
            </div>
            <IoIosInformationCircle className='w-[25px] h-[25px]'/> 
            {user.authState &&
            
               <FaUser className='w-[20px] h-[20px]'/>  
            }  
            <IoIosNotifications className='w-[25px] h-[25px]'/>
            <IoSettingsSharp className='w-[25px] h-[25px]'/>
            <FaQuestionCircle className='w-[25px] h-[25px]'/>
            {user.authState ?
               <TbLogout onClick={handleLogout} className='w-[25px] h-[25px] cursor-pointer hover:pointer'/>
               :<RiLogoutBoxLine onClick={handleLogin} className='w-[25px] h-[25px] cursor-pointer'/>
            }  
        </div>
    </div>
  )
}

export default Navbar;
