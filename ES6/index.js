let courses = [ 
  { 
    id: 1, 
    title: "ReactJS Tutorial", 
    rating: 4.2, 
  }, 
  { 
    id: 2, 
    title: "Angular Tutorial", 
    rating: 2.5, 
  }, 
  { 
    id: 3, 
    title: "VueJS Tutorial", 
    rating: 3.8, 
  }, 
  { 
    id: 4, 
    title: "Java Tutorial", 
    rating: 4, 
  }, 
  { 
    id: 5, 
    title: "JavaScript Tutorial", 
    rating: 3.5, 
  }, 
];

// yêu cầu 1
console.log("--- yêu cầu 1 ---")
const yeuCau1= courses.filter(e=>e.rating>=4);
yeuCau1.forEach(e=>console.log(e))

//// yêu cầu 2
console.log("--- yêu cầu 2 ---")
const yeuCau2= courses.filter(e=>e.rating<4);
yeuCau2.forEach(e=>{
  console.log(`<${e.id}>-<${e.title}>-<${e.rating}>`)
})

// yêu cầu 3
let addedCourses = [ 
  { 
    id: 6, 
    title: "PHP Tutorial", 
    rating: 3, 
  }, 
  { 
    id: 7, 
    title: "C# Tutorial", 
    rating: 2, 
  }, 
  { 
    id: 8, 
    title: "Docker Tutorial", 
    rating: 3.8, 
  } 
]; 

const yeuCau3 =[...courses,...addedCourses];
console.log("--- yêu cầu 3 ---")
yeuCau3.forEach(e=>
  console.log(e)
)

/////////////// BÀI TẬP BỔ SUNG /////////////
