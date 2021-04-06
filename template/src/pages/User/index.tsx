import * as React from 'react';
import { useAuth } from '../../context/AuthContext';

function User() {
  const { logout } = useAuth();
  return (
    <div data-testid="user">
      <button onClick={() => logout()}>set to false</button>
    </div>
  );
}

export default User;
