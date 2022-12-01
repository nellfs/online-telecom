import { Color } from './color';
import { Theme, ThemeType } from './themetype';

export const THEMES: Record<ThemeType, Theme> = {
  light: {
    '--primary': Color.VIOLET,
    '--secondary': Color.DARK_VIOLET,
    '--background': Color.WHITE,
    '--white': Color.WHITE
  },
  dark: {
    '--primary': Color.VIOLET,
    '--secondary': Color.WHITE,
    '--background': Color.BROWN,
    '--white': Color.WHITE
  }
};
