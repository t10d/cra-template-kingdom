import * as React from 'react';
import { Box, Button, Center, Flex, IconButton, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import { EMAIL_REGEX } from '../../utils/constants';
import ControlledInput from '../../components/ControlledInput/index';
import LoginWrapper from '../../components/LoginWrapper/index';

type FormInputs = {
  email: string;
  password: string;
};

const VisibilityIcon = ({ isOpen }: { isOpen: boolean }) => (
  <span>{isOpen ? 'hide' : 'show'}</span>
);

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm<FormInputs>({
    mode: 'onChange',
  });
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const { authenticate } = useAuth();

  const submitAction = (data: FormInputs) => {
    // TODO: fetch mirage.js mocked server and handle authentication state
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log({ data });
        return resolve(undefined);
      }, 3000);
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
        p={['4', '10']}
      >
        <Center>
          <Text fontSize="xl" fontWeight="semibold" mb="5">
            Fill the fields below to login
          </Text>
        </Center>
        <form data-testid="login-form" onSubmit={handleSubmit(submitAction)}>
          <Box mb="10">
            <ControlledInput
              aria-label="email"
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
          <Box mb="10">
            <ControlledInput
              type={isPasswordVisible ? 'text' : 'password'}
              aria-label="password"
              label="Password"
              errorMessage={errors?.password?.message}
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
                  icon={<VisibilityIcon isOpen={isPasswordVisible} />}
                />
              }
            />
          </Box>
          <Button
            w="100%"
            disabled={!isValid}
            mt="0"
            isLoading={isSubmitting}
            type="submit"
            data-testid="submit-login"
          >
            Entrar
          </Button>
        </form>
      </Flex>
    </LoginWrapper>
  );
}
