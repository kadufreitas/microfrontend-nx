import { CustomTheme } from '../types';

export const defaultTheme: CustomTheme = {
  colors: {
    primary: '#003b5d',
    primaryDark: '#1565c0',
    textPrimary: '#212121',
    textSecondary: '#fff',
    divider: '#e0e0e0',
    background: '#f5f5f5',
    border: '#e0e0e0',
    borderHover: '#888',
    borderFocus: '#0066cc',
    surface: '#ffffff',
    error: '#f44336',
    success: '#4caf50',
  },
  boxShadow: {
    elevation1: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    },
  },
};
