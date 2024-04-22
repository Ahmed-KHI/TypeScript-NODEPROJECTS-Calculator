#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Printing a Wellcome Message
console.log(chalk.bold.rgb(204, 204, 204)(`\n  \t\t <<<================================================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<=========>>>     ${chalk.redBright.bold('Wellcome To \'Artificialvolutionize\' - Calculator')}     <<<=========>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t <<<===============================================>>>\n`));
// Asking Questions from Users through Inquirer
let answers = await inquirer.prompt([
    { message: chalk.magenta("Enter First Number"), type: "number", name: "firstNumber" },
    { message: chalk.magenta("Enter Second Number"), type: "number", name: "secondNumber" },
    {
        message: chalk.green("Select one Operator to perform Operations"),
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    },
]);
// Condtional statements If-Else
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtractions") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log(chalk.red("Invalid Input"));
}
