//singleton object  

const tinderUser = new Object()  //this is singleton object


tinderUser.id = "123abc"
tinderUser.name = "manish choudhary"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@google.com",
    fullname: {
        userFullName: {
            firstName: "manish",
            lastName: "choudhary"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) //this will merge obj2 into obj1
const obj3 = {...obj1, ...obj2, ...obj4} //this will merge obj2 into obj1

console.log(obj3);


const users = [
    {
        id:1,
        email: "g@gmail.com"
    },
    {
        id:2,
        email: "h@gmail.com"
    },
    {
        id:3,
        email: "i@gmail.com"
    }
]
users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //this will return an array of keys of the object