//arguments object - no longer bound with arrow functions
// this keyword- no longer bound

const add = (a,b) => {
  return a+b;
};

console.log(add(55,1));

const user = {
    name : "Bob",
    cities: ["California", "New York","Dublin"],
    printPlacesLived (){
        return this.cities.map((city) => this.name + " has lived in " + city)   
    }
};
console.log(user.printPlacesLived());


const multiplier = {
    numbers: [2,3,5,7],
    multiplyBy :2,
    multiply(){
        return this.numbers.map((number)=> number * this.multiplyBy)
    }

};
console.log(multiplier.multiply());
