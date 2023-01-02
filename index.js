// Imported required packages
// 'fs', 'path', 'inquirer', './utils/generateMarkdown'
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
  {
    // question object for github user name
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
  },
  {
    // question object for email
    type: "input",
    name: "emailAddress",
    message: "What is your email address?",
  },
  {
    // question object for project name
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    // question object for the description
    type: "input",
    name: "description",
    message:
      "Provide a short description describing the project:",
  },
  {
    // question object for license
    type: "list",
    name: "license",
    message: "Choose a license ",
    choices: [
      "Apache",
      "BSD 3",
      "MIT",
      "Mozilla",
      "Unlicense",
    ],
  },
  {
    // question object for the installation instruction with default
    type: "input",
    name: "install",
    message: "How do you install the project?",
    default: "npm install"
  },
  {
    // question object for test with default
    type: "input",
    name: "tests",
    message: "Enter test(s) for your application ",
    default: "npm run test"
  },
  {
    // question object for usage of the repo
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use. ",
  },
  {
    // question object for contributing to the repo
    type: "input",
    name: "contributing",
    message: "How can other contribute? ",
  },
];

// Function to write README file using the user input
function writeToFile(fileName, data) {

  // TODO:
  // fs write function to create the README.md file
  // path package can be used to create the file path
  fs.writeFileSync(path.join(__dirname, fileName), data);
}

// Function to initialize app
function init() {

  // TODO:
  // call inquirer prompt method for questions
  // inside .then callback
  // call generateMarkdown passing answer object as input argument
  // call writeFile passing file name and the returned value from generateMarkdown function as input arguments
  inquirer
  .prompt(questions)
  
  // add answer to generateMarkDown function
  .then((answers) => {
      title = answers.title;
      writeToFile(`${title}_README.md`, generateMarkdown(answers));
  })
  .catch((err) => {
      console.log(err);
  });
}

init();
