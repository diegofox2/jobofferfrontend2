import { render, fireEvent, screen } from '@testing-library/react';
import RegisterForm, { RegisterFormOutputData } from '../../../../components/account/register/RegisterForm';

describe('The registration form', () => {
  test('disables the create account button in the initial state', () => {
    render(<RegisterForm />);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  test('enables the create account button when data in form is valid', () => {
    // Arrange
    render(<RegisterForm />);
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    const repeatedPasswrd = screen.getByLabelText('Repita su password');

    // Act
    fireEvent.change(email, { target: { value: 'a@b.com' } });
    fireEvent.change(password, { target: { value: 'tritri' } });
    fireEvent.change(repeatedPasswrd, { target: { value: 'tritri' } });

    // Assert
    expect(screen.getByRole('button')).toBeEnabled();
  });

  test('shows an error message when password does not match', () => {
    // Arrange
    render(<RegisterForm />);
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    const repeatedPasswrd = screen.getByLabelText('Repita su password');

    // Act
    fireEvent.change(email, { target: { value: 'a@b.com' } });
    fireEvent.change(password, { target: { value: 'tritri' } });
    fireEvent.change(repeatedPasswrd, { target: { value: 'otro' } });

    // Assert
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('shows general error message when prop errorMessage has text', () => {
    const errorMessage = 'Hubo un error en el servidor';
    render(<RegisterForm errorMessage= {errorMessage} />);
    expect(screen.queryByRole('alert')).toBeInTheDocument();
    expect(screen.queryByText(errorMessage)).toBeInTheDocument();
  });

  test('returns data when form is valid and user clicks on create account ', () => {
    // Arrange
    const callback = jest.fn().mockImplementation((outputData: RegisterFormOutputData) => {});

    render(<RegisterForm onCreateAccount={callback} />);
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    const repeatedPassword = screen.getByLabelText('Repita su password');
    const iamRecruiter = screen.getByLabelText('Soy recruiter');
    const createAccountButton = screen.getByText('Crear cuenta');

    // Act
    fireEvent.change(email, { target: { value: 'a@b.com' } });
    fireEvent.change(password, { target: { value: 'tritri' } });
    fireEvent.change(repeatedPassword, { target: { value: 'tritri' } });
    fireEvent.click(iamRecruiter);
    fireEvent.click(createAccountButton);

    // Assert
    expect(callback).toBeCalled();
  });
});
