
  //Spread operator ... Alows you to make a copy of an array, without changing the original array

  const letters = ['a','b'];
  console.log(letters);

  const myLetters = [...letters,'c'];
  console.log(myLetters);
  console.log(letters);

  const numLeters =[1, ...letters];
  console.log(numLeters);
////... Unpacs elements in an array into individual items
  const word = 'testing';
  const test =[...word];
  console.log(test);

///Object spread operator(Requiers Bable plugin if set up with JS babel-plugin-transform-object-rest-spread)
const user  = {
          name:'Jen',
          age: 22
};

const userX ={...user,height:145}
console.log(userX);
console.log(user);