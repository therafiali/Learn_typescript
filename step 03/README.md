
//for install Inquirer
npm i inquirer
npm i --save-dev @types/inquirer

**package.json**

{
  "name": "step_03",
  "version": "1.0.0",
  "description": "checking",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "inquirer": "^9.2.11"
  },
  "devDependencies": {
    "@types/inquirer": "^9.0.3"
  }
}

tsc --init

**tsconfig.json**

 "target": "es2020",
 "module": "NodeNext",
 "moduleResolution": "NodeNext",


**index.ts**
import inquirer from "inquirer";

let userName = await inquirer.prompt([{
    name: "name",
    type: "string",
    message: "Enter your Name:"}
]);

console.log("Welcome",userName.name);


tsc
node index.js


  // let userInfo = await inquirer.prompt([
  //   {
  //     name: "name",
  //     type: "input", // Changed "string" to "input" for the name input
  //     message: "Enter your Name:",
  //   },
  //   {
  //     name: "age", // Corrected the name here
  //     type: "number",
  //     message: "Enter your Age:",
  //   },
  //   // {
  //   //   name: "martialStatus", // Corrected the name here and uncommented the question
  //   //   type: "confirm", // Changed "boolean" to "confirm" for a Yes/No question
  //   //   message: "Are You Single:",
  //   // },
  // ]);

  // console.log("Welcome", userInfo.name);
  // console.log("Age:", userInfo.age);
  // console.log("Marital Status:", userInfo.martialStatus ? "Single" : "Not Single");




