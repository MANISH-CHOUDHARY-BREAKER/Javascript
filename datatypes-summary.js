// In JavaScript, the fundamental difference lies in how data is stored, passed, and modified. Primitive data types are simple, immutable values stored directly in memory by value, whereas non-primitive data types (objects) are mutable collections of values stored in memory by reference.



// Primitive 
// 7 types : String , number , Boolean, Null ,undefined, symbol, BigInt

const score = 100
const scoreValue = 100.8

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 234567892345678n


//Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "ironman"]
let myObj = {
    name: "MaNISH",
    age: 22,
}


const myFunction = function() {
    console.log("Hello sir") 
}
console.log(typeof heros)