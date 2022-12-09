import { Color } from './color';
import { Theme, ThemeType } from './themetype';

export const THEMES: Record<ThemeType, Theme> = {
  light: {
    '--primary': Color.PRIMARY,
    '--secondary': Color.WHITE,
    '--background': Color.WHITE,
    '--white': Color.WHITE,
    '--dark': Color.BROWN,
    '--text': Color.BROWN,
    '--dark-text': Color.GRAY,
    '--soft-dark': Color.SOFT_LIGHT,
    '--card-outline': Color.ICE
  },
  dark: {
    '--primary': Color.PRIMARY,
    '--secondary': Color.BROWN,
    '--background': Color.BROWN,
    '--white': Color.WHITE,
    '--dark': Color.BROWN,
    '--text': Color.WHITE,
    '--dark-text': Color.ICE,
    '--soft-dark': Color.SOFT_DARK,
    '--card-outline': Color.SOFT_DARK
  }
};
