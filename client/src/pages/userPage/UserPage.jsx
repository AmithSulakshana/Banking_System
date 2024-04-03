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

    const handleSummery = () =>{
      navigate("/summery")
    }
    
  return (
    <div className='p-3 flex flex-wrap justify-center gap-5'>

      <Card heder="Account Summery"
        cardImg = {bankImg}
        onclick = {handleSummery}
      />

      <Card
        heder= "Fund Transfer"
        cardImg = {bankImg2}
        onclick ={handleTransfer}
      />

      <Card
        heder= "Mobile Payment"
        cardImg = {bankImg2}
      />

      <Card
        heder= "Bill Payment"
        cardImg = {bankImg2}
      />
    </div>
  )
}

export default UserPage;
