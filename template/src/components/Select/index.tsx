import {
  SelectProps as ChackraSelectProps,
  Select as ChackraSelect,
} from '@chakra-ui/react';

type Option = {
  value: string;
  placeholder: string;
};

type SelectProps = ChackraSelectProps & {
  options: Option[];
};

export default function Select(props: SelectProps) {
  const { options, ...remainingProps } = props;

  return (
    <ChackraSelect {...remainingProps}>
      {options.map((item) => {
        <option value={item.value}>{item.placeholder}</option>;
      })}
    </ChackraSelect>
  );
}
