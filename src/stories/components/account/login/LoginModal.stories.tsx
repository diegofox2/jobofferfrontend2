import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoginModal from '../../../../components/account/login/LoginModal';

export default {
  title: 'Example/LoginModal',
  component: LoginModal,
  argTypes: {},
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const InitialState = Template.bind({});
InitialState.args = { show: true };