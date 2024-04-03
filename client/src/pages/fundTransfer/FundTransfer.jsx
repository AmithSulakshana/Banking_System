import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios';
import { useDispatch } from 'react-redux';
import { payment } from '../../store/reducers/Pay';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'; 


const FundTransfer = () => {
  
  //const accNum = "037562388"
  const[accNum,setAccNum] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialValues = {
       fromAccount:'',
       account:'',
       amount:'',
       beneficiaryName:'',
       remark:''
  }

  const validationSchema = Yup.object().shape({
    account:Yup.string().required("Account is required"),
    amount: Yup.string().required("amount is required"),
    //fromAccount:Yup.string().required("Password is required"),
  })

  useEffect(()=>{
      axios.get("http://localhost:3001/account/getaccnum",{headers:{accessToken:localStorage.getItem("accessToken")}}).then((res)=>{
          setAccNum(res.data)
      })
  },[])


  const handlePay = (data,{ resetForm }) =>{

    axios.post("http://localhost:3001/account/otp",{accountNumber:data.account},{headers:{accessToken:localStorage.getItem("accessToken")}}).then((res)=>{
      if(res.data.error){
        alert(res.data.error)
      }
      else{ 
        dispatch(payment({account:data.account,amount:data.amount}))  
        navigate("/otp")
        resetForm();
      } 
      
    })
  }
  
  return (
    <div className='p-5'>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handlePay}>
        <Form className='w-[450px] min-h-[450px] rounded-2xl shadow-lg p-2 flex flex-col gap-2 border-[1px] border-slate-400'>
           <div className='bg-gradient-to-r from-orange-500 to-yellow-100 w-full p-2 h-[40px] flex items-center text-[18px] font-medium'>
               Inter Bank Fund Transfer
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
               <Field className = 'w-full outline-none' name="account" placeholder='Pay To Account'/>
           </div>
           <ErrorMessage name='account' component="div" className='text-red-400 pl-4 font-medium'/>

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

           <button type='submit' className='w-[120px] h-[45px] rounded-3xl font-semibold bg-orange-400 mx-auto hover:bg-orange-500'>Pay</button>
        </Form>

      </Formik>
       
    </div>
  )
}

export default FundTransfer;
