import * as React from 'react';
import AuthApp from '../AuthApp';
import { screen, renderWithRouter } from '../../../utils/test';

describe('<AuthenticatedApp /> test suite', () => {
  it('renders user screen', () => {
    renderWithRouter(<AuthApp />, { route: '/user' });

    expect(screen.getByTestId('user')).toBeInTheDocument();
  });
});
