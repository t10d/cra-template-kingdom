import userEvent from '@testing-library/user-event';
import Login from '../index';
import { renderWithRouter, screen, waitFor } from '../../../utils/test';
import { makeServer } from '../../../server';

let server: any;

beforeEach(() => {
  server = makeServer();
});

afterEach(() => {
  server.shutdown();
});

describe('<Login />', () => {
  it('should render the login form UI', () => {
    renderWithRouter(<Login />);

    expect(
      screen.getByText(/fill the fields below to login/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText('email')).toBeInTheDocument();
    expect(screen.getByLabelText('password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('should render error messages when inputs are invalid', async () => {
    renderWithRouter(<Login />);
    userEvent.type(screen.getByLabelText('email'), 'not valid');
    userEvent.type(screen.getByLabelText('password'), 'small{enter}');

    await waitFor(() => {
      expect(
        screen.getByText(/insert a valid email address/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/The password must have at leat 7 characters./i)
      ).toBeInTheDocument();
    });
  });

  it('should show email or password error submit a wrong password or email', async () => {
    renderWithRouter(<Login />);
    server.create('user', {
      username: 'user@t10.digital',
      password: '12345678',
    });

    userEvent.type(screen.getByLabelText('email'), 'user@t10.digital');
    userEvent.type(screen.getByLabelText('password'), '111111111111');
    userEvent.click(screen.getByRole('button', { name: /login/i }));
    await waitFor(() => {
      expect(
        screen.getByText(/Email or password are incorrect\. Try again\./i)
      ).toBeInTheDocument();
    });
  });
});
