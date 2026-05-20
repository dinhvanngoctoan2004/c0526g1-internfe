import { combineReducers } from "redux";
import { login } from "./action";

const initialState = null

const userReducer = (state = initialState, action)=>{  
  
    switch(action.type){
        case "LOGIN":{
         
            console.log(action.payload);
            return  action.payload
        }
        case "LOGOUT":{
         
            
            return action.payload
        }
    }
    return state;
}

export const rootRedcer = combineReducers({
    user:userReducer
})