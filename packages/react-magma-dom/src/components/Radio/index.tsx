import * as React from 'react';
import {
  DisplayInputStyles,
  DisplayInputActiveStyles,
  DisplayInputFocusStyles
} from '../SelectionControls/InputStyles';
import { HiddenStyles } from '../UtilityStyles';
import { RadioContext } from '../RadioGroup';
import { StyledLabel } from '../SelectionControls/StyledLabel';
import { StyledContainer } from '../SelectionControls/StyledContainer';
import styled from '@emotion/styled';
import { magma } from '../../theme/magma';
import 'focus-visible';

export interface RadioProps {
  color?: string;
  disabled?: boolean;
  id: string;
  inputStyle?: React.CSSProperties;
  inverse?: boolean;
  labelStyle?: React.CSSProperties;
  labelText: string;
  required?: boolean;
  style?: React.CSSProperties;
  textVisuallyHidden?: boolean;
  value?: string;
}

const HiddenLabelText = styled.span`
  ${HiddenStyles};
`;

const HiddenInput = styled.input<{ indeterminate?: boolean }>`
  ${HiddenStyles};
`;

const StyledFakeInput = styled.span<{
  inverse: boolean;
  disabled: boolean;
  color: string;
}>`
  ${DisplayInputStyles};
  background: ${props => {
    if (props.inverse) {
      return 'none';
    }
    if (props.disabled) {
      return magma.colors.neutral06;
    }
    return magma.colors.neutral08;
  }};
  border-color: ${props => {
    if (props.inverse) {
      if (props.disabled) {
        return magma.colors.disabledInverseText;
      }
      return magma.colors.neutral08;
    }
    if (props.disabled) {
      return magma.colors.neutral05;
    }
    return magma.colors.neutral03;
  }};
  border-radius: 100%;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  ${HiddenInput}:checked:not(:disabled) + label & {
    background: ${props => {
      if (props.inverse) {
        return magma.colors.neutral08;
      }
    }};
    border-color: ${props => {
      if (props.inverse) {
        return magma.colors.neutral08;
      }
      if (props.disabled) {
        return magma.colors.disabledInverseText;
      }
      return props.color;
    }};
  }

  ${HiddenInput}:focus.focus-visible + label & {
    // focus state
    &:before {
      ${DisplayInputFocusStyles};
    }
  }

  &:after {
    // active state
    background: ${props =>
      props.inverse ? magma.colors.neutral08 : props.color};
  }

  ${HiddenInput}:not(:disabled):active + label & {
    &:after {
      ${DisplayInputActiveStyles}
    }
  }
`;

const SelectedIcon = styled.span<{ color: string }>`
  background: ${props => props.color};
  border-radius: 100%;
  display: none;
  height: 10px;
  width: 10px;

  ${HiddenInput}:checked + label & {
    display: block;
  }
`;

export const Radio: React.FunctionComponent<RadioProps> = React.forwardRef(
  (
    {
      color,
      disabled,
      id,
      inputStyle,
      inverse,
      labelStyle,
      labelText,
      required,
      style,
      textVisuallyHidden,
      value
    }: RadioProps,
    ref: any
  ): JSX.Element => (
    <RadioContext.Consumer>
      {context =>
        context && (
          <StyledContainer style={style}>
            <HiddenInput
              ref={ref}
              checked={context.selectedValue === value}
              id={id}
              disabled={disabled}
              name={context.name}
              required={required}
              type="radio"
              value={value}
              onBlur={context.onBlur}
              onChange={context.onChange}
              onFocus={context.onFocus}
            />
            <StyledLabel htmlFor={id} inverse={inverse} style={labelStyle}>
              <StyledFakeInput
                color={color ? color : magma.colors.primary}
                disabled={disabled}
                inverse={inverse}
                style={inputStyle}
              >
                <SelectedIcon color={color ? color : magma.colors.primary} />
              </StyledFakeInput>
              {textVisuallyHidden ? (
                <HiddenLabelText>{labelText}</HiddenLabelText>
              ) : (
                labelText
              )}
            </StyledLabel>
          </StyledContainer>
        )
      }
    </RadioContext.Consumer>
  )
);