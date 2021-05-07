import * as React from 'react';
import UnauthenticatedApp from '../UnauthenticatedApp';
import { screen, renderWithRouter } from '../../../utils/test';

describe('<UnauthenticatedApp /> test suite', () => {
  it('renders the login screen', async () => {
    renderWithRouter(<UnauthenticatedApp />);

    expect(await screen.findByTestId('login')).toBeInTheDocument();
  });

  it('renders login screen when trying to access authenticated app', async () => {
    renderWithRouter(<UnauthenticatedApp />, { route: '/user' });

    expect(await screen.findByTestId('login')).toBeInTheDocument();
  });
});
