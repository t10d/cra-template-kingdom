import * as React from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Link,
  Text,
} from '@chakra-ui/react';
import { AxiosError, AxiosResponse } from 'axios';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input/Input';
import Layout from '../../components/Layout/Layout';
import { useAuth } from '../../contexts/AuthContext';
import { EMAIL_REGEX } from '../../utils/constants';
import api from '../../services/api';

type FormInputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm<FormInputs>({
    mode: 'onChange',
  });
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [errorSubmitMessage, setErrorSubmitMessage] = React.useState('');
  const { authenticate } = useAuth();

  const submitAction = ({ email, password }: FormInputs) => {
    api
      .post('/login', { username: email, password })
      .then(({ data: { token } }: AxiosResponse<{ token: string }>) => {
        authenticate({ token });
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === 401) {
          setErrorSubmitMessage('Email or password are incorrect. Try again.');
        } else {
          setErrorSubmitMessage('Something wrong happened.');
        }
      });
  };

  const handlePasswordVisibility = () =>
    setIsPasswordVisible((prevState) => !prevState);

  return (
    <Layout>
      <Heading as="h1" mb="4rem" fontSize="5xl" textAlign="center">
        Sign in to your account
      </Heading>
      <Flex
        data-testid="login"
        direction="column"
        justifyContent="center"
        w={['auto', '2xl']}
        boxShadow="xl"
        p={['7', '10']}
        bg="gray.50"
        borderRadius="md"
      >
        <Center>
          <Text fontSize="3xl" fontWeight="semibold">
            Fill the fields below to login
          </Text>
        </Center>
        <form data-testid="login-form" onSubmit={handleSubmit(submitAction)}>
          <Box mt="10">
            <Input
              aria-label="email"
              focusBorderColor="green.600"
              errorBorderColor="red.500"
              label="Email address"
              errorMessage={errors?.email?.message}
              register={register('email', {
                required: 'Email must be provided.',
                pattern: {
                  value: EMAIL_REGEX,
                  message: 'Insert a valid email address.',
                },
              })}
            />
          </Box>
          <Box mt="10">
            <Input
              type={isPasswordVisible ? 'text' : 'password'}
              aria-label="password"
              label="Password"
              errorMessage={errors?.password?.message}
              focusBorderColor="green.600"
              errorBorderColor="red.500"
              register={register('password', {
                required: 'Password must be provided.',
                minLength: {
                  value: 7,
                  message: 'The password must have at least 7 characters.',
                },
              })}
              icon={
                <IconButton
                  variant="outline"
                  onClick={handlePasswordVisibility}
                  colorScheme="gray"
                  borderRadius="50%"
                  border="none"
                  aria-label="Visibilidade"
                  fontSize="20px"
                  icon={!isPasswordVisible ? <ViewIcon /> : <ViewOffIcon />}
                />
              }
            />
          </Box>
          <Text mt="4" mb="10" fontSize="lg" justifyContent="space-between">
            <Link
              as={RouterLink}
              to="/forgot-password"
              fontSize="xl"
              color="green.500"
            >
              Forgot my password
            </Link>
          </Text>
          <Button
            data-testid="submit-login"
            disabled={!isValid}
            isLoading={isSubmitting}
            type="submit"
            w="100%"
            p={8}
            fontSize="2xl"
            backgroundColor="green.500"
            color="white"
            _hover={{ backgroundColor: '#276749' }}
          >
            Login
          </Button>
          {errorSubmitMessage.length > 0 ? (
            <Box mt="3" textAlign="center">
              <Text color="red.500" fontWeight="semibold">
                {errorSubmitMessage}
              </Text>
            </Box>
          ) : null}
        </form>
      </Flex>
    </Layout>
  );
}
