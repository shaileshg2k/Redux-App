import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
export default function Cart() {
    const count = useSelector((state)=>state.count)
    return (
    <table className='table'>
        <tbody>
            {count?<>
                <tr>
                <th>Name</th>
                <tb>Ladies hand bag</tb>
            </tr>
            <tr>
                <th>Color</th>
                <tb>Blue</tb>
            </tr>
            <tr>
                <th>Size</th>
                <tb>Medium</tb>
            </tr>
            <tr>
                <th>Price</th>
                <tb>&#8377;1500</tb>
            </tr>
            <tr>
                <th>Quantity</th>
                <tb>{count}</tb>
            </tr>
            <tr>
                <th>Total Price</th>
                <tb>{count*1500}</tb>
            </tr>
            <tr>
                <th colSpan={2}><button className='btn btn-sm w-100 btn-primary'>Buy Now</button></th>
            </tr>
            </>:<h4>no item in Cart</h4>}
        </tbody>
    </table>
  )
}
