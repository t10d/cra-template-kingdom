import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import Select from './index';
import { Box, Flex } from '@chakra-ui/layout';
import { ArrowDownIcon } from '@chakra-ui/icons';

export default {
  title: 'Select',
  component: Select,
} as Meta;

const Template: Story<React.ComponentProps<typeof Select>> = (args) => (
  <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
    <Box w={300}>
      <Select {...args} />
    </Box>
  </Flex>
);

const options = [
  {
    value: 'foo',
    placeholder: 'Foo',
  },
  {
    value: 'bar',
    placeholder: 'Bar',
  },
  {
    value: 'baz',
    placeholder: 'Baz',
  },
];

export const DefaultSelect = Template.bind({});
DefaultSelect.args = {
  placeholder: 'Select one...',
  options,
};

export const FilledSelect = Template.bind({});
FilledSelect.args = {
  variant: 'filled',
  placeholder: 'Select one...',
  options,
};

export const NewIconSelect = Template.bind({});
NewIconSelect.args = {
  placeholder: 'Select one...',
  icon: <ArrowDownIcon />,
  options,
};
