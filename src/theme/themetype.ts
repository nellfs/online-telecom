import { Color } from './color';

export type ThemeType = 'dark' | 'light';

export interface Theme {
  '--primary': Color;
  '--secondary': Color;
  '--background': Color;
  '--white': Color;
  '--text': Color;
  '--dark-text': Color;
  '--dark': Color;
  '--soft-dark': Color;
  '--card-outline': Color;
}
