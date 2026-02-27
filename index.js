// 1. Call Stack

// The call stack keeps track of the order in which functions are called and executed.
// When a function is called, it’s pushed onto the stack; when it finishes, it’s popped off.
function a() { b(); }
function b() { console.log("Inside b"); }
a();  // Stack: [a] -> [a,b] -> []
// use console.trace() to sequence to function how it works 

//  2. Primitive Types
// These are basic data types that store a single value:
// string, number, boolean, undefined, null, symbol, bigint.
let name = "Ali"; //string 
let age = 25; // number 
let isCool = true; //boolean
let me; //undefined
let typenull =null //Null
let typesymbol=Symbol(`id`)//symbol means unique 
console.log(typeof(typesymbol))
 
// 3. Value Types vs Reference Types

// Value types (primitives) store data directly.(in the stack memory )

// Reference types (objects, arrays, functions) store a reference to data in memory.(in the heap memory by pointer )
let a = 5;
let b = a;
b = 10; // a is still 5

let obj1 = { name: "Ali" };
let obj2 = obj1;
obj2.name = "Sara"; // obj1.name is also "Sara"
// ex by array:
let arr1=[1,2,3,4,5,6,7]
let arr2=arr1;
arr2.push(12)
console.log(arr1) // you will see the diference

// 4. Implicit, Explicit, Nominal, Structural & Duck Typing

// Implicit typing: type inferred automatically

// Explicit typing: type declared manually

// Nominal typing: type based on name (not in JS)

// Structural typing: type based on structure (used in TS)

// Duck typing: “If it walks like a duck and quacks like a duck, it’s a duck.”
//Implicit typing
console.log('5' - 2); // 3
console.log('5' + 2); // "52"
//Explicit typing
Number() ,String(),Boolean()
let x = "10";
let y = Number(x);
console.log(y + 5); // 15
// Nominal typing (type script and Java)
// type UserID = string;
// type ProductID = string;

// let user: UserID = "abc";
// let product: ProductID = "abc";
// user = product ❌ => couldn't change 
// Structural Typing
function printUser(user) {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
}

let person = { name: "Ali", age: 25 };
let student = { name: "Sara", age: 22, grade: "A" };

printUser(person);  // will work
printUser(student); //will work also

//Structural Typing vs Duck Typing 
// Structural=>the struct
//Duck typing =>behiefior


// 5. == vs === vs typeof

// ==: compares value only (performs type coercion)

// ===: compares value and type

// typeof: returns variable’s type
0 == "0"   // true
0 === "0"  // false
typeof 42  // "number"
// 6. Function Scope, Block Scope, Lexical Scope
// Function scope: variables inside a function are local.
// Block scope: let and const exist only inside {}.
// Lexical scope: inner functions can access variables from their outer scope.
//Function scope
function sayHello() {
  let message = "Hello World!";
  console.log(message); // Hello World!
}
sayHello();
console.log(message); // Error: message is not defined
//Block scope
if (true) {
  let x = 10;
  const y = 20;
  console.log(x, y); // ✅ 10 20
}
console.log(x, y); // Error: x is not defined
//var allowd

// Lexical Scope
function outer() {
  let outerVar = "I am from outer function";

  function inner() {
    console.log(outerVar); // ✅   outer()
  }

  inner();
}
outer();


// 7. Expression vs Statement

// Expression → produces a value.

// Statement → performs an action.
let sum = 5 + 10;  // expression
if (sum > 10) { console.log("Yes"); } // statement
const func=function(){return -1}//statement into exprision 

//8 :IIFE, Modules, Namespaces
(function() {
  let message = "Hello World!";
  console.log(message);
})();//IIFE

let s = 10;
(function() {
  let s= 5;
  console.log("Inside:", s);//the variable don't affects
})();
console.log("Outside:", s);
// Modules there is two types
// 1 use export and impot
// in file math.js (Module)
export function add(a, b) {
  return a + b;
}
export const PI = 3.14159;
// app.js
import { add, PI } from './math.js';

console.log(add(2, 3)); // 5
console.log(PI);        // 3.14159
//we can Also export all things 
export * from './math.js';
// CommonJS Modules (Node.js)
//use module.exports and require()
// ex:math.js
function add(a, b) {
  return a + b;
}
const PI = 3.14159;
module.exports = { add, PI };
//app.js
const math = require('./math.js');

console.log(math.add(2, 3)); // 5
console.log(math.PI);        // 3.14159

//Namespaces
// file 1
function getData() {
    return "Data from Users";
}

function getData() {
    return "Data from Products";
}

console.log(getData()); 
//solution 
const UsersAPI = {
    getData: function() {
        return "Data from Users";
    }
};

const ProductsAPI = {
    getData: function() {
        return "Data from Products";
    }
};

console.log(UsersAPI.getData());   // النتيجة: "Data from Users"
console.log(ProductsAPI.getData()); // النتيجة: "Data from Products"
//but the Modules replace Namespaces but great to know 
//9 event loop and Message Queue
//look at the folder of event loop
//10 setTimeout, setInterval and requestAnimationFrame
//--setTimeout 
// 👉 Runs the function ONCE after a certain delay.
setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);//run after 2s
//--setInterval
//👉 Runs the function REPEATEDLY every fixed time interval.
setInterval(() => {
  console.log("Runs every 1 second");
}, 1000);
//we can stop them by decared the function as a variable
//stop timeout
let id = setTimeout(() => {
  console.log("Will not run");
}, 3000);

clearTimeout(id);
//stop internal timer
let Id = setInterval(() => {
  console.log("Repeating...");
}, 500);

clearInterval(id);
//requestAnimationFrame
let t= 0;

function animate() {
  t += 2; // move 2px
  box.style.transform = `translateX(${t}px)`;
  
  requestAnimationFrame(animate); // repeat
}

requestAnimationFrame(animate);


//19 reduce ,map,filter
// reduce
const numbers = [1, 2, 3, 4];

const sums = numbers.reduce((accumulator, curVal) => {  
  return accumulator + curVal;
});

console.log(sums); // 10
//map()
const memberss = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];

const announcements = members.map((member) => {
  return member + " joined the contest.";
});

console.log(announcements);
//forEach
const numberss = [28, 77, 45, 99, 27];

numberss.forEach(number => {  
  console.log(number);
});
//filter
const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter(n => {  
  return n > 5;
});













