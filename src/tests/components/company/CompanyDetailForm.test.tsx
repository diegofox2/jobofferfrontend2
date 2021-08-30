import { render, fireEvent, screen } from '@testing-library/react';
import CompanyDetailForm from '../../../components/company/CompanyDetailForm';

describe('The company detail form', () => {
  test('disables the save button in the initial state', () => {
    render(<CompanyDetailForm />);
    expect(screen.getByText('Guardar')).toBeDisabled();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  test('enables the save button when data in form is valid', () => {
    // Arrange
    render(<CompanyDetailForm />);
    const nombre = screen.getByLabelText('Nombre');
    const actividad = screen.getByLabelText('Actividad');

    // Act
    fireEvent.change(nombre, { target: { value: 'Microsoft' } });
    fireEvent.change(actividad, { target: { value: 'Software' } });

    // Assert
    expect(screen.getByText('Guardar')).toBeEnabled();
  });
});
