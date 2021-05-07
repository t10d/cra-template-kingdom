import { Flex, VStack } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

const UnauthenticatedApp = React.lazy(
  () => import('./pages/index/UnauthenticatedApp')
);

const AuthenticatedApp = React.lazy(
  () => import('./pages/index/AuthenticatedApp')
);

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <Router>
      <React.Suspense fallback={<PageSpinner />}>
        {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </React.Suspense>
    </Router>
  );
}

function PageSpinner() {
  return (
    <Flex justify="center" align="center" minH="100vh">
      <VStack spacing={6}>
        <Spinner size="xl" />
      </VStack>
    </Flex>
  );
}

export default App;
