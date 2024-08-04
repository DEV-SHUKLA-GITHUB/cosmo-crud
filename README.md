Introduction
This README provides step-by-step instructions for setting up project locally.

Prerequisites
Before setting up the project, ensure you have the following installed:

Node.js: Download and install Node.js from nodejs.org. It's recommended to use the latest LTS version.
npm: npm is installed with Node.js. You can check your version with npm -v.
Project Setup
1. Clone the Repository
Clone the project repository from your version control system.

git clone git@github.com:DEV-SHUKLA-GITHUB/cosmo-crud.git

3. Install Dependencies
Install the required dependencies using npm.

npm install
This command installs all the packages listed in the package.json file.

5. Start the Development Server
To start the development server, run:

npm run dev
This command starts the Vite development server and provides you with a local server URL.

6. Build for Production
To build the project for production, run:

npm run build
This command compiles your application and outputs the static files into the dist directory.

7. Preview the Production Build
To preview the production build locally, run:

npm run serve
This command serves the files from the dist directory and allows you to preview the production version of your application.

Additional Scripts
npm run lint: Lint your codebase for potential errors and code style issues.
npm run test: Run tests if you have set up a testing framework.
Troubleshooting
Common Errors: Check for missing dependencies, syntax errors, or configuration issues in your environment files.
Network Issues: Ensure you have a stable internet connection if dependencies fail to install.

