import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import LoginWrapper from './index';

export default {
  title: 'LoginWrapper',
  component: LoginWrapper,
} as Meta;

const Template: Story<React.ComponentProps<typeof LoginWrapper>> = (args) => (
  <LoginWrapper {...args} />
);

export const WrapperWithoutChildren = Template.bind({});
WrapperWithoutChildren.args = {};

export const WrapperWithChildren = Template.bind({});
WrapperWithChildren.args = {
  children: <span style={{ fontSize: '28px' }}>Child</span>,
};
