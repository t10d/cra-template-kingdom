# Create React App Kingdom Version

To use it just

```
yarn create react-app my-app --template kingdom
```

or

```
npx create-react-app my-app --template kingdom
```

## Docs

### Structure

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
