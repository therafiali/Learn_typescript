The console.log() is a function in JavaScript that is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user. 

Syntax: console.log("hello")

console.log('Hello World')

let message = "Hello World"
console.log(message)

**String**
A string is used to store a text value.
Example: let firstName = "Ali"; 


**Number**
A number is used to store a numeric value.
Example: let score = 25; 


**Boolean**
A boolean is used to store a value that is either true or false.
Example: let isMarried = false; 


**Undefined**
An undefined type is either when it has not been defined or it has not been assigned a value.
Example: let unassigned;


**Null**
null is a special value for saying that a variable is empty or has an unknown value.
Example: let empty = null; 


**Template Literals**

***Before Template Literals***

let myName = "John" ;
let hello = "Hello "+ myName ;
console.log(hello); //Hello John

***After Template Literals***

let firstName = "John" ;
let lastName = "Doe"
console.log(`Hello ${firstName} ${lastName}`); //Hello John Doe


let greeting = "Good Morning";
let userName = "John";
let message = `${greeting} ${userName}`;
console.log(message); //Good Morning John