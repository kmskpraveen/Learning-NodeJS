// Run this code in Terminal through command: node app.js
// ============================================================================
// Code for videos 1,2,3
// ============================================================================
// Normal print statement
console.log('Hello World');

// Assigning a Dictionary like thing to a variable and printing it
var person = {
    firstName: "Adam",
    lastName: "Richards",
    age: 28 
};
console.log(person);

// Creating functions and calling them in print statement
function addNumbers(a,b){
    return a+b;
}
console.log(addNumbers(4,9));

// An empty function will return undefined
function Nothing(){}
console.log(Nothing());

// Setting a variable to an anonymous function and calling it
var printAdam = function(){
    console.log("Adam is healthy as he consulted the doctor!");
};
printAdam();

// Setting a time to the function variable call
setTimeout(printAdam,5000);

// ============================================================================
// Code for videos 4,5,6
// ============================================================================

// Demo code for handling multiple requests
function placeOrder(orderNumber){
    console.log("Customer order: ",orderNumber)

    cookAndDeliverFood(function(){
        console.log("Delivered Food order:",orderNumber);
    });
}
function cookAndDeliverFood(callback){
    setTimeout(callback,5000);
}
// placing orders
placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);
placeOrder(6);

// Refernce to the objects Demo
var John = {
    favFood: "Pizza",
    favMovie: "Avatar"
};
var Tipi = John;
console.log(Tipi.favMovie);
Tipi.favMovie = "Batman";
console.log(Tipi.favMovie);
console.log(John.favMovie);

// == compares only values. But, === compares values and types
console.log(19 == '19');
console.log(19 === '19');

// Demo: 'this' refers to the thing that is called
var Andrew = {
    printName: function(){
        console.log("My name is Andrew");
        console.log(this === Andrew);
    }
};
Andrew.printName();

// Note: The default calling context is global
function something(){
    console.log("Something is done");
    console.log(this === global);
}
something();