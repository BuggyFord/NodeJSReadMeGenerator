// --> CommonJS
// const fs = require('fs');
// const inquirer = require('inquirer');
// const path = require('path');

// --> ES modules
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
// import generateMarkdown from './generateMarkdown';
import generateMarkdown from './generateMarkdown.js';

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please provide a title for your project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project',
    },

   {
        type: 'input',
        name: 'Table_of_Contents',
        message: 'Please enter your table of contents',
    },

    {   
        type: 'input', 
        name: 'installation', 
        message: 'What command should be used to run dependencies?',
        default: 'npm i',
    },

    {
        type: 'input',
        name: 'usage', 
        message: 'Please explain the usage of your application.',
    },

    {
        type: 'list',
        name: 'license',
        message: 'What license would you like for your application?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Who is contributing to your application?',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'How will you be testing your application?',
    },

    {
        type: 'input',
        name: 'questions',
        message: 'What additional questions do you have for me?',
    },

     {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address you can be reached on?',
    }
]

// This function will take the DATA from our generateMarkdown file/function and write it to DISK/file system
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

function init() {
    // prompt the USER for data (Async Method  --> returns a PROMISE)
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log("Dataset: ", answers);
            // send that data to our generateMarkdown(answers) method
            let newMarkdown = generateMarkdown(answers);
            // --> Verify the created data
            //console.log("Generated Data: ", newMarkdown);
            writeToFile("README.md", newMarkdown);
        })
        .catch(error => {
            console.log(error);
        });

}

init();