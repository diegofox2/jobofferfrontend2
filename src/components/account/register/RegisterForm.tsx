import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Alert } from "react-bootstrap";

type FormData = {
  email?: string;
  password?: string;
  repeatedPassword?: string;
  isRecruiter?: boolean;
};

export default function RegisterForm(props: FormData) {
  const { register, handleSubmit, watch } = useForm<FormData>();

  const emailWatch = watch("email");
  const passwordWatch = watch("password");
  const repeatedPasswordWatch = watch("repeatedPassword");

  const [isReadyToSubmit, setIsReadyToSubmit] = React.useState<boolean>(false);
  const [isFormInvalid, setIsFormInvalid] = React.useState<boolean>();

  useEffect(() => {
    emailWatch && passwordWatch && repeatedPasswordWatch
      ? setIsReadyToSubmit(true)
      : setIsReadyToSubmit(false);
  }, [emailWatch, passwordWatch, repeatedPasswordWatch]);

  useEffect(() => {
    isReadyToSubmit && passwordWatch !== repeatedPasswordWatch
      ? setIsFormInvalid(true)
      : setIsFormInvalid(false);
  }, [isReadyToSubmit, passwordWatch, repeatedPasswordWatch]);

  const onSubmit = (data: FormData) => console.log(data);

  const errorMessage = isFormInvalid && (
    <Alert variant="danger">Las contraseñas no coinciden</Alert>
  );

  return (
    <>
      {errorMessage}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="emailInput">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su email"
            {...register("email")}
            defaultValue={props.email}
          />
        </Form.Group>
        <Form.Group controlId="passwordInput">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password")}
            defaultValue={props.password}
          />
        </Form.Group>
        <Form.Group controlId="repeatPasswordInput">
          <Form.Label>Repita su password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("repeatedPassword")}
            defaultValue={props.repeatedPassword}
          />
        </Form.Group>
        <Form.Group controlId="isRecruiterCheck">
          <Form.Check
            type="checkbox"
            label="Soy recruiter"
            {...register("isRecruiter")}
            checked={props.isRecruiter ? props.isRecruiter : false}
          />
        </Form.Group>
        <Button
          variant={isReadyToSubmit ? "primary" : "secondary"}
          type="submit"
          disabled={!isReadyToSubmit}
        >
          Ingresar
        </Button>
      </Form>
    </>
  );
}
