import React from 'react'
import Cart from './Cart'
import Navbar from './Navbar'
import Shop from './Shop'

export default function App() {
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-8 col-12'>
            <Shop />

          </div>
          <div className='col-md-4 col-12'>
            <Cart/>

          </div>

        </div>
      </div>
    </>
  )
}
