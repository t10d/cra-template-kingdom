import * as React from 'react';
import { Box, Button, Center, Heading } from '@chakra-ui/react';
import { useAuth } from '../../contexts/AuthContext';

function User() {
  const { logout } = useAuth();
  return (
    <Box mt={10} data-testid="user">
      <Heading as="h1" mb="2rem" fontSize="5xl" textAlign="center">
        User
      </Heading>
      <Center>
        <Button
          bg="gray.700"
          color="white"
          fontSize="2xl"
          p={8}
          onClick={() => logout()}
          _hover={{
            bg: 'gray.800',
          }}
        >
          logout
        </Button>
      </Center>
    </Box>
  );
}

export default User;
