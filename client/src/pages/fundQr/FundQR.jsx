import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup'; 


const FundQR = () => {
    const[qr,setQr] = useState();
    const[accNum,setAccNum] = useState()

    const initialValues = {
        fromAccount:'',
        amount:'',
        beneficiaryName:'',
        remark:''
    }

    const validationSchema = Yup.object().shape({
        amount:Yup.string().required('ammount is required'),

    })

    useEffect(()=>{
        axios.get("http://localhost:3001/account/getaccnum",{headers:{accessToken:localStorage.getItem("accessToken")}}).then((res)=>{
            setAccNum(res.data)
        })
    },[])

    const handleSubmit = (data,{ resetForm }) =>{

       axios.post('http://localhost:3001/account/qr',{url:data.amount,accNum:data.fromAccount},{headers:{accessToken:localStorage.getItem("accessToken")}}).then((res)=>{
        setQr(res.data);
        resetForm()
       })
    
    }
  return (
    <div className='p-5 flex'>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className='w-[450px] min-h-[450px] rounded-2xl shadow-lg p-2 flex flex-col gap-2 border-[1px] border-slate-400'>
            <div className='bg-gradient-to-r from-orange-500 to-yellow-100 w-full p-2 h-[40px] flex items-center text-[18px] font-medium'>
               Generate Fund QR
            </div>

           <div className='w-full h-[50px] flex items-center border-[1px] border-slate-400 rounded-3xl p-3'>
               <Field className = 'w-full outline-none' as='select' name="fromAccount">
                  <option value="">From Account</option>
                  {accNum?.map((val,index)=>(
                        <option key={index} value={val.accountNumber} className='text-slate-500 font-semibold'>
                          Account No: {val.accountNumber} - LKR {val.balance} ({val.accountType})
                        </option>
                  ))}  
               </Field>
           </div>

           <div className='w-full h-[50px] flex items-center border-[1px] border-slate-400 rounded-3xl p-3'>
               <Field className = 'w-full outline-none' name="amount" placeholder='Amount(LKR)'/>
           </div>
           <ErrorMessage name='amount' component="div" className='text-red-400 pl-4 font-medium'/>

           <div className='w-full h-[50px] flex items-center border-[1px] border-slate-400 rounded-3xl p-3'>
               <Field className = 'w-full outline-none' name="beneficiaryName" placeholder='Beneficiary Name'/>
           </div>

           <div className='w-full h-[100px] flex border-[1px] border-slate-400 rounded-3xl p-3'>
               <Field className = 'w-full outline-none' as="textarea" name="remark" placeholder='Remarks-Max 16 characterrs'/>
           </div>

           <button type='submit' className='w-[180px] h-[45px] rounded-3xl font-semibold bg-orange-400 mx-auto hover:bg-orange-500'>Generate Fund QR</button>


        </Form>

      </Formik>

      <div>
         {qr &&
           <a href={qr.url} download><img className='w-[250px] h-[250px]' src={qr.url} alt='Qr'/></a> 
         }
      </div>

    </div>
  )
}

export default FundQR
