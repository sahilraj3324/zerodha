import React from 'react'

function Signup() {
  return (
    <div className='container mt-5 '>
        <div className='row '>
            <h1 className='text-center mt-5 fs-1'>Open a trading and demat account</h1>
            <p className='text-center mt-3 fs-4'>Start investing brokerage free and join a community of 1+ crore investors and traders</p>
            <div className='col-6 mt-5'>
                <img src="media/images/account_open.png" />
            </div>
            <div className='col-6 mt-5 p-5'>
                <h2>Signup now</h2>
                <p className='mt-3'>Or track your existing application</p>
                <input type='text' placeholder='Mobile Number' style={{width:"60%" , height:"15%"}} className='mt-4' />
                <p>You will receive an OTP on your number</p>
                <button className='btn btn-primary mt-4' style={{width:"30%"}}>Continue</button>
                <br />
                <br />
                <a href='#' className=''>Want to open an NRI account?</a>
            </div>

            <p className='text-center mt-5 p-2'>
            I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN.
            Please visit <a href='#'>this article </a> to know more
            </p>
            <p className='text-center'>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the <a href='#'> offline forms </a>offline forms. For help, <a href='#'> click here </a>click here.</p>
        </div>
    </div>
  )
}

export default Signup
