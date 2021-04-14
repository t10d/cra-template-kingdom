import * as React from 'react';
import {
  InputGroup,
  InputRightElement,
  Input,
  InputProps,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface ControlledInputProps extends InputProps {
  label: string;
  icon?: React.ReactNode;
  errorMessage?: string;
  children?: React.ReactNode;
  register: UseFormRegisterReturn;
}

export default function ControlledInput(props: ControlledInputProps) {
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
        <Input {...register} {...remainingProps}></Input>
        {icon && (
          <InputRightElement top={[8, '2rem']} right={2}>
            {icon}
          </InputRightElement>
        )}
        {children}
      </InputGroup>
      <FormErrorMessage color="red.500">{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}
