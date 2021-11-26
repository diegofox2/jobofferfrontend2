import { ComponentStory, ComponentMeta } from '@storybook/react';
import FilterItem, { FilterItemValue } from '../../../components/filter/FilterItem';

export default {
  title: 'Example/FilterItem',
  component: FilterItem,
  argTypes: {}
} as ComponentMeta<typeof FilterItem>;

const Template: ComponentStory<typeof FilterItem> = (args) => <FilterItem {...args} />;

const items: Array<FilterItemValue> = [
  { id: '1', value: 'Buenos Aires', checked: false },
  { id: '2', value: 'Ciudad de Buenos Aires', checked: false },
  { id: '3', value: 'San Juan', checked: false },
  { id: '4', value: 'San Luis', checked: false },
  { id: '5', value: 'Remoto', checked: false }
];

export const Default = Template.bind({});
Default.args = {
  title: 'Lugar de trabajo',
  values: items
};
