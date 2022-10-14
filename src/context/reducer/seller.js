import { SIGN_IN,SIGN_OUT } from "../action/actionTypes";

const seller = (state=null, action )=>{
    switch(action.type){
        case SIGN_IN :
            return state = action.payload
        case SIGN_OUT :
            return state = null
        default:
            return state
    }

}

export default seller