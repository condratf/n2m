import { ComponentProps, PropsWithChildren } from "react";

export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export type ButtonType = 'button' | 'tab';

export type ButtonProps = PropsWithChildren<{
  type: ButtonType,
  variant?: ButtonVariant,
} & ComponentProps<'button'>>