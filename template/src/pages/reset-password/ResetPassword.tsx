import * as React from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Flex,
  Text,
  Link,
  Button,
  IconButton,
  Heading,
} from '@chakra-ui/react';
import { AxiosError, AxiosResponse } from 'axios';
import { useForm } from 'react-hook-form';
import { useParams, Link as RouterLink } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Layout from '../../components/Layout/Layout';
import api from '../../services/api';

type FormInputs = { password: string; confirmPassword: string };

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, errors, isValid },
  } = useForm<FormInputs>({ mode: 'onChange' });
  const { id } = useParams<{ id: string }>();

  const [errorSubmitMessage, setErrorSubmitMessage] = React.useState('');
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isConfirmationVisible, setConfirmationVisible] = React.useState(false);

  const submitAction = (payload: FormInputs) => {
    const { password } = payload;
    api
      .post(`/reset-password/${id}`, { password })
      .then(({ data: { msg } }: AxiosResponse<{ msg: string }>) =>
        window.alert(msg)
      )
      .catch((error: AxiosError) => {
        if (error?.response?.status === 404) {
          setErrorSubmitMessage('User not found');
        } else {
          setErrorSubmitMessage('Something went wrong');
        }
      });
  };

  const toggleVisibility = (type: 'password' | 'confirmation') => {
    if (type === 'password') {
      setIsPasswordVisible((prevState) => !prevState);
    } else {
      setConfirmationVisible((prevState) => !prevState);
    }
  };

  return (
    <Layout>
      <Heading as="h1" mb="4rem" fontSize="5xl" textAlign="center">
        Reset your password
      </Heading>
      <Flex
        data-testid="reset-password"
        direction="column"
        justifyContent="center"
        m={[0, 'auto']}
        w={['auto', '2xl']}
        boxShadow="xl"
        p={['7', '10']}
        bg="gray.50"
        borderRadius="md"
      >
        <Center>
          <Link
            as={RouterLink}
            to="/login"
            color="green.500"
            fontWeight="semibold"
          >
            Go to login
          </Link>
        </Center>
        <Center>
          <Text fontSize="3xl" fontWeight="semibold">
            Fill the form to reset your password
          </Text>
        </Center>
        <form data-testid="reset-form" onSubmit={handleSubmit(submitAction)}>
          <Box mt="10">
            <Input
              aria-label="password"
              focusBorderColor="green.600"
              errorBorderColor="red.500"
              type={isPasswordVisible ? 'text' : 'password'}
              label="New password"
              errorMessage={errors?.password?.message}
              register={register('password', {
                required: 'New password must be provided.',
                minLength: {
                  value: 7,
                  message: 'The password must have at leat 7 characters.',
                },
              })}
              icon={
                <IconButton
                  variant="outline"
                  onClick={() => toggleVisibility('password')}
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
          <Box mt="5">
            <Input
              aria-label="confirmation"
              focusBorderColor="green.600"
              errorBorderColor="red.500"
              type={isConfirmationVisible ? 'text' : 'password'}
              label="Confirm password"
              errorMessage={errors?.confirmPassword?.message}
              register={register('confirmPassword', {
                required: 'Password confirmation must be provided.',
                validate: (value) => value === getValues('password'),
              })}
              icon={
                <IconButton
                  variant="outline"
                  onClick={() => toggleVisibility('confirmation')}
                  colorScheme="gray"
                  borderRadius="50%"
                  border="none"
                  aria-label="Visibilidade"
                  fontSize="20px"
                  icon={!isConfirmationVisible ? <ViewIcon /> : <ViewOffIcon />}
                />
              }
            />
          </Box>
          <Button
            data-testid="submit-reset"
            disabled={!isValid}
            isLoading={isSubmitting}
            type="submit"
            w="100%"
            mt="10"
            p={8}
            fontSize="2xl"
            backgroundColor="green.500"
            color="white"
            _hover={{ backgroundColor: '#276749' }}
          >
            Change password
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
