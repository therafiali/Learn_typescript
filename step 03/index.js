import inquirer from "inquirer";
let userName = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter Your Name: ",
    },
    {
        name: "age",
        type: "number",
        message: "Enter Your Age: ",
    },
    {
        name: "MartialStatus",
        type: "confirm",
        message: "Are yor Single: ",
    },
]);
// console.log("Welcome", userName.name);
console.log(`The username is ${userName.name}, age is ${userName.age} and the user martial status is ${userName.MartialStatus} `);
