import { useForm } from "react-hook-form"
import { Form, Button } from 'react-bootstrap'

type FormData = {

    email: string,
    password: string,
    repeatedPassword: string,
    isRecruiter: boolean

}

export default function RegisterForm() {

    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = handleSubmit((data: any) => console.log(data));

    return (
        <>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="emailInput">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su email" {...register("email")} />
                </Form.Group>
                <Form.Group controlId="passwordInput">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  {...register("password")} />
                </Form.Group>
                <Form.Group controlId="repeatPasswordInput">
                    <Form.Label>Repita su password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  {...register("repeatedPassword")} />
                </Form.Group>
                <Form.Group controlId="isRecruiterCheck">
                    <Form.Check type="checkbox" label="Soy recruiter" {...register("isRecruiter")} />
                </Form.Group>
            </Form>
        </>
    )
}