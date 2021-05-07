import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import Layout from './Layout';

export default {
  title: 'Layout',
  component: Layout,
} as Meta;

const Template: Story<React.ComponentProps<typeof Layout>> = (args) => (
  <Layout {...args} />
);

export const WrapperWithoutChildren = Template.bind({});
WrapperWithoutChildren.args = {};

export const WrapperWithChildren = Template.bind({});
WrapperWithChildren.args = {
  children: <span style={{ fontSize: '28px' }}>Child</span>,
};
