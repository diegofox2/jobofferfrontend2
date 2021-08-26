import { render, fireEvent, screen } from '@testing-library/react';
import LoginModal from '../../../../components/account/login/LoginModal';
import { LoginCredentials } from '../../../../components/account/login/LoginForm';

describe('The LoginModal component', () => {
  test('should appear when prop ´show´ is true', () => {
    render(<LoginModal show={true} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('should call onClose when the user close the modal', () => {
    // arrange
    const onCloseHandler = jest.fn();
    render(<LoginModal show={true} onClose={onCloseHandler} />);
    const closeButton = screen.getAllByRole('button')[0];

    // act
    fireEvent.click(closeButton);

    // assert
    expect(onCloseHandler).toBeCalled();
  });

  test('should call onLogin when the user fill the form and click on Ingresar', () => {
    // arrange
    const onLoginHandler = jest.fn().mockImplementation((credential: LoginCredentials) => {});

    render(<LoginModal show={true} onLogin={onLoginHandler} />);
    const loginButton = screen.getAllByRole('button')[1];
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    const rememberMe = screen.getByLabelText('Recordarme la proxima vez');

    // act
    fireEvent.change(email, { target: { value: 'a@b.com' } });
    fireEvent.change(password, { target: { value: 'pepe' } });
    fireEvent.click(rememberMe);
    fireEvent.click(loginButton);

    // assert
    expect(onLoginHandler).toBeCalledWith({ email: 'a@b.com', password: 'pepe', rememberMe: true });
  });
});
