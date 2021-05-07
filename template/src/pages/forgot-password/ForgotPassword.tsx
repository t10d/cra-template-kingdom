import { Box, Center, Flex, Text, Link } from '@chakra-ui/layout';
import { AxiosError, AxiosResponse } from 'axios';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import Input from '../../components/Input/Input';
import api from '../../services/api';
import { EMAIL_REGEX } from '../../utils/constants';

type FormInputs = { email: string };

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm<FormInputs>({ mode: 'onChange' });
  const [errorSubmitMessage, setErrorSubmitMessage] = React.useState('');

  const submitAction = ({ email }: FormInputs) => {
    api
      .post('/forgot-password', { email })
      .then(({ data: { msg } }: AxiosResponse<{ msg: string }>) =>
        console.log(msg)
      )
      .catch((error: AxiosError) => {
        if (error?.response?.status === 404) {
          setErrorSubmitMessage('User not found');
        } else {
          setErrorSubmitMessage('Something went wrong');
        }
      });
  };

  return (
    <Flex
      h="100vh"
      direction="column"
      alignItems="center"
      justifyContent="center"
      mx="4"
    >
      <Flex
        data-testid="reset-password"
        direction="column"
        justifyContent="center"
        m={[0, 'auto']}
        w={['auto', 'md']}
        boxShadow="xl"
        p={['7', '10']}
      >
        <Center>
          <Link href="/login" color="green.500" fontWeight="semibold">
            Go to login
          </Link>
        </Center>
        <Center>
          <Text fontSize="xl" fontWeight="semibold">
            Fill the field below with your email
          </Text>
        </Center>

        <form data-testid="reset-form" onSubmit={handleSubmit(submitAction)}>
          <Box mt="5">
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
          <Button
            text="Send"
            data-testid="submit-forgot"
            disabled={!isValid}
            isLoading={isSubmitting}
            type="submit"
            w="100%"
            mt="3"
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
    </Flex>
  );
}
