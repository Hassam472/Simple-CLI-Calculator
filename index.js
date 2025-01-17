#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Choose one operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(`Your Value Is ${answer.firstNumber + answer.secondNumber}`);
}
else if (answer.operator === "Subtraction") {
    console.log(`Your Value Is ${answer.firstNumber - answer.secondNumber}`);
}
else if (answer.operator === "Multiplication") {
    console.log(`Your Value Is ${answer.firstNumber * answer.secondNumber}`);
}
else if (answer.operator === "Division") {
    console.log(`Your Value Is ${answer.firstNumber / answer.secondNumber}`);
}
else {
    console.log("Please enter only numbers");
}
