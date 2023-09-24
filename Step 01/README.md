# Understanding Variables in Programming

In programming, a variable is a value that can change, depending on conditions or on information passed to the program.

- Variable means anything that can vary.
- A TypeScript variable is simply a name of a storage location.
- A variable must have a unique name.

### Variable Naming Rules

- A variable name can't contain any spaces.
- A variable name can contain only letters, numbers, dollar signs, and underscores.
- The first character must be a letter, an underscore (-), or a dollar sign ($).
- Numbers are not allowed as the first character of a variable.

For example:

```javascript
usa = 'United States of America';
let name = 'Raja';
_age = 17;
&gender = 'male';
name = 'Ali';



//Using Variables in JavaScript
// The keyword "let" in JavaScript is used to declare a variable that is block-scoped. In JavaScript, the var keyword is typically used to declare a variable that is treated like any other variable, whereas variables declared using let in JavaScript are block-scoped.

For example:

let a = 'apple';  // Double quotes allowed
let r = 'Raja';   // Single quotes also allowed
r = 'Rafi';       // Reassigning allowed with 'let'


// Constants with "const"
// The "const" declaration declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator, but if a constant is an object, its properties can be added, updated, or removed.

For example:
const usa = 'United States Of America';
const x = 'John'; // Single or double quotes also allowed.

x = 'Alex';  // Cannot be reassigned because 'const' is constant.

// Variable Types in TypeScript
// In TypeScript, you can explicitly specify the data type of a variable when declaring it:

let a: string = 'apple';  
let x: number = 2;
let isValid: boolean = true;
let y: boolean = false;
