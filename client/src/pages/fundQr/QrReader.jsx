import React, { useEffect, useState } from 'react'
import {Html5QrcodeScanner} from 'html5-qrcode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function QrReader() {
    const[sresult,setSresult] = useState()
    const[code,setCode] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
      
        const scanner = new Html5QrcodeScanner('reader',{
            qrbox:{
                width:250,
                height:250,
            },
            fps:5,
        })
    
        scanner.render(success,error);
    
        function success(result){
            scanner.clear();
            const [resultBeforeSlash, resultAfterSlash] = result.split('/');
            const resultBeforeSlashInt = parseInt(resultBeforeSlash, 10);
            const resultAfterSlashStr = resultAfterSlash.trim();
            setSresult(resultBeforeSlashInt);
            setCode(resultAfterSlashStr);
        }
    
        function error(err){
            console.warn(err)
        }
    },[])

    const handleGetmoney = () =>{
       axios.post("http://localhost:3001/account/qrReceve",{amount:sresult,qrCode:code},{headers:{accessToken:localStorage.getItem("accessToken")}}).then((res)=>{
         alert(res.data.message)
         navigate("/userpage")
       })
    }

  return (
    <div className='p-10'>
    {sresult ? (
        <div>
            <h1 className='text-[18px] font-semibold'>You Can get: <span className='text-red-500 font-semibold'>RS {sresult}.00</span></h1>
            <button onClick={handleGetmoney} className='w-[180px] mt-6 h-[45px] rounded-3xl font-semibold bg-orange-400 mx-auto hover:bg-orange-500'>Get Money</button>
        </div>
    ) : (
        <div id='reader'>cant find</div>
    )}
</div>
  )
}

export default QrReader
