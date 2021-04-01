import { Flex, VStack } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const UnAuthApp = React.lazy(() => import('./pages/index/UnAuthApp'));

const AuthApp = React.lazy(() => import('./pages/index/AuthApp'));

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <Router>
      <React.Suspense fallback={<PageSpinner />}>
        {isAuthenticated ? <AuthApp /> : <UnAuthApp />}
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
