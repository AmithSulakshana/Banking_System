import React from 'react';
import Card from '../../component/card/Card';
import bankImg from '../../assets/bank_card.jpg';
import bankImg2 from '../../assets/bankcard2.webp';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
    const navigate = useNavigate();

    const handleTransfer = () =>{
        navigate("/transfer")
    }
    
  return (
    <div className='p-3 flex gap-5'>

      <Card heder="Account Summery"
        cardImg = {bankImg}
      />

      <Card
        heder= "Fund Transfer"
        cardImg = {bankImg2}
        onclick ={handleTransfer}
      />
    </div>
  )
}

export default UserPage;
