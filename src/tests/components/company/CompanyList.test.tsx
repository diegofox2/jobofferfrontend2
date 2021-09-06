import { render, fireEvent, screen } from '@testing-library/react';
import CompanyList from '../../../components/company/CompanyList';
import Company from '../../../model/Company';

describe('The company list component', () => {
  const companies: Array<Company> = [
    { id: '1', name: 'Microsoft', activity: 'Software' },
    { id: '2', name: 'Google', activity: 'Software' }
  ];

  test('disables the save button in the initial state', () => {
    render(<CompanyList companies={companies} />);
    expect(screen.getAllByRole('listitem').length).toEqual(2);
  });

  test('execute callback when user click on some item', () => {
    // Arrange
    const callback = jest.fn();
    render(<CompanyList companies={companies} onClick={callback} />);
    const microsoftItem = screen.getAllByRole('listitem')[0];
    // Act
    fireEvent.click(microsoftItem);

    // Assert
    expect(callback).toBeCalled();
  });
});
