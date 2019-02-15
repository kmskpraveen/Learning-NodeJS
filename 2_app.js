// Run this code in Terminal through command: node app.js
// ============================================================================
// Code for videos 7,8,9,10
// ============================================================================

// Prototype Demo.
 function User(){
     this.name = "";
     this.life = 100;
     this.giveLife = function giveLife(targetPerson){
        targetPerson.life += 1;
        console.log(this.name+" gave life to "+targetPerson.name);
     }
 }

 var Adam = new User();
 var Richards = new User();

Adam.name = "Adam";
Richards.name = "Richards";

Adam.giveLife(Richards)

console.log("Life of "+Adam.name+": "+Adam.life);
console.log("Life of "+Richards.name+": "+Richards.life);

// Prototype gives us the ability to add functions to the objects in classes.
User.prototype.injure = function injure(targetPerson){
    targetPerson.life -= 3;
    console.log(this.name+" injured "+targetPerson.name);
}

Adam.injure(Richards);

console.log("Life of "+Adam.name+": "+Adam.life);
console.log("Life of "+Richards.name+": "+Richards.life);

// Prototype also gives us the ability to add parameters to the objects in classes.
User.prototype.coins = 100;

console.log("Coins of "+Adam.name+": "+Adam.coins);
console.log("Coins of "+Richards.name+": "+Richards.coins);

// Modules Demo by importing a module (movies)
// Here ./ indicates the crrent directory
var movies = require('./2_movies');
movies.avatar();