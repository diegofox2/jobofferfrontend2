import { render, fireEvent, screen } from '@testing-library/react'
import LoginForm from '../../../../components/account/login/LoginForm'

describe('The Login component', () => {
    test('should show error message when authentication fails', () => {
        render(<LoginForm loginFailed={true} />);
        expect(screen.getByRole('alert')).toBeVisible();
    })

    test('should hide error message when authentication fails but user modifies user or password', () => {
        render(<LoginForm loginFailed={true} email="pepe@hotmail.com" password="tritri" />);
        const passwordTextBox = screen.getByLabelText('Password');
        fireEvent.change(passwordTextBox, { target: { value: 'NuevaPassword' } });
        expect(screen.queryByRole('alert')).toBeNull()
    })

    test('should show disable the login button when password and email are not completed', () => {
        render(<LoginForm />);
        expect(screen.getByText('Ingresar')).toBeDisabled();
    })

    test('should show disable the login button when only password or email are completed', () => {
        render(<LoginForm />);
        const emailTextBox = screen.getByLabelText('Email');
        fireEvent.change(emailTextBox, { target: { value: 'pepe@email.com' } });
        expect(screen.getByText('Ingresar')).toBeDisabled();
    })

    test('should show enabled the login button when user completes email or password', () => {
        render(<LoginForm />);
        const emailTextBox = screen.getByLabelText('Email');
        const passwordTextBox = screen.getByLabelText('Password');
        
        fireEvent.change(emailTextBox, { target: { value: 'pepe@email.com' } });
        fireEvent.change(passwordTextBox, { target: { value: 'tritri' } });
        expect(screen.getByText('Ingresar')).toBeEnabled();
    })


    test('should show enabled the login button when login failed but user modifiyes email or password', () => {
        render(<LoginForm email='pepe@email.com' password="thepassword" loginFailed={true} />);
        const emailTextBox = screen.getByLabelText('Email');
        fireEvent.change(emailTextBox, { target: { value: 'a' } });
        expect(screen.getByText('Ingresar')).toBeEnabled();
    })
    
})
