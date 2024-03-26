import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import FundTransfer from "./pages/fundTransfer/FundTransfer"
import Loging from "./pages/login/Loging"
import { useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { logingFail, logingSuccess } from "./store/reducers/UserSlice"
import Navbar from "./component/navbar/Navbar"
import UserPage from "./pages/userPage/UserPage"
import Otp from "./pages/otp/Otp"

function App() {

  const dispatch = useDispatch()

    useEffect(()=>{
        axios.get("http://localhost:3001/user/auth",{headers:{
          accessToken:localStorage.getItem("accessToken")
        }}).then((res)=>{

          if(res.data.error){
            dispatch(logingFail())
          }

          else{
            dispatch(logingSuccess({userName:res.data.userName,id:res.data.id}))
          }
        })
    },[])
 
  return (
    <BrowserRouter>
       <Navbar/>
       <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/transfer" element={<FundTransfer/>}/>
            <Route path="/login" element={<Loging/>}/>
            <Route path="/userpage" element={<UserPage/>}/>
            <Route path="/otp" element={<Otp/>} />
       </Routes>

    </BrowserRouter>  
  )
}

export default App
