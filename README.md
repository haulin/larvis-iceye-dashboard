# LARVIS - Iceye - dashboard

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with typescript template.

It uses [Ant Design](https://ant.design/) as the component library.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Philosophy

Using Ant Design, React, React Testing Library, TypeScript as a basis for current best practices.
Prettier helps format the code automatically.

Every export should be named properly, not using default exports. Similar modules should be imported from a single location, e.g. `import { Login } from 'src/components` rather than a specific file.
