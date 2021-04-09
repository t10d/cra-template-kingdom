import * as React from 'react';
import { Flex, Heading } from '@chakra-ui/layout';

interface LoginWrapperProps {
  children: React.ReactNode;
}

export default function LoginWrapper({ children }: LoginWrapperProps) {
  return (
    <Flex
      h="100vh"
      direction="column"
      alignItems="center"
      justifyContent="center"
      mx="4"
    >
      <Heading as="h1" color="green.800" mb="2rem">
        Welcome to the Kingdom
      </Heading>
      {children}
    </Flex>
  );
}
