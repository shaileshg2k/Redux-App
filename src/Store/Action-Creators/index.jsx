export const addtoCart = (count)=>{
    return (dispatch)=>{
        dispatch({
            type:"ADD-TO-CART",
            payload:count
        })
    }
}

export const removeFromCart = (count)=>{
    return (dispatch)=>{
        dispatch({
            type:"REMOVE-FROM-CART",
            payload:count
        })
    }
}