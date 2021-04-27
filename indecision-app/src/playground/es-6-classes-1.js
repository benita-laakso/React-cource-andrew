class Person {
    constructor(name ="Anonomouse",age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hello I am ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age}.`
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}`
        }
    return description;
    }
}

class Traveler extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation){
            return greeting += ` I am visiting from ${this.homeLocation} `
        }

        return greeting;
    }
} 






const test = new Traveler("Pat",31,"Dublin")
console.log(test.getGreeting());

const other = new Traveler(undefined,undefined,"Nowhere");
console.log(other.getGreeting());