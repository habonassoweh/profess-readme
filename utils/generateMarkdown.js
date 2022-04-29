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
const generateMarkdown = (data) => {
  console.log(data);
  return `
  # ${data.Title}
  https://github.com/${data.Username}/${data.Title}
  # Description
  ${data.Description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  #  Installation
  The following necessary dependencies must be installed to run the application
  # Usage
  In order to use the app ${data.Usage}
  # License
  This project is licensed to ${data.License}.
  # Contributing
  Contributing ${data.Contributing}
  # Tests
  The following tests are needed in order to run : ${data.Tests}
  # Questions
  If you have any inquiries about the repo, please contact ${data.Username}

  `;
};

module.exports = generateMarkdown;
