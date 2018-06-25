// @flow

import React from 'react';

import { createStyledTag, createTheme } from 'utils';

type TextProps = {|
  /** text to display in the component */
  children?: string | number,
  /** another way to set displayed text */
  text?: string | number,
  /** possible text colors */
  color?: 'primary' | 'secondary' | 'red' | 'green' | 'blue',
  /** disabled text state*/
  disabled?: boolean,
  /** set style to bold */
  bold?: boolean,
  /** possible sizes */
  size?: PropSizes,
  /** text align */
  align?: 'left' | 'center' | 'right',
|};

const name = 'text';

const theme = createTheme(name, (colors: *): * => ({
  modifiers: {
    color: {
      primary: {
        color: colors.PRIMARY_TEXT_COLOR,
      },
      secondary: {
        color: colors.SECONDARY_TEXT_COLOR,
      },
      red: {
        color: colors.RED,
      },
      green: {
        color: colors.GREEN,
      },
      blue: {
        color: colors.BLUE,
      },
    },

    align: {
      left: { textAlign: 'left' },
      right: { textAlign: 'right' },
      center: { textAlign: 'center' },
    },

    disabled: {
      color: colors.DISABLED_TEXT_COLOR,
    },

    bold: {
      fontWeight: 600,
    },

    size: {
      xs: {
        fontSize: '1rem',
      },
      sm: {
        fontSize: '1.2rem',
      },
      md: {
        fontSize: '1.4rem',
      },
      lg: {
        fontSize: '1.6rem',
      },
      xl: {
        fontSize: '1.8rem',
      },
    },
  },
  defaults: {
    color: 'primary',
    size: 'md',
    bold: false,
  },
}));

const StyledTag = createStyledTag(name, {
  fontFamily: 'Poppins',
  fontWeight: 400,
  fontSize: '1.4rem',
  lineHeight: 1.4,
  margin: 0,
});

function Text({
  text,
  children,
  ...rest
  }: TextProps) {
  return <StyledTag { ...rest } tagName="span">{ children || text }</StyledTag>;
}

Text.defaultProps = {
  ...theme[name].defaults,
};

export { Text, theme };
