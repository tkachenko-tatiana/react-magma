import * as React from 'react';
import styled from '../../theme/styled';
import { ThemeContext } from '../../theme/ThemeContext';

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: string;
  size?: number;
  testId?: string;
}

const StyledSpinner = styled.span<SpinnerProps>`
  animation: spinner-border 0.75s linear infinite;
  border: 2px solid ${props => props.color};
  border-right-color: transparent;
  border-radius: 50%;
  display: inline-block;
  height: ${props => props.size}px;
  width: ${props => props.size}px;

  @keyframes spinner-border {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Spinner: React.FunctionComponent<SpinnerProps> = ({
  'aria-label': ariaLabel,
  color,
  size,
  testId,
  ...other
}: SpinnerProps) => {
  const theme = React.useContext(ThemeContext);
  return (
    <StyledSpinner
      {...other}
      aria-label={ariaLabel ? ariaLabel : 'Loading...'}
      color={color ? color : theme.colors.primary}
      data-testid={testId}
      size={size ? size : 15}
    />
  );
};
