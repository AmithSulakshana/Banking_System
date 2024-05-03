import React from 'react'
import ReactLoading from 'react-loading';

const Loader = () => {
  return (
    <div className="loader">
       <ReactLoading
          type={"spinningBubbles"}
          color={"#9c1e23"}
          height={"100%"}
          width={"100%"}
       />
    </div>
  )
}

export default Loader
