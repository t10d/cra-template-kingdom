import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import Input from './index';
import { Box, Flex } from '@chakra-ui/layout';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: Story<React.ComponentProps<typeof Input>> = (args) => (
  <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
    <Box w={300}>
      <Input {...args} />
    </Box>
  </Flex>
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
