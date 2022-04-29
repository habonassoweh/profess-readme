// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const readmeDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = readmeDataArgs;
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "Title",
      message: "What is the title of the project?",
    },
    {
      type: "input",
      name: "Description",
      message: "What is your project about? Give a detailed desciption",
    },
    {
      type: "input",
      name: "Table of Contents",
      message: "Table of Contents",
    },
    {
      type: "input",
      name: "Installation",
      message: "What needs to be installed to run this app?",
    },
    {
      type: "input",
      name: "Usage",
      message: "How is the app used? Provide instructions",
    },
    {
      type: "input",
      name: "Username",
      message: "What is your Github username?",
    },
    {
      type: "input",
      name: "Questions",
      message: "Contact Us for Inquiries",
    },
    {
      type: "input",
      name: "Email",
      message: "What is you email address?",
    },
    {
      type: "input",
      name: "Contributing",
      message: "Who contributed to this project?",
    },
    {
      type: "input",
      name: "Tests",
      message: "What commands are needed to test this project?",
    },
    {
      type: "list",
      name: "What license is being used?",
      message:
        "What license did you use for this project with? (Check all that apply)",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
  ]);
};
questions().then((answers) => {
  console.log(answers);
  fs.writeFile("./README.md", generateMarkdown({ ...answers }), (err) => {
    if (err) throw err;
    console.log(answers);

    console.log("Readme complete! Check out readme.md to see the output!");
  });
});

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writetoFile("README.md", generateMarkdown(data));
    console.log(data);
  });
}
