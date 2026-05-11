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

console.log("-----------BÀI TẬP BỔ SUNG ------------------");

const ktSoNguyenTo=(so)=>{
  if(so<=1){
    return false;
  }
  for(let i=2;i<so;i++){
    if(so%i===0) return false;
  }
  return so;
}
console.log("Bài 1");


const mang=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mangSoNguyenTo = mang.filter((e)=>{
  return ktSoNguyenTo(e);
})
console.log(mangSoNguyenTo);


///bài 2
console.log("BAIF 2");

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  gender: 'male',
  occupation: 'developer',
  nationality: 'American',
  city: 'New York',
  hobbies: ['reading', 'traveling', 'photography'],
  languages: ['English', 'Spanish'],
  education: {
    degree: 'Bachelor',
    major: 'Computer Science',
    university: 'Harvard University'
  }
};

const {firstName,education:{degree},gender,languages=[eng,...khac]}= person
const studen={
  firstName:firstName,
  gender:gender,
  degree:degree,
  languages:languages[0],
}
console.log(studen);


//// bài 3
console.log("bài 3");

const sv1 = {
  firstName: 'John',
  gender: 'male',
  degree: 'Bachelor',
  english: 'English'
};

const sv2 = {
  firstName1: 'John',
  gender: 'male',
  degree1: 'Bachelor',
  english: 'English'
};
const getInfo=(e)=>{
  const {firstName=`quan`,degree='NA'}= e;
  console.log(`firstName: ${firstName}`);
  console.log(`degree: ${degree}`);

}
getInfo(sv1);
getInfo(sv2);
