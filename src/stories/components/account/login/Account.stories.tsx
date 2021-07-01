import { ComponentStory, ComponentMeta } from '@storybook/react';

import Login from '../../../../components/account/login/Login';

export default {
  title: 'Example/Login',
  component: Login,
  argTypes: {},
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {};
