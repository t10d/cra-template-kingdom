import * as React from 'react';
import UnAuthApp from '../../../../../test/src/pages/index/UnAuthApp';
import { screen, renderWithRouter } from '../../../utils/test';

describe('<UnAuthenticatedApp /> test suite', () => {
  it('renders the login screen', () => {
    renderWithRouter(<UnAuthApp />);

    expect(screen.getByTestId('login')).toBeInTheDocument();
  });

  it('renders login screen when trying to access authenticated app', () => {
    renderWithRouter(<UnAuthApp />, { route: '/user' });

    expect(screen.getByTestId('login')).toBeInTheDocument();
  });
});
