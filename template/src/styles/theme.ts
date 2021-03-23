import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import {
  BREAKPOINT_LG,
  BREAKPOINT_SM,
  BREAKPOINT_MD,
  BREAKPOINT_XL,
} from '../utils/constants';

const Button = {
  baseStyle: {
    fontWeight: 600,
    width: '100%',
    borderRadius: '0.8rem',
    lineHeight: '3rem',
  },
  sizes: {
    md: {
      fontSize: ['1.75rem', '2rem'],
      padding: '2.5rem 3.2rem',
    },
  },
  variants: {
    outline: {
      bg: 'transparent',
      border: '1px solid',
      borderColor: 'purple.medium',
      color: 'purple.medium',
      boxShadow: 'none',
      '&:hover': {
        color: 'purple.light',
        borderColor: 'purple.light',
        bg: 'transparent',
      },
      '&:focus': {
        color: 'purple.dark',
        borderColor: 'purple.dark',
        bg: 'transparent',
      },
      '&:disabled': {
        color: 'gray.medium',
        borderColor: 'gray.medium',
      },
      '&.chakra-button:hover[disabled]': {
        color: 'gray.medium',
      },
    },
    solid: {
      bg: 'purple.medium',
      color: 'white',
      boxShadow: '0px 16px 28px -4px rgba(113, 87, 217, 0.24)',
      '&:hover': {
        bg: 'purple.light',
        boxShadow: '0px 16px 32px -4px rgba(113, 87, 217, 0.48)',
      },
      '&:focus, &[data-active]': {
        bg: 'purple.dark',
      },
      '&:disabled': {
        boxShadow: 'none',
        bg: 'gray.medium',
      },
      '&.chakra-button:hover[disabled]': {
        boxShadow: 'none',
        bg: 'gray.medium',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
};

const Heading = {
  baseStyle: {
    fontFamily: "'Barlow', sans-serif",
  },
};

const Checkbox = {
  baseStyle: {
    borderColor: 'blue.light',
    '& .chakra-checkbox__control': {
      borderRadius: '0.3rem',
      borderWidth: '1px',
    },
  },
  sizes: {
    sm: {
      '& .chakra-checkbox__control': {
        width: '1.3rem',
        height: '1.3rem',
      },
      '& .chakra-checkbox__label': {
        fontSize: '1rem',
      },
    },
    md: {
      '& .chakra-checkbox__control': {
        width: '1.5rem',
        height: '1.5rem',
        '& svg': {
          fontSize: '0.875rem',
        },
      },
      '& .chakra-checkbox__label': {
        fontSize: '1.125rem',
      },
    },
    lg: {
      '& .chakra-checkbox__control': {
        width: '1.75rem',
        height: '1.75rem',
        '& svg': {
          fontSize: '1rem',
        },
      },
      '& .chakra-checkbox__label': {
        fontSize: '1.25rem',
      },
    },
  },
  defaultProps: {
    size: 'lg',
  },
};

const Link = {
  baseStyle: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
};

export default extendTheme({
  breakpoints: createBreakpoints({
    sm: BREAKPOINT_SM,
    md: BREAKPOINT_MD,
    lg: BREAKPOINT_LG,
    xl: BREAKPOINT_XL,
  }),
  components: {
    Button,
    Heading,
    Checkbox,
    Link,
  },
  styles: {
    global: (props) => ({
      'html, body': {
        fontFamily: "'Barlow', sans-serif",
        fontSize: '62.5%',
        lineHeight: 'tall',
        backgroundColor: props.theme.colors.gray.light,
        overflowX: 'hidden',
        color: 'black',
      },
      '*, *::before, &::after': {
        boxSizing: 'border-box',
      },
      'span.chakra-alert__icon': {
        width: '1.5rem',
        height: '2.4rem',
      },
      'div.chakra-alert__title, div.chakra-alert__desc': {
        fontSize: '1.5rem',
        lineHeight: '2.5rem',
      },
    }),
  },
  colors: {
    background: '#E5E5E5',
    black: '#34334B',
    gray: {
      dark: '#949494',
      medium: '#D5D5D5',
      light: '#F6F7FB',
    },
    purple: {
      light: '#8364FD',
      medium: '#7157D9',
      dark: '#573CC5',
    },
    blue: {
      light: '#4580E6',
      medium: '#106BA3',
    },
    green: {
      light: '#9BBF30',
    },
    success: '#15B371',
    error: '#F55656',
    alert: '#F29D49',
  },
});
