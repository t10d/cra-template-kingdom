import * as React from 'react';
import { Flex, Heading, Link, Text } from '@chakra-ui/layout';

type LoginWrapperProps = {
  children: React.ReactNode;
};

export default function LoginWrapper({ children }: LoginWrapperProps) {
  return (
    <Flex
      h="100vh"
      direction="column"
      alignItems="center"
      justifyContent="center"
      mx="4"
    >
      <Heading as="h1" mb="2rem">
        Sign in to your account
      </Heading>
      <Flex fontSize="lg">
        <Text>
          Or{' '}
          <Link href="" color="green.500" fontWeight="bold">
            create your account for free
          </Link>
        </Text>
      </Flex>
      {children}
    </Flex>
  );
}
