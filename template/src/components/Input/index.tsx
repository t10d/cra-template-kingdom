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
        <FormLabel>{label}</FormLabel>
        <ChakraInput {...register} {...remainingProps} />
        {icon ? (
          <InputRightElement top={[8, '2rem']} right={2}>
            {icon}
          </InputRightElement>
        ) : null}
        {children}
      </InputGroup>
      <FormErrorMessage color="red.500">{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}
