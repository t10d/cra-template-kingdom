import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './contexts/AuthContext';
import { makeServer } from './server';
import theme from './styles/theme';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
