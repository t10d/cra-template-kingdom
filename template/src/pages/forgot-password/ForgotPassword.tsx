import * as React from 'react';
import {
  Box,
  Center,
  Button,
  Flex,
  Text,
  Link,
  Heading,
} from '@chakra-ui/react';
import { AxiosError, AxiosResponse } from 'axios';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input/Input';
import Layout from '../../components/Layout/Layout';
import api from '../../services/api';
import { EMAIL_REGEX } from '../../utils/constants';

type FormInputs = { email: string };

export default function ForgotPassword() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm<FormInputs>({ mode: 'onChange' });
  const [errorSubmitMessage, setErrorSubmitMessage] = React.useState('');

  const submitAction = ({ email }: FormInputs) => {
    api
      .post('/forgot-password', { email })
      .then(({ data: { msg } }: AxiosResponse<{ msg: string }>) => {
        if (msg === 'Email sent.') {
          history.push(`/reset-password/${email}`);
        }
      })
      .catch((error: AxiosError) => {
        if (error?.response?.status === 404) {
          setErrorSubmitMessage('User not found');
        } else {
          setErrorSubmitMessage('Something went wrong');
        }
      });
  };

  return (
    <Layout>
      <Heading as="h1" mb="4rem" fontSize="5xl" textAlign="center">
        Recover your account
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
            Fill the field below with your email
          </Text>
        </Center>
        <form data-testid="reset-form" onSubmit={handleSubmit(submitAction)}>
          <Box mt="10">
            <Input
              aria-label="email"
              focusBorderColor="green.600"
              errorBorderColor="red.500"
              label="Email"
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
          <Button
            data-testid="submit-forgot"
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
            Send
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
