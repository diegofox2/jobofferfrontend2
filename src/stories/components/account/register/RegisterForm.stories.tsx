import { ComponentStory, ComponentMeta } from '@storybook/react';
import RegisterForm from '../../../../components/account/register/RegisterForm';

export default {
  title: 'Example/RegisterForm',
  component: RegisterForm,
  argTypes: {}
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = (args) => <RegisterForm {...args} />;

export const EmptyForm = Template.bind({});
EmptyForm.args = {};

export const ShowingErrorMessage = Template.bind({});
ShowingErrorMessage.args = {
  errorMessage: 'Ya exista una cuenta con ese email',
  email: 'a@b.com',
  password: 'tritri',
  repeatedPassword: 'tritri',
  isRecruiter: true
};
