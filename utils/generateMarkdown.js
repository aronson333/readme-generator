// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {  
  if (license === "Apache") {
    return "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
  }
  else if (license === "BSD 3") {
    return "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg"
  }
  else if (license === "Mozilla") {
    return "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"
  }
  else if (license === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg"
  }
  else if (license === "Unlicense") {
    return "https://img.shields.io/badge/license-Unlicense-blue.svg"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    return  "https://opensource.org/licenses/Apache-2.0"
  }
  else if (license === "BSD 3") {
    return "https://opensource.org/licenses/BSD-3-Clause"
  }
  else if (license === "Mozilla") {
    return "https://opensource.org/licenses/MPL-2.0";
  }
  else if (license === "MIT") {
    return "https://opensource.org/licenses/MIT"
  }
  else if (license === "Unlicense") {
    return "http://unlicense.org/"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ""
  }

  var badgeImage = `![License: ${license}](${renderLicenseBadge(license)})`
  var licenseSection = `[${badgeImage}](${renderLicenseLink(license)})`

  return  licenseSection
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contriubute](#contribution)
- [Test](#tests)
- [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## How to Contribute
${data.contributing}

## Tests
${data.tests}
## Questions
- Github Profile: [GitHub Profile](https://github.com/${data.userName})
- Contact Me via email(${data.emailAddress}) with any questions.
`;
}

module.exports = generateMarkdown;
