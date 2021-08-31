import { render, fireEvent, screen } from '@testing-library/react';
import CompanyDetailForm from '../../../components/company/CompanyDetailForm';
import Company from '../../../model/Company';

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

  test('execute callback when user click on cancel', () => {
    // Arrange
    const callback = jest.fn();
    render(<CompanyDetailForm onCancel={callback} />);
    const btnCancel = screen.getByText('Cancelar');

    // Act
    fireEvent.click(btnCancel);

    // Assert
    expect(callback).toBeCalled();
  });

  test('execute callback when user click on save', () => {
    // Arrange
    const callback = jest.fn().mockImplementation((data: Company) => {});

    render(<CompanyDetailForm onSave={callback} />);
    const name = screen.getByLabelText('Nombre');
    const activity = screen.getByLabelText('Actividad');
    const btnSave = screen.getByText('Guardar');

    // Act
    fireEvent.change(name, { target: { value: 'Microsoft' } });
    fireEvent.change(activity, { target: { value: 'Software' } });
    fireEvent.click(btnSave);

    // Assert
    expect(callback).toBeCalledWith({ name: 'Microsoft', activity: 'Software', id: '' });
  });
});
