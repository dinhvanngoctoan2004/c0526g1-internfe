const API = import.meta.env.VITE_API_ACCOUNT;
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export const checkLogin =async(email,password)=>{

    
    try{
        
        const res = await axios.get(`${API}/dataAccount/${email}`);
        console.log(res.data);
        
        if(email===res.data.id && password===res.data.password){
            return res.data;
        } 
    }catch(err){
        console.log("err : "+err);
        toast.error("login false")
    }
}
// const logAccount =()=>{
//     const res = await axios.get(`${API}/dataAccount`)
//     console.log(res.data);
    
// }