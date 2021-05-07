import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import {
  BREAKPOINT_LG,
  BREAKPOINT_SM,
  BREAKPOINT_MD,
  BREAKPOINT_XL,
  BREAKPOINT_2XL,
} from '../utils/constants';

export default extendTheme({
  breakpoints: createBreakpoints({
    sm: BREAKPOINT_SM,
    md: BREAKPOINT_MD,
    lg: BREAKPOINT_LG,
    xl: BREAKPOINT_XL,
    '2xl': BREAKPOINT_2XL,
  }),
  styles: {
    global: (props) => ({
      html: {
        fontSize: '62.5%',
        fontFamily: "'Inter', sans-serif",
      },
      body: {
        fontSize: '1.6rem',
        lineHeight: 'tall',
        backgroundColor: props.theme.colors.gray[100],
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
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `'Inter', SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },
});
