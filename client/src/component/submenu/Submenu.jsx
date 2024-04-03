import React, { useState } from 'react';
import { BsBank } from "react-icons/bs";
import MenuCard from '../menuCard/MenuCard';
import { BsBank2 } from "react-icons/bs";
import { TbWorldDollar } from "react-icons/tb";
import { GiBank } from "react-icons/gi";

const Submenu = () => {
    const[menu1,setMenu1] = useState(true);
    const[menu2,setMenu2] = useState(false);
    const[menu3,setMenu3] = useState(false);
    const[menu4,setMenu4] = useState(false)


    const handlesetMenu1 = () =>{
        setMenu1(true)
        setMenu2(false)
        setMenu3(false)
        setMenu4(false)
    }

    const handleMenu2 = () =>{
        setMenu2(true);
        setMenu1(false)
        setMenu3(false)
        setMenu4(false)
    }

    const handleMenu3 = () =>{
        setMenu3(true)
        setMenu2(false)
        setMenu1(false)
        setMenu4(false)
    }

    const handleMenu4 = () =>{
        setMenu4(true)
        setMenu3(false)
        setMenu2(false)
        setMenu1(false)
    }

  return (
    <div>
        <div className='flex px-[280px] max-sm:px-3 max-md:px-3 max-lg:px-10 pt-5 justify-between'>
            <div onClick={handlesetMenu1} className={`${menu1? 'text-yellow-500 border-b-[5px] border-yellow-500':''} cursor-pointer hover:text-yellow-500 hover:border-b-[5px] border-yellow-500`}>
               <BsBank className='w-[88px] max-sm:w-[50px] h-[88px] max-sm:h-[50px]'/>
               <p className='w-[88px] max-sm:w-[50px] text-center text-[18px] max-sm:text-[14px] font-semibold'>Corporate Banking</p>
            </div>

            <div onClick={handleMenu2} className={`${menu2? 'text-yellow-500 border-b-[5px] border-yellow-500':''} cursor-pointer hover:text-yellow-500 hover:border-b-[5px] border-yellow-500`}>
               <BsBank2 className='w-[88px] max-sm:w-[50px] h-[88px] max-sm:h-[50px]'/>
               <p className='w-[88px] max-sm:w-[50px] text-center text-[18px] max-sm:text-[14px] font-semibold'>Tresure Service</p>
            </div>

            <div onClick={handleMenu3} className={`${menu3? 'text-yellow-500 border-b-[5px] border-yellow-500':''} cursor-pointer hover:text-yellow-500 hover:border-b-[5px] border-yellow-500`}>
               <TbWorldDollar className='w-[88px] max-sm:w-[50px] h-[88px] max-sm:h-[50px]'/>
               <p className='w-[88px] max-sm:w-[50px] text-center text-[18px] max-sm:text-[14px] font-semibold'>Forein Service</p>
            </div>

            <div onClick={handleMenu4} className={`${menu4? 'text-yellow-500 border-b-[5px] border-yellow-500':''} cursor-pointer hover:text-yellow-500 hover:border-b-[5px] border-yellow-500`}>
               <GiBank className='w-[88px] max-sm:w-[50px] h-[88px] max-sm:h-[50px]'/>
               <p className='w-[88px] max-sm:w-[50px] text-center text-[18px] max-sm:text-[14px] font-semibold'>Forein Banking</p>
            </div>

        </div>

        {menu1 && <div className='p-5 max-sm:p-3 flex flex-wrap gap-2 justify-center'>
                <MenuCard
                  header='Corporate Lending'
                  para = 'Corporate Banking provides tailor made financial solutions to the corporate sector.'
                />

                <MenuCard
                  header='Off-Shore Banking Unit'
                  para = 'Leveraging on years of experience, Peoples Bank is the first point of call for overseas investors and for local exporters registered'
                />

                <MenuCard
                  header='Off-Shore Banking Unit'
                  para = 'Leveraging on years of experience, Peoples Bank is the first point of call for overseas investors and for local exporters registered'
                />

        </div>
        }

        {menu2 && <div className='p-5 max-sm:p-3 flex flex-wrap gap-2'>
                <MenuCard
                  header='Corporate Lending'
                  para = 'Corporate Banking provides tailor made financial solutions to the corporate sector.'
                />

                <MenuCard
                  header='Off-Shore Banking Unit'
                  para = 'Leveraging on years of experience, Peoples Bank is the first point of call for overseas investors and for local exporters registered'
                />

                <MenuCard
                  header='Off-Shore Banking Unit'
                  para = 'Leveraging on years of experience, Peoples Bank is the first point of call for overseas investors and for local exporters registered'
                />

                <MenuCard
                  header='Off-Shore Banking Unit'
                  para = 'Leveraging on years of experience, Peoples Bank is the first point of call for overseas investors and for local exporters registered'
                />

        </div>
        }

        {menu3 && <div className='p-5 max-sm:p-3 flex flex-wrap gap-2 justify-center'>
                <MenuCard
                  header='Corporate Lending'
                  para = 'Corporate Banking provides tailor made financial solutions to the corporate sector.'
                />

                <MenuCard
                  header='Off-Shore Banking Unit'
                  para = 'Leveraging on years of experience, Peoples Bank is the first point of call for overseas investors and for local exporters registered'
                />

                <MenuCard
                  header='Off-Shore Banking Unit'
                  para = 'Leveraging on years of experience, Peoples Bank is the first point of call for overseas investors and for local exporters registered'
                />

        </div>
        }

        {menu4 && <div className='p-5 max-sm:p-3 flex flex-wrap gap-2 justify-center'>
                <MenuCard
                  header='Corporate Lending'
                  para = 'Corporate Banking provides tailor made financial solutions to the corporate sector.'
                />

                <MenuCard
                  header='Off-Shore Banking Unit'
                  para = 'Leveraging on years of experience, Peoples Bank is the first point of call for overseas investors and for local exporters registered'
                />

                <MenuCard
                  header='Off-Shore Banking Unit'
                  para = 'Leveraging on years of experience, Peoples Bank is the first point of call for overseas investors and for local exporters registered'
                />

        </div>
        }

      
    </div>
  )
}

export default Submenu;
