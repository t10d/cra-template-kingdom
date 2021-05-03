import userEvent from '@testing-library/user-event';
import ResetPassword from '../index';
import { renderWithRouter, screen, waitFor } from '../../../utils/test';
import { makeServer } from '../../../server';

let server: any;

beforeEach(() => {
  server = makeServer();
});

afterEach(() => {
  server.shutdown();
});

describe('<ResetPassword />', () => {
  it('should render the ResetPassword form UI', () => {
    renderWithRouter(<ResetPassword />);

    expect(
      screen.getByText(/Fill the form to reset your password/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText('password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm password')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Change password/i })
    ).toBeInTheDocument();
  });

  it('should render error messages when inputs are invalid', async () => {
    renderWithRouter(<ResetPassword />);
    userEvent.type(screen.getByLabelText('password'), 'small');
    userEvent.type(screen.getByLabelText('Confirm password'), 'small{enter}');

    await waitFor(() => {
      expect(
        screen.getByText(/The password must have at leat 7 characters./i)
      ).toBeInTheDocument();
    });
  });

  it('should fail password change due to incorrect id', async () => {
    renderWithRouter(<ResetPassword />, {
      route: 'reset-password/incorrect_id',
    });
    server.create('user', {
      username: 'user@t10.digital',
      password: '12345678',
    });

    userEvent.type(screen.getByLabelText('password'), '111111111111');
    userEvent.type(screen.getByLabelText('Confirm password'), '111111111111');
    userEvent.click(screen.getByTestId('submit-reset'));
    await waitFor(() => {
      expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
    });
  });
});
