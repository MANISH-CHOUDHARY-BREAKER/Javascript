// singleton and literal object  

//object literal

const mySym = Symbol("key1")

//const JsUser = {} is a object literal

const JsUser = {
   name: "manish choudhary",
   [mySym]: "mykey1",
    age: 23,
    location: "India",
    email: "manish@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
} 
// accessing object properties
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);
// console.log(JsUser[mySym])

JsUser.email =  "manish@chatgpt.com"
//Object.freeze(JsUser); // freeze the object so that it cannot be modified
JsUser.email =  "manish@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello js user")
}

JsUser.greetingTwo = function() {
    console.log(`Hello js user, ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());