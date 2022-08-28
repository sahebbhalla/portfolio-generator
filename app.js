const inquirer = require("inquirer");
// const fs =require("fs");
// const generatePage = require('./src/page-tempalte.js');

// const pageHTML = generatePage(name, github);

// fs.writeFile('index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "what is your name ?",
      validate: projectName =>{
        if(projectName){
          return true;
        }else{
          console.log('please enter your name');
          return false;
        }
      }
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
      validate: githubUsername=>{
        if(githubUsername){
          return true;
        }else{
          console.log('please enter GitHub Username');
          return false;
        }
      }
    },
    {
      type: "input",
      name: "about",
      message: "Provide some information about yourself:",
    },
  ]);
};
const promptProject = (portfolioData) => {
  !portfolioData.projects ? portfolioData.projects=[] : 

  console.log(`
=================
Add a New Project
=================
`);
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your project?",
      validate: projectName =>{
        if(projectName){
          return true;
        }else{
          console.log('please enter your Project name');
          return false;
        }
      }
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of the project (Required)",
      validate: description =>{
        if(description){
          return true;
        }
        else{
          console.log("please enter  your project description")
        }
      }
    },
    {
      type: "checkbox",
      name: "languages",
      message: "What did you build this project with? (Check all that apply)",
      choices: [
        "JavaScript",
        "HTML",
        "CSS",
        "ES6",
        "jQuery",
        "Bootstrap",
        "Node",
      ],
    },
    {
      type: "input",
      name: "link",
      message: "Enter the GitHub link to your project. (Required)",
      validate:link=>{
        if(link){
          return true;
        }
        else{
          console.log("Please enter a link");
          return false;
        }
      }
    },
    {
      type: "confirm",
      name: "feature",
      message: "Would you like to feature this project?",
      default: false,
    },
    {
      type: "confirm",
      name: "confirmAddProject",
      message: "Would you like to enter another project?",
      default: false,
    },
  ]).then(projectData =>{
    portfolioData.projects.push(projectData);

    if(projectData.confirmAddProject) {
      return promptProject(portfolioData) 
    }  
    else{return portfolioData;}

  });
};

promptUser()
.then(promptProject)
.then(portfolioData =>console.log(portfolioData));
