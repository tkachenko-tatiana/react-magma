/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core';
import {
  buildActiveBackground,
  buildActiveColor,
  buildAfterBackground,
  buildAfterTopPosition,
  buildButtonBaseHeight,
  buildButtonBorderRadius,
  buildButtonFontSize,
  buildButtonIconOnlyHeight,
  buildButtonIconOnlyWidth,
  buildButtonPadding,
  buildBorderColor,
  buildButtonBackground,
  buildColor,
  buildFocusBackground,
  buildFocusColor
} from './styles';
import { ThemeContext } from '../../theme/ThemeContext';
import { ButtonProps } from '../Button';

interface StyledButtonProps extends ButtonProps {
  as?: any;
  href?: string;
  iconOnly?: boolean;
  ref?: any;
  to?: string;
}

export const buttonStyles = props => css`
  align-items: center;
  border-radius: ${buildButtonBorderRadius(props)};
  cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
  display: ${props.isFullWidth ? 'flex' : 'inline-flex'};
  flex-shrink: 0;
  font-family: ${props.theme.bodyFont};
  justify-content: center;
  line-height: 1;
  margin: ${props.isFullWidth ? '5px 0' : '5px'};
  min-width: 5.625em;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: ${props.textTransform};
  transition: background 0.35s, color 0.35s;
  vertical-align: middle;
  touch-action: manipulation;
  white-space: nowrap;
  font-size: ${buildButtonFontSize(props)};
  font-weight: 600;
  height: ${props.iconOnly
    ? buildButtonIconOnlyHeight(props)
    : buildButtonBaseHeight(props)};
  padding: ${buildButtonPadding(props)};
  width: ${props.iconOnly
    ? buildButtonIconOnlyWidth(props)
    : props.isFullWidth
    ? '100%'
    : 'auto'};
  background: ${buildButtonBackground(props)};
  border: ${props.variant === 'outline' ||
  (props.variant === 'solid' && props.color === 'secondary' && !props.isInverse)
    ? '2px solid'
    : '0'};
  border-color: ${buildBorderColor(props)};
  color: ${buildColor(props)};

  &:not(:disabled) {
    &:focus {
      outline: 2px dotted
        ${props.isInverse
          ? props.theme.colors.focusInverse
          : props.theme.colors.focus};
      outline-offset: 3px;
    }

    &:hover,
    &:focus {
      background: ${buildFocusBackground(props)};
      color: ${buildFocusColor(props)};
    }

    &:after {
      border-radius: 50%;
      content: '';
      height: 32px;
      left: 50%;
      opacity: 0;
      position: absolute;
      padding: 50%;
      top: ${buildAfterTopPosition(props)};
      transform: translate(-50%, -50%) scale(1);
      transition: opacity 1s, transform 0.5s;
      width: 32px;
      background: ${buildAfterBackground(props)};
    }

    &:active {
      background: ${buildActiveBackground(props)};
      color: ${buildActiveColor(props)};
      &:after {
        opacity: 0.4;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0s;
      }
    }
  }

  ${props.iconOnly &&
    css`
      display: inline-flex;
      justify-content: center;
      line-height: 1;
      min-width: 0;
      padding: 0;
    `}
`;

export const StyledButton: React.FunctionComponent<
  StyledButtonProps
> = React.forwardRef((props, ref: any) => {
  const {
    isFullWidth,
    children,
    iconOnly,
    testId,
    isInverse,
    color,
    shape,
    size,
    textTransform,
    variant,
    ...other
  } = props;

  const theme = React.useContext(ThemeContext);

  return (
    <button
      css={buttonStyles({ ...props, theme })}
      {...other}
      data-testid={testId}
      ref={ref}
    >
      {children}
    </button>
  );
});
