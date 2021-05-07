import * as React from 'react';
import { Flex } from '@chakra-ui/react';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex
      h="100vh"
      direction="column"
      alignItems="center"
      justifyContent="center"
      mx="4"
    >
      <main>{children}</main>
    </Flex>
  );
}
