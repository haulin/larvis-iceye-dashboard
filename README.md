# LARVIS - Iceye - dashboard

![screens](https://trello-attachments.s3.amazonaws.com/5f5f72a165a8782ddf751e64/5f6a0fa0cba2ab20bcefe5ad/d4b654699b67b4bd215c65ba7683f77e/larvis_screens.png)

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

## Technical stack

- Ant Design - component library
- CRACo - CRA configuration
- Create React App
- LESS stylesheets - why not, Ant uses them
- Prettier - autoformatting code
- React contexts & hooks
- React Router
- React Testing Library - functional testing over unit tests
- recharts - composable React charting library
- TypeScript - autocompletion of object keys is tight

## Conventions

Using CRA to delegate the responsibility of configuring webpack, babel and the like to the open source community. CRACo still allows us to make modifications if we need to (e.g. modifying Ant theme).

Routing is done using React Router. We implemented our own PrivateRoute component that makes sure unauthenticated user is redirected to the login page.

Using LESS stylesheets since it doesn't lock us in a particular framework like Emotion for example. Using BEM naming convention which is ideal for styling isolated components. Mobile first approach to responsiveness.

In React prefer functional components and hooks where possible. It's more close to the metal, no magic.

Every export should be named properly, not using default exports. Similar modules should be imported from a single location, e.g. `import { Login } from 'components'` rather than a specific file. Using submodules is encouraged, e.g. React.FC rather than importing FC directly. You don't want to have first 50 lines of the file consisting of imports.

Sort your imports, style rules, and object keys alphabetically where possible. No other ordering makes sense, sorry. ES imports are sorted in the following order - 3rd parties, 1st parties, relative paths.
