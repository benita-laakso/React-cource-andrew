//You can reasign and redifine var is function scoped
var nameVar = "Andrew"
var nameVar = "Drew"

console.log("nameVar",nameVar)



//You can not redefine let, you can reasign let
let letName = "Julie"
letName = "Janis"
console.log("letName",letName)

//You can not redefine or reasign const 
const nameConst = "Frank"
console.log("nameConst",nameConst)

//Const and let are blocklevel scoped

const fullName = `Jen Mead`;
let firstName;

if(fullName){
    firstName = fullName.split(` `)[0];
    console.log(firstName); 
}
console.log(firstName)