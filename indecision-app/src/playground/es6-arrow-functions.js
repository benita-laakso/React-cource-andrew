function square(x){ 
     return x * x};

console.log(square(2));


//const squareArrow = (x) =>{
//    return x * x;
//};

const squareArrow = (x) => x * x;

console.log(squareArrow(2))


//const getFirstName = (fullName)=>{
//   return fullName.split(` `)[0]; 
//}
const getFirstName = (fullName) => fullName.split(` `)[0];

console.log(getFirstName(`Mike Peterson`));
