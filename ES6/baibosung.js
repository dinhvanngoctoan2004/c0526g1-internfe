
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
