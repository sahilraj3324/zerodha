import React from 'react'

const Stat = () => {
  return (
    <div className='container mt- p-5'>
      <div className='row p-5'>
        <div className='col-6 mt- p-5'>
          <h1 className='mt-3'>Trust with confidence</h1>
          <h4 className="mt-5">Customer-first always</h4>
          <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>
          <h4 className="mt-5">No spam or gimmicks</h4>
          <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
          <h4 className="mt-5">The Zerodha universe</h4>
          <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          <h4 className="mt-5">Do better with money</h4>
          <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
         
        </div>
        <div className='col-6 p-5'>
          <img src="media/images/ecosystem.png" style={{width:"130%"}}/>
        </div>

      </div>
      
    </div>
  )
}

export default Stat
