import React from 'react'
import spinnerImg from "../assets/loading-gif.gif"

const Spinner = () => {
  return (
    <>
       <div>
          <img src={spinnerImg} alt="" className="d-block m-auto" />
      </div>
    </>
  )
}

export default Spinner