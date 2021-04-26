import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from './index';
import { Box, Flex } from '@chakra-ui/layout';
import { ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<React.ComponentProps<typeof Button>> = (args) => (
  <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
    <Box w={300}>
      <Button {...args} />
    </Box>
  </Flex>
);

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  text: 'My Button',
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  text: 'Button',
  variant: 'outline',
};

export const CleanButton = Template.bind({});
CleanButton.args = {
  text: 'Button',
  variant: 'ghost',
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  text: 'Button',
  variant: 'link',
};

export const LeftIconButton = Template.bind({});
LeftIconButton.args = {
  text: 'Email',
  leftIcon: <EmailIcon />,
};

export const RightIconButton = Template.bind({});
RightIconButton.args = {
  text: 'Next',
  rightIcon: <ArrowForwardIcon />,
};
