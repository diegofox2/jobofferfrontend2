import { render, fireEvent, screen } from '@testing-library/react'
import Login from '../../../../components/account/login/Login'

describe('The Login component', () => {
    test('should show disable the login button when password and email are not completed', () => {
        render(<Login />);
        expect(screen.getByText('Ingresar')).toBeDisabled();
    })    

    test('should show enabled the login button when login failed but user modifiyes email or password', () => {
        render(<Login email='pepe@email.com' password="thepassword" loginFailed={true} />);
        const emailTextBox = screen.getByLabelText('Email');
        fireEvent.change(emailTextBox, { target: { value: 'a' } });
        expect(screen.getByText('Ingresar')).toBeEnabled();
    })
    
})
