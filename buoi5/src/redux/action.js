import { checkLogin } from "../server/accountServer"


export const login =(email,password)=>{
    return async(dispatch)=>{
       
        let check = await  checkLogin(email,password);
        console.log(check);
        
        if(check){
            dispatch({
            type: "LOGIN",
            payload: check
            })
            return true;
        }
        
    }      
}

export const logout=()=>{
    return async (dispatch)=>{
      
        dispatch({
            type:"LOGOUT",
            payload:null
        })
    }
}