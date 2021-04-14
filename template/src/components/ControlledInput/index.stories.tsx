import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import ControlledInput from './index';

export default {
  title: 'Input',
  component: ControlledInput,
} as Meta;

const Template: Story<React.ComponentProps<typeof ControlledInput>> = (
  args
) => <ControlledInput {...args} />;

export const Input = Template.bind({});
Input.args = {
  label: 'My Input Label',
  icon: <p>Icon</p>,
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  label: 'My Input Label',
  icon: <p>Icon</p>,
  errorMessage: 'Error',
};
