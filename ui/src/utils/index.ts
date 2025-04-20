// styles/theme-utils.ts
import { CustomTheme } from '../types';

export const color =
  (key: keyof CustomTheme['colors']) =>
  ({ theme }: { theme: CustomTheme }) =>
    theme.colors[key];
export const typography =
  (key: keyof CustomTheme['typography']) =>
  ({ theme }: { theme: CustomTheme }) =>
    theme.typography[key];

export const boxShadow =
  (key: keyof CustomTheme['boxShadow']) =>
  ({ theme }: { theme: CustomTheme }) =>
    theme.boxShadow[key];
