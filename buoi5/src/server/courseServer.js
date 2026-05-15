let dataCourse =[
    {
    idClass:1,
    nameCourse:"java"
    },
    {
    idCourse:2,
    nameCourse:"js"
    },
    {
    idCourse:3,
    nameCourse:"ts"
    },
    {
    idCourse:4,
    nameCourse:"net"
    },
]

export const getAllDataCourse=()=>{
    return [...dataCourse];
}