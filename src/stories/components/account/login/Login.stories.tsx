import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoginForm from '../../../../components/account/login/LoginForm';

export default {
  title: 'Example/Login',
  component: LoginForm,
  argTypes: {},
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const InitialState = Template.bind({});
InitialState.args = {};

export const FormFilled = Template.bind({});
FormFilled.args = { email:'pepe@email.com', password: 'thepassword', rememberMe: true };

export const FormFilledWithoutRememberMe = Template.bind({});
FormFilledWithoutRememberMe.args = { email:'pepe@email.com', password: 'thepassword' };


export const LoginError = Template.bind({});
LoginError.args = { email:'pepe@email.com', password: 'thepassword', loginFailed: true };
