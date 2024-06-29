import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5 mt-5'>
      <div className='row text-center'>
           <img src="media/images/landing-home.png" />
           <h1 className='mt-5 '>Invest In everything</h1>
           <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
           <button className='p-2 btn btn-primary fs-5 mt-5 mb-5' style={{width:"20%" , margin: "0  auto"}}> SignUp now</button>
      </div>
    </div>
  )
}

export default Hero
