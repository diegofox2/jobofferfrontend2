import { ComponentStory, ComponentMeta } from '@storybook/react';

import Login from '../../../../components/account/login/Login';

export default {
  title: 'Example/Login',
  component: Login,
  argTypes: {},
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const InitialState = Template.bind({});
InitialState.args = {};

export const FormFilled = Template.bind({});
FormFilled.args = { email:'pepe@email.com', password: 'thepassword', rememberMe: true };

export const FormFilledWithoutRememberMe = Template.bind({});
FormFilledWithoutRememberMe.args = { email:'pepe@email.com', password: 'thepassword' };


export const LoginError = Template.bind({});
LoginError.args = { email:'pepe@email.com', password: 'thepassword', loginFailed: true };
