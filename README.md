# E-Bill PDF Uploader

Start both Front End and Back End server.

## Prerequisites

Make sure you have the following installed on your machine:

Node.js (https://nodejs.org)
npm (Node Package Manager, comes with Node.js)

## Installation

- Clone this repository or download the source code.

- Navigate to the project directory in your terminal.

- Run the following command to install the dependencies:
  "npm install"

## Usage

### MOCK API Server

- Move to server directory in your terminal and run command to install dependencies:
  "npm install"

- Start the mock API server:
  "npm start"

- This will start the server at http://localhost:3001.

### Front-End

- In a separate terminal again move to project directory, start the React development server: "npm start"
  This will start the React application at http://localhost:3000

- Open your web browser and visit http://localhost:3000 to access the application.

- Select a PDF file using the file input and click the "Upload" button.

  Only PDF files can be selected.
  The application will display a preview of the uploaded PDF file.
  Click on Upload Button to upload it over Server
  The upload status or any error messages will be shown below the form.
  Uploaded pdf file will be shown in uploads folder of server directory.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

## Screenshots

![App Screenshot](/src/images/pdfupload1.jpg?raw=true "Optional Title")

![App Screenshot](/src/images/pdfupload2.jpg?raw=true "Optional Title")

![App Screenshot](/src/images/pdfupload3.jpg?raw=true "Optional Title")
