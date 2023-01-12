// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the title of your app?",
        name: 'title',
        validate: (titleInput) => { if (titleInput) { return true } else { return 'Title needed.' } },
    },
    {
        type: 'input',
        message: "How would you describe your app?",
        name: 'description',
        validate: (descInput) => { if (descInput) { return true } else { return 'Description needed.' } },
    },
    {
        type: 'input',
        message: "How do you install your app?",
        name: 'installation',
        validate: (installInput) => { if (installInput) { return true } else { return 'Installation guide needed.' } },
    },
    {
        type: 'input',
        message: "How do you use your app?",
        name: 'usage',
        validate: (usageInput) => { if (usageInput) { return true } else { return 'Usage guide needed.' } },
    },
    {
        type: 'input',
        message: "Who all worked on the app, and how did they contribute?",
        name: 'credits',
        validate: (creditsInput) => { if (creditsInput) { return true } else { return 'Credits needed.' } },
    },
    // what is tests?
    {
        type: 'input',
        message: "What command should be ran to test the app?",
        name: 'tests',
        validate: (testsInput) => { if (testsInput) { return true } else { return 'Tests needed.' } },
    },
    {
        type: 'list',
        message: "What license(s) did you use for your app?",
        name: 'license',
        list: ['Apache 2.0',
            'BSD 3-Clause',
            'BSD 2-Clause',
            'GNU GPL',
            'GNU LGPL',
            'MIT',
            'MPL 2.0'
            ]
        validate: (value) => { if (value) { return true } else { return 'license needed.' } },
    },
    {
        type: 'input',
        message: "What is your Github username?",
        name: 'github',
        validate: (value) => { if (value) { return true } else { return 'Username needed.' } },
    },
    {
        type: 'input',
        message: "For any qeustion, feel free to email",
        name: 'questions',
        validate: (value) => { if (value) { return true } else { return 'Email needed.' } },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();













// licenses
// Apache License 2.0
// BSD 3-Clause "New" or "Revised" license
// BSD 2-Clause "Simplified" or "FreeBSD" license
// GNU General Public License (GPL)
// GNU Library or "Lesser" General Public License (LGPL)
// MIT license
// Mozilla Public License 2.0
// Common Development and Distribution License
// Eclipse Public License version 2.0