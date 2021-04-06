import * as React from 'react';
import App from '../../../test/src/App';
import { screen, renderWithRouter, waitFor } from '../utils/test';

describe('<App /> test suite', () => {
  it('renders login screen as default', async () => {
    renderWithRouter(<App />);

    await waitFor(() => {
      expect(screen.getByTestId('login')).toBeInTheDocument();
    });
  });

  it('renders login screen when trying to access authenticated area w/o being authenticated', async () => {
    renderWithRouter(<App />, { route: '/user' });

    await waitFor(() => {
      expect(screen.getByTestId('login')).toBeInTheDocument();
    });
  });

  it('renders user screen when authenticated', async () => {
    localStorage.setItem('token', 'test');
    renderWithRouter(<App />, { route: '/user' });

    await waitFor(() => {
      expect(screen.getByTestId('user')).toBeInTheDocument();
    });
  });

  it('renders user screen when trying to access login and authenticated', async () => {
    localStorage.setItem('token', 'test');
    renderWithRouter(<App />, { route: '/login' });

    await waitFor(() => {
      expect(screen.getByTestId('user')).toBeInTheDocument();
    });
  });
});
