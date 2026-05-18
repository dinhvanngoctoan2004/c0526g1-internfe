import axios from "axios";
import { toast } from "react-toastify";

const API= import.meta.env.VITE_API_URL;
export const getAllDataStudents=async()=>{
    console.log(API);
    
    try{
        const res = await axios.get(`${API}/dataStudents`);
        console.log(res.data);
        return [...res.data];
        
    }catch(err){
        console.log("err : "+err);
        return [];
    }
    
}
export const addStudent =async(data)=>{
    try{
        const newData={
                name:data.name,
                age:data.age,
                sex:data.sex,
                course:data.course
            }
            const res = await axios.post(`${API}/dataStudents`,newData);
            toast.success("Add student success");
    }catch(err){
        console.log("err: "+ err);
        toast.error("Add student false");
    }
    
}
export const deleteStudent =async(id)=>{
    try{
        console.log("delte");
        const res = await axios.delete(`${API}/dataStudents/${id}`);
        toast.success("delete student success");
    }catch(err){
        console.log("err : "+err);
        toast.error("delete student false");
    }
  
}
// lấy data dựa trên index

export const getDetailStudent=async(id)=>{
   
    try{    
        const res= await axios.get(`${API}/dataStudents/${id}`);
        return res.data;
    }catch(err){
        console.log("err : "+err);
        
    }
}
export const updateStudent=async(id, newData)=>{
  
    try{
        const res= await axios.patch(`${API}/dataStudents/${id}`,newData);
        toast.success("update student success");
        
    }catch(err){
        console.log("err : "+err);
        toast.error("update student false");
    }

}