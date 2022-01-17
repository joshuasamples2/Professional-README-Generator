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
function generateMarkdown(data) {
  return `# ${data.title}
  # ${data.title}
   Project Description
  ${data.description}
  Table of contents
  [Installation](#installation)
  [instructions](#instructions)
  [collaborators](#collaborators)
  [Contact and GitHub Info]
  ## Installation
  ${data.Installation}
  ## instructions
  ${data.instructions}
  ## collaborators
  ${data.collaborators}
   Github Profile: https://github.com/${data.github} 
   email: ${data.email}
`;
}

module.exports = generateMarkdown;
