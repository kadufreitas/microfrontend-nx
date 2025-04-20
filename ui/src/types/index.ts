import { Theme } from '@emotion/react';

export interface CustomTheme extends Theme {
  colors: {
    primary: string;
    primaryDark: string;
    textPrimary: string;
    textSecondary: string;
    divider: string;
    background: string;
    border: string;
    borderFocus: string;
    borderHover: string;
    surface: string;
    error: string;
    success: string;
  };
  boxShadow: {
    elevation1: string;
  };
  typography: {
    fontFamily: string;
    fontSize: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string>;
  };
}
