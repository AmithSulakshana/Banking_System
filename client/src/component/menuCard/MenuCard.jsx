import React from 'react';

const MenuCard = (props) => {
    const{header,para} = props;

  return (
    <div className='w-[400px] h-[200px] border-[1px] rounded-xl border-yellow-500 p-[22px] max-sm:p-[12px]'>
        <h1 className='text-[22px] font-semibold text-center mb-2'>{header}</h1>
        <p className='mb-2'>{para}</p>
        <div className='w-[125px] h-[36px] bg-yellow-600 mx-auto flex items-center justify-center font-semibold rounded-xl cursor-pointer hover:text-yellow-500 hover:bg-white hover:border-yellow-500 hover:border-[1px]'>Learn More</div>
    </div>
  )
}

export default MenuCard;
