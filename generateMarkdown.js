const inquirer = require('inquirer');
const fs = require('fs');
const index = require('./index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'Apache 2.0') {
    badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (license === 'BSD 3-Clause') {
    badge = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
  } else if (license === 'BSD 2-Clause') {
    badge = '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)'
  } else if (license === 'GNU GPL') {
    badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else if (license === 'GNU LGPL') {
    badge = '![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)'
  } else if (license === 'MIT') {
    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'MPL 2.0') {
    badge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
  } else {
    badge = ''
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'Apache 2.0') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'BSD 3-Clause') {
    licenseLink = '(https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === 'BSD 2-Clause') {
    licenseLink = '(https://opensource.org/licenses/BSD-2-Clause)'
  } else if (license === 'GNU GPL') {
    licenseLink = '(https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'GNU LGPL') {
    licenseLink = '(https://www.gnu.org/licenses/lgpl-3.0)'
  } else if (license === 'MIT') {
    licenseLink = '(https://opensource.org/licenses/MIT)'
  } else if (license === 'MPL 2.0') {
    licenseLink = '(https://opensource.org/licenses/MPL-2.0)'
  } else {
    licenseLink = ''
  }
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if (license === 'None') {
    licenseSection = ''
  } else {
    licenseSection = `License: ${license}`
  } return licenseSection;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` # ${data.title}

  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}

  ## Table of Contents:

  ###  * [Installation](#installation)
  ###  * [Usage](#usage)
  ###  * [License](#license)
  ###  * [Contributors](#contributors)
  ###  * [Tests](#tests)
  ###  * [Questions](#questions)

  ## Installation:
  ### You must install the following for this app to function:
  #### ${data.installation}

  ## Usage:
  #### ${data.usage}

  ## Contributors:
  #### ${data.credits}

  ## Tests:
  ### Run the following commands in your terminal to test this app:
  #### ${data.tests}

  ## Questions:
  ### If you have any questions, you may contact me at either
  #### Github: https://github.com/${data.github}
  ### or
  #### Email: ${data.email}
`;
}

module.exports = generateMarkdown;
