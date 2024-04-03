import React from 'react';
import facebook from '../../assets/facebook.png';
import intra from '../../assets/intra.png';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const Footer = () => {

    const handleScroll = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }
  return (
    <div className='bg-[#434343]  px-[80px] max-sm:px-5 max-md:px-[80px] max-lg:px-4 pt-[50px] max-sm:pt-3 pb-[20px]'>
    <div className='bg-[#434343] flex flex-row max-sm:flex-col max-md:flex-col max-sm:gap-4 max-md:gap-4 justify-between'>
        <div className='max-sm:flex flex-col items-center'>
            <h5 className='text-[24px] font-semibold text-white mb-5'>About Us</h5>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Who We Are</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Board Of Directors</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Corparate Management</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Executive Management</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Corporate Information</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Awards</p>
        </div>
        <div className='max-sm:flex flex-col items-center'>
            <h5 className='text-[24px] font-semibold text-white mb-5'>Quik Links</h5>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Tender Notices</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Properties For Sale</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Newsletters</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Branch Network</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Bank Holidays</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Customer Charter</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>News and Events</p>

        </div>
        <div className='max-sm:flex flex-col items-center'>
            <h5 className='text-[24px] font-semibold text-white mb-5'>Quik Links</h5>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Tender Notices</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Properties For Sale</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Newsletters</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Branch Network</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Bank Holidays</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Customer Charter</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>News and Events</p>
        </div>

        <div className='max-sm:flex flex-col items-center'>
            <h5 className='text-[24px] font-semibold text-white mb-5'>ABC Banks</h5>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Tender Notices</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Properties For Sale</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Newsletters</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Telephone: 0768185636</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>Call Center:444</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>E-Mail: abc@gmail.com</p>
            <p className='text-[17px] text-white font-normal mb-1 cursor-pointer hover:text-yellow-500'>SWIFT Code: ASERTW</p>
            <h5 className='text-[24px] font-semibold text-white mb-3 mt-3'>Follow Us</h5>
            <div className='flex mb-3'>
                  <img src={facebook} alt=''/>
                  <img src={youtube} alt=''/>
                  <img src={twitter} alt=''/>
                  <img src={linkedin} alt=''/>
                  <img src={intra} alt=''/>
            </div>
        </div>  
    </div>
    <hr></hr>

    <div className='flex flex-row max-sm:flex-col max-sm:gap-2 justify-between mt-2'>
        <div className='text-white'>
            @All right received ABC Bank
        </div>

        <div className='flex gap-4'>
            <p className='text-white cursor-pointer hover:text-yellow-500'>Site map</p>
            <p className='text-white cursor-pointer hover:text-yellow-500'>FAQs</p>
            <p className='text-white cursor-pointer hover:text-yellow-500'>Terms & Conditions</p>
            <p className='text-white cursor-pointer hover:text-yellow-500'>FATCA Forms</p>
            <p className='text-white cursor-pointer hover:text-yellow-500'>Privacy Policy</p>
        </div>
    </div>

    <div className='relative' onClick={handleScroll}>
        <BsFillArrowUpSquareFill className='fixed w-[35px] h-[35px] right-3 bottom-7 cursor-pointer text-yellow-500'/>
    </div>
    </div>
  )
}

export default Footer; 
