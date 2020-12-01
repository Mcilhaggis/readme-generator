const inquirer = require('inquirer');
const fs = require('fs');


// function to initialize program and ask the questions
function init() {
    inquirer.prompt([
        {
            type:'input',
            name:'title',
            message:'What is the title of this project?'
        },
        {
            type:'input',
            name:'description',
            message:'Give a brief description of this project:'
        },
        {
            type:'confirm',
            name:'screenshot',
            message:'Do you have a URL of the live program?',
        }, {
            when: function (response) {
               return response.screenshot;
        },      name: 'screenshotURL',
                type:'input',
                message:'Insert the image URL here (Note: you must add your github username in a later question):'
            },
        {
            type:'confirm',
            name:'installation',
            message:'Does your project require installation?',
        }, {
            when: function (response) {
               return response.installation;
        },      name: 'installationInstructions',
                type:'input',
                message:'Give a brief description of steps to install:'
            },
        {
            type:'input',
            name:'usage',
            message:'Detail how to use the project:'
        },
        {
            type:'list',
            name:'licensing',
            message: 'Which license is this project published under?',
            choices: ['MIT', 'GPL V3', 'AGPL']
        },
        {
            type:'input',
            name:'contributing',
            message:'What are the contributors names for this project?'
        },
        {
            type:'input',
            name:'tests',
            message:'Write what tests should be done?',
        },
        {
            type:'input',
            name:'github',
            message:'Provide your Github username:'
        },
        {
            type:'input',
            name:'email',
            message:'Provide your email address:'
        }
    
    ]).then(function(answers){
        var completedTemplate = generateTemplate(answers);
        console.log(answers);
        fs.writeFile('./readme/README.md', completedTemplate, (err) => {
            err ? console.log(err) : console.log('Success!')
        })
    
    }) 
}



//function to opulate and stle the file correctly 
function generateTemplate(data){
return `# Project Title: ${data.title} 
https://img.shields.io/badge/License%3A-${data.licensing}-blue.svg
## Project Description
${data.description}

## Screenshot
![Screenshot of ${data.title}.](https://github.com/${data.github}/${data.title}/${data.screenshotURL}) "Screenshot of ${data.title}")

## Table of Contents
* [Description](#description)
* [Screenshot](#screenshot)
* [Installation](#installation)
* [Usage](#usage)
* [Licensing](#licensing)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installationInstructions}

## Usage
${data.usage}

## Licensing 
The licensing used for this project is ${data.licensing}

## Contributing 
${data.contributing}
    
## Tests
${data.tests}
    
## Questions
* If you have any questions about this project, please reach out to me  through <a href="https://github.com/${data.github}">Github</a>  or via <a href="mailto:${data.email}">Email</a>`

}  

// function call to initialize program
init();