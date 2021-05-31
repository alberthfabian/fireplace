import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './Styled';

const Login = () => {

  const { loginWithRedirect } = useAuth0();

  return (
    <Button onClick={() => loginWithRedirect()}>
      Ingresar
    </Button>
  );
};

export default Login;