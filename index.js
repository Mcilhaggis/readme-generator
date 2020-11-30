const inquirer = require('inquirer');
const fs = require('fs');



//Create a forEach loop for every section filled to create the table of contents?
  function generateTemplate(data){
      return `# Project Title = ${data.Title}
      Project Description = ${data.Description}`

  }  


// function to initialize program
function init() {
    inquirer.prompt([
        {
            type:'input',
            name:'Title',
            message:'What is the title of this project?'
        },
        {
            type:'input',
            name:'Description',
            message:'Give a brief description of this project:'
        },
        {
            type:'input',
            name:'Installation',
            message:'Detail how to install the project:'
        },
        {
            type:'input',
            name:'Usage',
            message:'Detail how to use the project:'
        },
        {
            type:'input',
            name:'Licensing',
            message:'What is the name of the license that this work is published under?'
        },
        {
            type:'input',
            name:'Contributing',
            message:'Who are the contributors to this project?'
        },
        {
            type:'input',
            name:'Tests',
            message:'Write what tests should be done:',//is that the corectthing to ask?
        },
        {
            type:'input',
            name:'Questions',
            message:'Provide an email for people to get in touch regarding the project:'
        }
    
    ]).then(function(answers){
        var completedTemplate = generateTemplate(answers);
        console.log(answers);
        fs.writeFile('./readme/README.md', completedTemplate, (err) => {
            err ? console.log(err) : console.log('Success!')
        })
    
    }) 
}

// function call to initialize program
init();
