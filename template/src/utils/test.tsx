import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as RTL from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import { AuthProvider } from '../contexts/AuthContext';

type RenderWithRouterOptions = {
  route?: string;
};

function renderWithRouter(
  ui: React.ReactElement,
  options: RenderWithRouterOptions = {}
) {
  const { route = '/' } = options;

  window.history.pushState({}, 'Test page', route);

  function Providers({ children }: { children?: React.ReactNode }) {
    return (
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </AuthProvider>
      </ChakraProvider>
    );
  }

  return RTL.render(ui, { wrapper: Providers });
}

export * from '@testing-library/react';

export { renderWithRouter };
