import * as React from 'react';
import { useAuth } from '../../context/AuthContext';

function User() {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={() => logout()}>set to false</button>
    </div>
  );
}

export default User;
