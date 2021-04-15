import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import Input from './index';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: Story<React.ComponentProps<typeof Input>> = (args) => (
  <Input {...args} />
);

export const InputValid = Template.bind({});
InputValid.args = {
  label: 'My Input Label',
  icon: <p>Icon</p>,
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  label: 'My Input Label',
  icon: <p>Icon</p>,
  errorMessage: 'Error',
};
