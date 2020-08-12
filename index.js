const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title for your application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief description for your application: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can the users install your application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage for this application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application: ',
        choices: [
            'Apache2.0',
            'MIT',
            'GPL3.0',
            'BSD3.0',
            'None'
        ],
    },
    {
        type: 'input',
        name: 'contributor',
        message: 'Is there any contributors for this application?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Do you want to include a test?'
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your Github user name: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) { console.log(err) }
        console.log('File Created!')
    })
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)

    .then((answer) => {
        let createContent = generateMarkdown(answer);
        writeToFile('./utils/Readme.md', createContent);
    })

    .catch(error => {
        console.log(error);
    })
}

// function call to initialize program
init();

