import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Alert, Col, Row } from 'react-bootstrap';

export interface RegisterFormOutputData {
  email: string;
  password: string;
  repeatedPassword: string;
  isRecruiter: boolean;
}

interface RegisterFormProps {
  email?: string;
  password?: string;
  repeatedPassword?: string;
  isRecruiter?: boolean;
  errorMessage?: string;

  onCreateAccount?: (outputData: RegisterFormOutputData) => void;
  onCancel?: () => void;
}

export default function RegisterForm(props: RegisterFormProps) {
  const { register, watch, setValue } = useForm<RegisterFormProps>();

  const emailWatch = watch('email');
  const passwordWatch = watch('password');
  const repeatedPasswordWatch = watch('repeatedPassword');
  const isRecruiterWatch = watch('isRecruiter');

  const [isFormFilled, setIsFormFilled] = React.useState<boolean>(false);
  const [isFormValid, setIsFormValid] = React.useState<boolean>(false);

  useEffect(() => {
    emailWatch && passwordWatch && repeatedPasswordWatch ? setIsFormFilled(true) : setIsFormFilled(false);
  }, [emailWatch, passwordWatch, repeatedPasswordWatch]);

  useEffect(() => {
    isFormFilled && passwordWatch === repeatedPasswordWatch ? setIsFormValid(true) : setIsFormValid(false);
  }, [isFormFilled, passwordWatch, repeatedPasswordWatch]);

  useEffect(() => {
    setValue('email', props.email ? props.email : '');
    setValue('password', props.password ? props.password : '');
    setValue('repeatedPassword', props.repeatedPassword ? props.repeatedPassword : '');
    setValue('isRecruiter', props.isRecruiter ? props.isRecruiter : false);
  }, [props.email, props.password, props.repeatedPassword, props.isRecruiter]);

  const onCreateAccount = (event: any) => {
    event.preventDefault();

    props.onCreateAccount &&
      props.onCreateAccount!({
        email: emailWatch!,
        password: passwordWatch!,
        repeatedPassword: repeatedPasswordWatch!,
        isRecruiter: isRecruiterWatch!
      });
  };

  const onCancel = (event: any) => {
    props.onCancel && props.onCancel();
  };

  const showPasswordErrorMessage = isFormFilled && !isFormValid && <Alert variant='danger'>Las contraseñas no coinciden</Alert>;

  const showGenralErrorMessage = props.errorMessage && <Alert variant='danger'>{props.errorMessage!}</Alert>;

  return (
    <>
      {showPasswordErrorMessage}
      {showGenralErrorMessage}
      <Form>
        <Form.Group controlId='emailInput'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Ingrese su email' {...register('email')} defaultValue={props.email} />
        </Form.Group>
        <Form.Group controlId='passwordInput'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' {...register('password')} defaultValue={props.password} />
        </Form.Group>
        <Form.Group controlId='repeatPasswordInput'>
          <Form.Label>Repita su password</Form.Label>
          <Form.Control type='password' placeholder='Password' {...register('repeatedPassword')} defaultValue={props.repeatedPassword} />
        </Form.Group>
        <Form.Group controlId='isRecruiterCheck'>
          <Form.Check type='checkbox' label='Soy recruiter' {...register('isRecruiter')} defaultChecked={props.isRecruiter ? props.isRecruiter! : false} />
        </Form.Group>
          <Row>
            <Col xs={6}>
              <Button variant={isFormFilled ? 'primary' : 'secondary'} onClick={onCreateAccount} disabled={!isFormValid}>
                Crear cuenta
              </Button>
            </Col>
            <Col xs={6}>
              <Button variant={'secondary'} onClick={onCancel} disabled={!isFormValid}>
                Cancelar
              </Button>
            </Col>
          </Row>
      </Form>
    </>
  );
}
