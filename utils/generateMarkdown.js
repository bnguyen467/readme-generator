// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
![badge](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
![badge](https://img.shields.io/badge/license-${data.license}-blue.svg)
</br>
This application is licensed under the ${data.license} license.

## Contributing
${data.contributor}

## Tests
${data.tests}

## Questions
Find me on github: [${data.userName}](https://github.com/${data.userName})
</br>
Contact me through email: ${data.email}
`;
}

module.exports = generateMarkdown;
