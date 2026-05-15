let dataStudents=[
    {  
        name:"Toàn",
        age: 20,
        sex:'male',
        course:'java'
    },
    {
        
        name:"Ngọc",
        age: 21,
        sex:'female',
        course:'java'
    },
    {
    
        name:"Văn",
        age: 22,
        sex:'male',
        course:'js'
            
    },
    {
        name:"Đinh",
        age: 23,
        sex:'male',
        course:'js'
    },
]

export const getAllDataStudents=()=>{
    return [...dataStudents]
}
export const addStudent =(data)=>{
    const newData={
        
        name:data.name,
        age:data.age,
        sex:data.sex,
        course:data.course
    }
    dataStudents.push(newData);
    console.log("ss");
    
}
export const deleteStudent =(id)=>{
    console.log("delte");
    dataStudents.splice(id,1);
}
// lấy data dựa trên index

export const getDetailStudent=(index)=>{
    return dataStudents[index];
}
export const updateStudent=(index, newData)=>{
    dataStudents[index]= newData;
}