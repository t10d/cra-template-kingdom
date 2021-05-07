import * as React from 'react';
import {
  InputGroup,
  InputRightElement,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';

type InputProps = ChakraInputProps & {
  label: string;
  icon?: React.ReactNode;
  errorMessage?: string;
  children?: React.ReactNode;
  register?: UseFormRegisterReturn;
};

export default function Input(props: InputProps) {
  const {
    label,
    icon,
    errorMessage,
    children,
    register,
    ...remainingProps
  } = props;

  return (
    <FormControl isInvalid={!!errorMessage}>
      <InputGroup flexDirection="column">
        <FormLabel fontSize="xl">{label}</FormLabel>
        <ChakraInput fontSize="2xl" py={8} {...register} {...remainingProps} />
        {icon ? (
          <InputRightElement top="3.5rem" right={3}>
            {icon}
          </InputRightElement>
        ) : null}
        {children}
      </InputGroup>
      <FormErrorMessage fontSize="lg" color="red.500">
        {errorMessage}
      </FormErrorMessage>
    </FormControl>
  );
}
