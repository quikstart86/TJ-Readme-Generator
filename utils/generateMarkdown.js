// Function to generate a license badge based on the license type
function getLicenseBadge(license) {
    // Switch statement to determine the appropriate badge URL based on the license type
    switch (license) {
        case 'MIT':
            return '![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)';
        case 'GPLv2':
            return '![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)(https://opensource.org/licenses/GPL-2.0)';
        case 'Apache':
            return '![License: Apache](https://img.shields.io/badge/License-Apache-blue.svg)(https://opensource.org/licenses/Apache-2.0)';
        case 'Other':
            return '![License: Other](https://img.shields.io/badge/License-Other-lightgrey.svg)';
        default:
            return '';
    }
}

// Function to generate markdown content for README file
function generateMarkdown(data) {
    // Get the license badge for the provided license type
    const licenseBadge = getLicenseBadge(data.license);
    // Return the markdown content with the provided data
    return `# ${data.title} ${licenseBadge}


## Description
${data.description}

## Table Of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Badges](#badges)
- [Tests](#tests)
- [Questions](#questions)

## Usage 
${data.usage}

## License 
This project is licensed under the ${data.license} license. 

## Contributing  
${data.contributing}

## Badges
![Static Badge](https://img.shields.io/badge/${data.badge}-green)

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out to me:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}

`;
}

// Export the generateMarkdown function to make it available for other modules
module.exports = generateMarkdown;
