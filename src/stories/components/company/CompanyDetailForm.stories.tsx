import { ComponentStory, ComponentMeta } from '@storybook/react';
import CompanyDetailForm from '../../../components/company/CompanyDetailForm';

export default {
  title: 'Example/CompanyDetailForm',
  component: CompanyDetailForm,
  argTypes: {}
} as ComponentMeta<typeof CompanyDetailForm>;

const Template: ComponentStory<typeof CompanyDetailForm> = (args) => <CompanyDetailForm {...args} />;

export const EmptyForm = Template.bind({});
EmptyForm.args = {};

export const ShowingErrorMessage = Template.bind({});
ShowingErrorMessage.args = {
  errorMessage: 'Ya exista una empresa con ese nombre y actividad'
};
