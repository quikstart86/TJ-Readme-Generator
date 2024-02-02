// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
##Description
${data.description}

## Table Of Contents
- [Installation](#installation)
- [Deployed Application](#deployedApp)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

##  Deployed App
[Link To The Project Repo](https://github.com/${data.github.title})
<br>
[link to the project demo](https://something...)


## Usage 
${data.usage}

## License 
This project is licensed under the ${data.license} license. 

## Contributing  
${data.contribution}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out to me:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}
module.exports = generateMarkdown;
