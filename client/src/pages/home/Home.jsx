import React from 'react'
import Swiperacaro from '../../component/swiper/Swiperacaro'
import SubNav from '../../component/navbar/SubNav'
import Submenu from '../../component/submenu/Submenu'

const Home = () => {
  return (
    <div className='p-2'>
        <SubNav/>
        <Swiperacaro/>
        <Submenu/>
    </div>
  )
}

export default Home
