import * as React from 'react';
import { useAuthContext } from '../../context/AuthContext';

function Login() {
  const { authenticate } = useAuthContext();

  return (
    <div>
      <button onClick={() => authenticate({ token: 'bora' })}>
        set to true
      </button>
    </div>
  );
}

export default Login;
