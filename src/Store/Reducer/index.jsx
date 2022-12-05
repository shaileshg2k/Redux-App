import { combineReducers } from "redux";
import CartReducer from "./CartReducer";

const reducer= combineReducers({
    count:CartReducer
})
export default reducer