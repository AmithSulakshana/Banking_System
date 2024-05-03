import React from 'react'
import QrReader from './QrReader'

const ReceivedQr = () => {
  return (
    <div className='flex p-5'>
        <div className='w-[450px] min-h-[450px] rounded-2xl shadow-lg p-2 flex flex-col gap-2 border-[1px] border-slate-400'>
            <div className='bg-gradient-to-r from-orange-500 to-yellow-100 w-full p-2 h-[40px] flex items-center text-[18px] font-medium'>
               Received Fund QR
            </div>
            <div>
                <QrReader/>
            </div>
        </div>
    </div>
  )
}

export default ReceivedQr
