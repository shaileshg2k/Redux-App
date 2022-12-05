import React from 'react'
import pic from "./p11.jpg"

import { useDispatch } from 'react-redux/es/exports'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../Store/index'
export default function Shop() {
    const dispatch= useDispatch()
    const action = bindActionCreators(actionCreators,dispatch)
    return (
        <div className='container-fluid mt-2'>
            <div className='row'>
                <div className='col-3'>
                    <div class="card">
                        <img src={pic} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Man slim fit</h5>
                            <p className="card-text"> Price : &#8377;<del>5000</del>1500</p>
                            <button className="btn btn-primary btn-sm w-100 mb-1 " onClick={()=>action.addtoCart(1)}>Add to Cart</button>
                            <button className="btn btn-primary btn-sm w-100 mb-1" onClick={()=>action.removeFromCart(1)}>Remove to Cart</button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
