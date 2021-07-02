import { ComponentStory, ComponentMeta } from '@storybook/react';

import RegisterForm from '../../../../components/account/register/RegisterForm';

export default {
  title: 'Example/RegisterForm',
  component: RegisterForm,
  argTypes: {},
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = (args) => <RegisterForm />;

export const EmptyForm = Template.bind({});
EmptyForm.args = {};