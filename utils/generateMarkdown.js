// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (name, github) => {
  return `
          <!DOCTYPE html> 
          <html lang="en"> 
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Portfolio Demo</title>
          </head>
        
          <body>
            <h1>${name}</h1>
            <h2><a href="https://github.com/${github}">Github</a></h2>
          </body>
          </html>
          `;
};

module.exports = generateMarkdown;
