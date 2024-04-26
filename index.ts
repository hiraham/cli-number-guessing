#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);

const answer = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"Guess a number 1 - 10: ",
    }
]);

if(answer.userGuessedNumber === randomNumber){
    console.log("congratulation!you gussed a right number");
}else{
    console.log("sorry! you guessed a wrong number");
}

