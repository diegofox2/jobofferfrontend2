import { ComponentStory, ComponentMeta } from '@storybook/react';
import CollapsibleCheckboxList, { CollapsibleCheckboxListItemValue } from '../../../components/filter/CollapsibleCheckboxList ';

export default {
  title: 'Example/CollapsibleCheckboxList',
  component: CollapsibleCheckboxList,
  argTypes: {}
} as ComponentMeta<typeof CollapsibleCheckboxList>;

const Template: ComponentStory<typeof CollapsibleCheckboxList> = (args) => <CollapsibleCheckboxList {...args} />;

const items: Array<CollapsibleCheckboxListItemValue> = [
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
