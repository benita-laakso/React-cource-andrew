//Good article on the topic https://dmitripavlutin.com/javascript-object-destructuring/

//Object destructoring

console.log('destructuring');

const person ={
    name:'Andrew',
    age:26,
    location:{
        city:'Helsinki',
        temp:10
    } 
}

const {name ='Anonymouse', age} = person
console.log(`Hello ${name}`);

//Destructuring nested Object
const {city, temp: temperature}= person.location;
//OR   const { location :{city, temp: temperature}}= person;
if (city && temperature){
    console.log(`It is ${temperature}`);
}

const book ={
    title: 'Ego is the Enimy',
    author :'Ryan Holiday',
    publisher:{
        name1:'Penguin'
    }
};
 
const{name1:PublisherName='Sef-Published'} = book.publisher;
console.log(PublisherName);


//Array Distructoring

const adress =['1299 Juniper Street','Philadelphia','Pensylvania','19147'];
const[ ,city1,state ='New York'] = adress;

console.log(`You are in ${adress[1]} ${adress[2]}`);

const item = ['Coffe (hot)','$2.00','$2.50','$2.75'];

const[coffy, ,medium]= item;

console.log(`A medium ${coffy} costs ${medium} `);

////////////// Testing destructuring

const test = ["hek","check","peck"];
const[x,y,z,ö='jöses']=test; //default if there is no forth value ö='jöses'
console.log(x,y,z,ö);


const add =({a,b},c)=>{
    return a + b +c;
 };
 console.log(add({a:10, b:5},100));

