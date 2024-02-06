// Importing required modules
const fs = require("fs"); // File system module
const inquirer = require("inquirer"); // Inquirer module for user prompts
const generateMarkdown = require("./utils/generateMarkdown"); // Custom module for generating markdown files

// Array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project...',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project...',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter instructions on how to install...',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter details on how to correctly use your application...',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose the License you used for this project...',
        choices: ['MIT', 'GPLv2', 'Apache', 'Other'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter details of anyone who contributed to this application...',
    },
    {
        type: 'list',
        name: 'badge',
        message: 'Please choose the main language you used for this project...',
        choices: [`Node`, `React`, `Angular`, `Python`],
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please state any tests performed...',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github user name here...',
    },
    {
        type: 'input',
        name: 'email',
        message: 'And finally, what is your email address to be able to contact you...',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// Function to initialise program
function init() {
    // Prompting user with questions
    inquirer
        .prompt(questions)
        .then((answers) => {
            // Generating markdown content based on user's answers
            const READMEContent = generateMarkdown(answers);
            const outputFileName = 'DemoREADME.md'; // Output file name

            // Writing generated markdown content to file
            writeToFile(outputFileName, READMEContent);

            // Logging success message
            console.log(`${outputFileName} successfully generated!`);
        })
        .catch((err) => console.error(err));
}

// Initialising the program
init();
