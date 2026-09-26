//array

const myArr = [1, 2, 3, 4, 5];
// console.log(myArr);
// console.log(myArr.length);
// console.log(myArr[0]);
// console.log(myArr[myArr.length - 1]);

// Shallow copy means that the new array will reference the same elements as the original array. If you modify an element in the new array, it will also affect the original array.
// Deep copy means that the new array will have its own copy of the elements, and modifying an element in the new array will not affect the original array.


const myHeors = ["manish", "choudhary", "manishchoudhary"];

const myArr2 = new Array(1, 2, 3, 4, 5);
// console.log(myArr2);

//Array Methods 
// myArr.push(6);
// myArr.pop();
// myArr.unshift(0);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(19));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

//  Slice, splice 

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);

console.log(myn2);
console.log("C ", myArr);