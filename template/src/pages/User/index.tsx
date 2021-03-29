import * as React from 'react';
import { useAuthContext } from '../../context/AuthContext';

function User() {
  const { logout } = useAuthContext();
  return (
    <div>
      <button onClick={() => logout()}>set to false</button>
    </div>
  );
}

export default User;
