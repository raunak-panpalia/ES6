// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

//ES 6 notation
let a = 'test';
const b = 'true';
const c = 789;
a = 'test2'



// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

//ES 6 notation
let {firstName , lastName , age , eyeColor} = person;



// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};


//ES 6 notation
const a = 'test';
const b = true;
const c = 789;

const okObj = {
  a,
  b,
  c
};


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";


//ES 6 notation
const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`


// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

//ES 6 notation
const isValidAge = (age=10) => age;


//ES6 notation
// Symbol
// Create a symbol: "This is my first Symbol"
let firstSymbol = "This is my first Symbol"


// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

//ES6 notation

const whereAmI = (username,location) =>  {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
};