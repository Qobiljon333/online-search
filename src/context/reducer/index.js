import { combineReducers } from "redux"
import auth from "./auth"
import cart from "./addToCart"
import heart from "./addToHeart"
import filterShow from "./filterShow"
import seller from "./seller"
const rootReducer = combineReducers({
    auth, cart, heart, filterShow,seller
})

export default rootReducer