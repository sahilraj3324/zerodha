import React from 'react'

const Education = () => {
  return (
    <div className='container mt- fs-5 mb-'>
      <div className='row '>
        <div className='col-6 p-5 mb-5 '>
          <img src="media/images/index-education.svg" style={{height:"80%"}} className='mt-4' />
        </div>
        <div className='col-6 mt-5 p-4 '>
            <h2>
            Free and open market education
            </h2>
            <p className='mt-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href='#'>versity</a>
            <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries..</p>
            <a href='#'>TradingQ&A</a>
            
            
           
        </div>

      </div>
      <div className='row text-center mt-5'>
        <h1 className='mt-5'>Open a Zerodha account</h1>
        <p className='mt-3'> Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <button className='p-2 btn btn-primary fs-5 mt-5 mb-5' style={{width:"20%" , margin: "0  auto"}}> Sign up Now</button>

      </div>
    </div>

    
  )
}

export default Education
