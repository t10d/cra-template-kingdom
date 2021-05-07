# Getting Started with Create React App Kingdom

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the [Kingdom version](https://github.com/t10d/cra-template-kingdom).

## Project Structure

We're following a pretty straight forward structure, [simply move files around until it feels right](https://react-file-structure.surge.sh/).

```
   src
   ├── components
   │   └── Input
   │       ├── __tests__
   │       │   └── Input.tests.tsx
   │       └── Input.tsx
   ├── pages
   │   └── Login
   │       ├── __tests__
   │       │   └── Login.tests.tsx
   │       └── Login.tsx
   │   └── index
   │       ├── __tests__
   │       │   └── AuthenticatedApp.tests.tsx
   │       │   └── UnauthenticatedApp.tests.tsx
   │       └── AuthenticatedApp.tsx
   │       └── UnauthenticatedApp.tsx
   ├── utils
   │   └── constants.ts
   ├── __tests__
   │   └── App.test.tsx
   ├── services
   │   └── api.ts
   ├── styles
   │   └── theme.ts
```

### Theming

When it comes to theming we choose going with [Chakra-UI](https://chakra-ui.com/) since we feel it boosts our productivity and makes it easier for us to ship better and faster.

### Authorization

In order to handle Authorization we split the App in two.

- **AuthorizedApp**: Where we maintain every authorized route
- **UnAuthorizedApp**: Where we maintain every unauthorized route

We're leveraging code-splitting to only load the App that our user currently is.

### Additional Packages

We also added a few extra packages to increase your experience. These packages include:

- [Husky](https://typicode.github.io/husky/#/)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
