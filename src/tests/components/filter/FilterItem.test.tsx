import { render, screen, fireEvent} from '@testing-library/react';
import FilterItem, { FilterItemValue } from '../../../components/filter/FilterItem';

describe('FilterItem', () => {
  const itemsWithoutChecked: Array<FilterItemValue> = [
    { id: '1', value: 'Buenos Aires', checked: false },
    { id: '2', value: 'Ciudad de Buenos Aires', checked: false },
    { id: '3', value: 'San Juan', checked: false },
    { id: '4', value: 'San Luis', checked: false },
    { id: '5', value: 'Remoto', checked: false }
  ];

  const itemsWithChecked: Array<FilterItemValue> = [
    { id: '1', value: 'Buenos Aires', checked: false },
    { id: '2', value: 'Ciudad de Buenos Aires', checked: true },
    { id: '3', value: 'San Juan', checked: false },
    { id: '4', value: 'San Luis', checked: false },
    { id: '5', value: 'Remoto', checked: true }
  ];

  it('should show all the values unchecked if no item is checked by props', () => {
    const callback = jest.fn();
    render(<FilterItem values={itemsWithoutChecked} title='Example' onSelectedValues={callback} />);
    const items = screen.getAllByRole('listitem') as Array<HTMLInputElement>;
    expect(items.every((item) => !item.checked)).toBe(true);
  });

  it('should show checked the items checked in props', () => {
    const callback = jest.fn();
    render(<FilterItem values={itemsWithChecked} title='Example' onSelectedValues={callback} />);
    const items = screen.getAllByRole('listitem') as Array<HTMLInputElement>;
    expect(items.filter((item) => item.checked).length).toBe(2);
  });

  it('should show the text assigned as a title', () => {
    const callback = jest.fn();
    render(<FilterItem values={itemsWithChecked} title='Example' onSelectedValues={callback} />);
    expect(screen.getByText('Example')).toBeInTheDocument();
  });

  it('should invoke the callback every time an item is selected', () => {
    const callback = jest.fn();
    render(<FilterItem values={itemsWithoutChecked} title='Example' onSelectedValues={callback} />);
    const items = screen.getAllByRole('listitem') as Array<HTMLInputElement>;
    fireEvent.click(items.find(item => item.id === '1')!);
    fireEvent.click(items.find(item => item.id === '4')!);
    expect(callback).toBeCalledTimes(2);
  });

  it('should not invoke the callback if no item is clicked', () => {
    const callback = jest.fn();
    render(<FilterItem values={itemsWithoutChecked} title='Example' onSelectedValues={callback} />);
    expect(callback).toBeCalledTimes(0);
  });
});
