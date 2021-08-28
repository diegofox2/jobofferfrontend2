import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface LoginProps {
  email?: string;
  password?: string;
  rememberMe?: boolean;
  loginFailed?: boolean;

  onLogin?: (credentials: LoginCredentials) => void;

  onLoginSuccess?: () => void;
}

export default function LoginForm(props: LoginProps) {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [rememberMe, setRememberMe] = React.useState<boolean>(false);
  const [isEnableToSend, setIsEnableToSend] = React.useState<boolean>(false);
  const [loginFailed, setLoginFailed] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (email && password && !loginFailed) {
      setIsEnableToSend(true);
    } else {
      setIsEnableToSend(false);
    }
  }, [email, password, loginFailed]);

  React.useEffect(() => {
    setEmail(props.email ? props.email : '');
    setPassword(props.password ? props.password : '');
    setRememberMe(props.rememberMe ? props.rememberMe : false);
    setLoginFailed(props.loginFailed ? props.loginFailed : false);
  }, [props.email, props.password, props.rememberMe, props.loginFailed]);

  const errorMessage = loginFailed && <Alert variant='danger'>Error de autenticación, revise los datos y vuelva a ingresar</Alert>;

  const formInputsActions = {
    emailInput: setEmail,
    passwordInput: setPassword,
    rememberMeCheck: setRememberMe
  };

  const handleInputBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    formInputsActions[event.currentTarget.id as 'emailInput' | 'passwordInput'](event.currentTarget.value);
    setLoginFailed(false);
  };

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    formInputsActions[event.currentTarget.id as 'rememberMeCheck'](event.currentTarget.checked);
  };

  const onLoginClick = (event: any) => {
    event.preventDefault();
    props.onLogin && props.onLogin({ email: email, password: password, rememberMe: rememberMe });
  };

  return (
    <>
      {errorMessage}
      <Form>
        <Form.Group controlId='emailInput'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Ingrese su email' value={email} onChange={handleInputBox} />
        </Form.Group>

        <Form.Group controlId='passwordInput'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Ingrese su Password' value={password} onChange={handleInputBox} />
        </Form.Group>
        <Form.Group controlId='rememberMeCheck'>
          <Form.Check type='checkbox' label='Recordarme la proxima vez' checked={rememberMe} onChange={handleCheckbox} />
        </Form.Group>
        <Button variant={isEnableToSend ? 'primary' : 'secondary'} type='submit' onClick={onLoginClick} disabled={!isEnableToSend}>
          Ingresar
        </Button>
      </Form>
    </>
  );
}
