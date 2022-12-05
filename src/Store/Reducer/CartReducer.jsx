const CartReducer = (state=0, action) => {
    if (action.type == "ADD-TO-CART") {
        return state + action.payload
    }
    else if (action.type == "REMOVE-FROM-CART") {
        if (state == 0)
            return state
        else {
            return state-action.payload
        }
    }
    else
        return state
}
export default CartReducer