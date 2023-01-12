// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the title of your app?",
        name: 'title',
        validate: (value) => { if (value) { return true } else { return 'Title needed.' } },
    },
    {
        type: 'input',
        message: "How would you describe your app?",
        name: 'description',
        validate: (value) => { if (value) { return true } else { return 'Description needed.' } },
    },
    {
        type: 'input',
        message: "How do you install your app?",
        name: 'installation',
        validate: (value) => { if (value) { return true } else { return 'Installation guide needed.' } },
    },
    {
        type: 'input',
        message: "How do you use your app?",
        name: 'usage',
        validate: (value) => { if (value) { return true } else { return 'Usage guide needed.' } },
    },
    {
        type: 'list',
        message: "What license(s) did you use for your app?",
        name: 'license',
        list: []
        validate: (value) => { if (value) { return true } else { return 'license needed.' } },
    },
    {
        type: 'input',
        message: "Who all worked on the app, and how did they contribute?",
        name: 'credits',
        validate: (value) => { if (value) { return true } else { return 'Credits needed.' } },
    },
    // what is tests?
    {
        type: 'input',
        message: "How did you test your project?",
        name: 'tests',
        validate: (value) => { if (value) { return true } else { return 'Tests needed.' } },
    },
    // What is questions
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'questions',
        validate: (value) => { if (value) { return true } else { return 'Questions needed.' } },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
