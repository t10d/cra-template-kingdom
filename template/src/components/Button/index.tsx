import {
  ButtonProps as ChackraButtonProps,
  Button as ChackraButton,
} from '@chakra-ui/button';

type ButtonProps = ChackraButtonProps & {
  text: string;
};

export default function Button(props: ButtonProps) {
  const { text, ...remainingProps } = props;

  return <ChackraButton {...remainingProps}>{text}</ChackraButton>;
}
