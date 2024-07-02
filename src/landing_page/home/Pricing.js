import React from 'react'

const Pricing = () => {
  return (
    <div className='container mb-5 p-5'>
      <div className='row'>
        <div className='col-6 p-5'>
          <h1>Unbeatable pricing</h1>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href='#'>See Pricing</a>

        </div>
        
        <div className='col-6'>
          <div className='row p-5 text-center'>
            <div className='col-6 border p-3'>
                <h1 className='p-3'>$0</h1>
                <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className='col-6 border p-3'>
              <h1 className='p-3'>$20</h1>
              <p>Intraday and F&O</p>

</div>

          </div>

        </div>

      </div>
    
    </div>
  )
}

export default Pricing
