// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the project description?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
      },
      {
        type: 'input', // choose from list
        name: 'license',
        message: 'What license are you using?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
    ]);
  };

// TODO: Create a function to write README file
const generateREADME = ({title, description, installation, usage, contribution, tests, license, github, email }) =>
`# ${title}

## Description
 ${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributions](#Contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}


## Credits

> List your collaborators, if any, with links to their GitHub profiles. 
> If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
> If you followed tutorials, include links to those here as well.



## License


Please see LICENSE file.

${license}

## Contributions

${contribution}

## Tests

${tests}

## Questions?

Find me on GitHub here: https://github.com/${github}

Or send me an email: ${email}

`;

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
    .then((answers) => writeFile('README-demo.md', generateREADME(answers)))
    .then(() => console.log('Wrote to README-demo.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
