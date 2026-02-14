///Steps to create a Element in Javascript

//Create a Element using below Method and store it in a variable and then store content in it using Innerhtml and Append to existing part of the program.

// var h1 = document.createElement('h1')
// h1.innerHTML = 'hello from charan'
// document.body.appendChild(h1)

//Importing Variable from app.js

// import aman from './app.js'
// import { arr } from './app.js'

// console.log(arr)
// console.log(aman)

//To test the difference between named and default variable

// import age from './app.js'

// console.log(age)

//Here it will show Charan because we have imported without using curly braces in a new file 

import { age } from "./app.js";

console.log(age)

//Now it will show the right value 