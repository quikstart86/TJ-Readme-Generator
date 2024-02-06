# TJ-README Generator 

## [Table of Contents](#table-of-contents)

* [Description](#description)
* [User-Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Mock-Up](#mock-up)
* [Installation](#installation)
* [Credits](#credits)
* [License](#license)
* [Badges](#badges)
* [Features](#features)
* [Contributing](#contributing)
* [Tests](#tests)


## [Description](#description)
The task was to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer).

The application can be invoked by using the following command:

```bash
`node index.js`
```
## [User-Story](#user-story)

* As a developer, I want a README generator so that I can quickly create a professional README for a new project.

## [Acceptance Criteria](#acceptance-criteria)
* Create a command-line application that accepts user input.
  * When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    * The title of my project 
    * Sections entitled:
      * Description 
      * Table of Contents 
      * Installation 
      * Usage 
      * License 
      * Contributing 
      * Tests 
      * Questions
    * When a user enters the project title then it is displayed as the title of the README
    * When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    * When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
    * When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    * When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README

## [Mock-Up](#mock-up)

![portfolio demo](./assets/img/TJ-ReadME%20Generator_%20Feb%206,%202024%2010_11%20PM.gif)
<br>

![Demo Video Link](./assets/img/qr-code.png)

[Direct Link to screen recording](https://app.screencastify.com/v3/watch/nNN0ORdawxp95D4VCQsE)

[Project Repo](https://github.com/quikstart86/TJ-Readme-Generator)


## [Installation](#installation)

* Create a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. Be sure to create your `.gitignore` file before installing any npm dependencies.

* Make sure that your repo includes a `package.json` with the required dependencies. You can create one by running `npm init` when you first set up the project, before installing any dependencies. Then install 'inquirer' package.

## [Credits](#credits)

Supplied with starter code by © 2023 edX Boot Camps LLC. and built upon by `Thomas Jack`

<br>

**Support and mentoring from course mentors:**
<br>
`Zakariya Hussain`

**Peer Study Group Support:**
Matt Dudman

**Supporting links:** <br>
N/A

## [License](#license)

MIT License

Copyright (c) <2023> <Home-App>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## [Badges](#badges)

![Static Badge](https://img.shields.io/badge/JavaScript_50%25-orange)
![Static Badge](https://img.shields.io/badge/NODE_50%25-green)


## [Features](#features)

N/A

## [Contributing](#contributing)

* Matt Dudman

## [Tests](#tests)

Tested application for issues with loading/ user feedback/file creation/ de-bugging

<br>

[Back to top](#top)