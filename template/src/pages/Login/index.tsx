import * as React from 'react';
import { useAuth } from '../../context/AuthContext';

function Login() {
  const { authenticate } = useAuth();

  return (
    <div>
      <button onClick={() => authenticate({ token: 'bora' })}>
        set to true
      </button>
    </div>
  );
}

export default Login;
