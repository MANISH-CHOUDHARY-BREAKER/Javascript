//Dates 

let myDate = new Date();
console.log(myDate.toString()); // Current date and time
console.log(myDate.toDateString()); // Current date
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 25, 5, 3);
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Date.now()/1000); // Current timestamp in seconds
console.log(Math.floor(Date.now()/1000)); // Current timestamp in seconds rounded down


let newDate = new Date();
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1); // Month is zero-based, so we add 1
console.log(newDate.getDate());
console.log(newDate.getDay());

// `${newDate.getDay()}`

newDate.toLocaleString('default', { weekday: 'long' }); // Get the full name of the day