import { ComponentStory, ComponentMeta } from '@storybook/react';
import CompanyList from '../../../components/company/CompanyList';
import Company from '../../../model/Company';

export default {
  title: 'Example/CompanyList',
  component: CompanyList,
  argTypes: {}
} as ComponentMeta<typeof CompanyList>;

const Template: ComponentStory<typeof CompanyList> = (args) => <CompanyList {...args} />;

const companies: Array<Company> = [
  { id: '1', name: 'Microsoft', activity: 'Software' },
  { id: '2', name: 'Google', activity: 'Software' }
];

export const Default = Template.bind({});
Default.args = {
  companies: companies
};
