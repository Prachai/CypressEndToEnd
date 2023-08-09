// run with node.js

console.log('Hey')     // to print 
// variable
var num1=3              
let num2="chai"
const num3=3.142
//typeof is to check var type
console.log(typeof(num1)+"    "+typeof(num2)+"   "+typeof(num3))   
// for loop
for(let i=0;i<2;i++){         
    console.log(i)
}

// var markss=new Array(1,2,3,4,5)      
var marks=[11,22,33,44,55]
// add new array element
marks.push(44)  
// remove the element
marks.pop(44)   
// returns that section 
console.log("Slice array  "+marks.slice(1,3))    
// sort
marks.sort()      
// reverse
marks.reverse()   
// pick specific index
console.log("2nd index in an Array    "+marks[2])  
// Iteration
for(var i=0;i<marks.length;i++){
    console.log("Array iteration "+ marks[i])
}


// Either use function with return 
function method1(a,b)
{     return a+b        }
// method with return type
var output=method1(5,6)
console.log("with function keyword    " + output)

// Anynomymus function and store in variable
var output2=function(a,b){    // Either function() or ()=>
    return a+b
}
console.log("Anynomymus function    "+ output2(3,5))  // calling Anynomymus function using variable name 

// String
let input="  chaiprad   "
let input1="prachai"
console.log(input.length)
// split
console.log(input.split("i"))
// trim
console.log(input.trim())
// concat
console.log(input.concat(input1))

// conversion
// Sring to int
let value='33'
console.log(parseInt(value))

// javascript of objects
//In JavaScript, objects can be created using object literals, constructor functions, or classes. 
// use key value pair
let person={
    name1: "chaip",
    name2:"prachai"
}
console.log("javascript of objects  "+person.name1)
console.log(person)
console.log("name3" in person)  // check key is available
// to print all the values of JS objects
for(let name in person)
{
    console.log(person[name])
}

// we can also method
let person1={
    name1: "chaip",
    name2:"prachai",
    fullname: function()
    {
        console.log(this.name1+(this.name2))
    }
}
console.log(person1.name1)
console.log(person1.fullname())

class Chai
{
 //  let name="chai"        invalid
     name="chai"
    // constructor
    constructor(){
        console.log("constructor console")
    }
}

// object creation
let chai=new Chai()

// === is object creation

//
