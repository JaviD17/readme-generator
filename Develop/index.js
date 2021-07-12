// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const generatePromise = require('./utils/generatePromise');
const { writeFile } = require('./utils/generatePromise');

// TODO: Create an array of questions for user input

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project?',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                }
                else {
                    console.log('Enter project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a short description explaining the what, why, and how. What was your motivation? Why did you build this project? (Note: The answer is not "Because it was a homework assignment.") What problem does it solve? What did you learn? What makes your project stand out?',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log('Enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmDeploy',
            message: 'Would you like to provide a link to your deployed Project?',
            default: false
        },
        {
            type: 'input',
            name: 'projectLink',
            message: 'Enter link to deployed project',
            when: ({ confirmDeploy }) => {
                if (confirmDeploy) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    ])
        .then(readmeData => {
            return readmeData;
        });
};

// Function call to initialize app

questions()
    .then(readmeData => {
        return generateMarkdown(readmeData);
    })
    .then(pageData => {
        return writeFile(pageData);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    })

