import * as React from 'react';
import AuthenticatedApp from '../AuthenticatedApp';
import { screen, renderWithRouter } from '../../../utils/test';

describe('<AuthenticatedApp /> test suite', () => {
  it('renders user screen', () => {
    renderWithRouter(<AuthenticatedApp />, { route: '/user' });

    expect(screen.getByTestId('user')).toBeInTheDocument();
  });
});
