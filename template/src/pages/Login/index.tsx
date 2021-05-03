import * as React from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Checkbox,
  Flex,
  IconButton,
  Link,
  Text,
} from '@chakra-ui/react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input/index';
import LoginWrapper from '../../components/LoginWrapper/index';
import { useAuth } from '../../context/AuthContext';
import { EMAIL_REGEX } from '../../utils/constants';
import Button from '../../components/Button';

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
    axios
      .post('/api/login', { username: email, password })
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
    <LoginWrapper>
      <Flex
        data-testid="login"
        direction="column"
        justifyContent="center"
        w={['auto', 'md']}
        boxShadow="xl"
        p={['7', '10']}
      >
        <Center>
          <Text fontSize="xl" fontWeight="semibold">
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
          <Box mt="5">
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
                  message: 'The password must have at leat 7 characters.',
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
          <Flex mt="2" mb="10" justifyContent="space-between">
            <Checkbox colorScheme="green">Remember me</Checkbox>
            <Link href="/forgot-password" color="green.500">
              Forgot my password
            </Link>
          </Flex>
          <Button
            text="Login"
            data-testid="submit-login"
            disabled={!isValid}
            isLoading={isSubmitting}
            type="submit"
            w="100%"
            mt="0"
            backgroundColor="green.500"
            color="white"
            _hover={{ backgroundColor: '#276749' }}
          />
          {errorSubmitMessage.length > 0 ? (
            <Box mt="3" textAlign="center">
              <Text color="red.500" fontWeight="semibold">
                {errorSubmitMessage}
              </Text>
            </Box>
          ) : null}
        </form>
      </Flex>
    </LoginWrapper>
  );
}
