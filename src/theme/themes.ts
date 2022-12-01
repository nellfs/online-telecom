import { Color } from './color';
import { Theme, ThemeType } from './themetype';

export const THEMES: Record<ThemeType, Theme> = {
  light: {
    '--primary': Color.PRIMARY,
    '--secondary': Color.WHITE,
    '--background': Color.WHITE,
    '--white': Color.WHITE,
    '--dark': Color.BROWN,
    '--text': Color.BROWN
  },
  dark: {
    '--primary': Color.PRIMARY,
    '--secondary': Color.WHITE,
    '--background': Color.BROWN,
    '--white': Color.WHITE,
    '--dark': Color.BROWN,
    '--text': Color.WHITE
  }
};
