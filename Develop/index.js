// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown =require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        message: "What is the projects title?",
        name: "title",
    },
    {
        type: "input",
        message: "Give a brief description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "Installation",
    },
    {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "instructions",
    },
    {
        type: "input",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
        name: "collaborators",
    },
    {
        type: "rawlist",
        message: "Choose a license ",
        name: "license",
        choices: [
            "ISC",
            "MIT",
        ]
    },
    {
        type: "input",
        message: "What is your github?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err){
            console.error(err)
        } else console.log('sucsess')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile('README.md', data)
        })
}

// Function call to initialize app
init();





