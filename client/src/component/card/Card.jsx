import React from 'react';

function Card(props) {
    const {heder,cardImg,onclick} = props
  return (
    <div className='w-[340px] h-[340px] rounded-2xl shadow-lg pt-[10px] cursor-pointer' onClick={onclick}>
       <p className='m-0 p-2 text-[34px] font-semibold bg-gradient-to-tr from-yellow-500 to-yellow-100'>{heder}</p>
       <div className='p-1 h-[220px]'>
          <img className='w-full h-full' src={cardImg} alt=''/>
       </div>
    </div>
  )
}

export default Card;
