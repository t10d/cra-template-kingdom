import userEvent from '@testing-library/user-event';
import ForgotPassword from '../index';
import { renderWithRouter, screen, waitFor } from '../../../utils/test';
import { makeServer } from '../../../server';

let server: any;

beforeEach(() => {
  server = makeServer();
});

afterEach(() => {
  server.shutdown();
});

describe('<ForgotPassword />', () => {
  it('should render the ForgotPassword form UI', () => {
    renderWithRouter(<ForgotPassword />);

    expect(
      screen.getByText(/Fill the field below with your email/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText('email')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send/i })).toBeInTheDocument();
  });

  it('should render error messages when inputs are invalid', async () => {
    renderWithRouter(<ForgotPassword />);
    userEvent.type(screen.getByLabelText('email'), 'invalidemail');

    await waitFor(() => {
      expect(
        screen.getByText(/Insert a valid email address./i)
      ).toBeInTheDocument();
    });
  });

  it('should fail password change due to incorrect email', async () => {
    renderWithRouter(<ForgotPassword />);
    server.create('user', {
      username: 'user@t10.digital',
      password: '12345678',
    });

    userEvent.type(screen.getByLabelText('email'), 'incorrect@t10.digital');
    userEvent.click(screen.getByTestId('submit-forgot'));
    await waitFor(() => {
      expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
    });
  });
});
