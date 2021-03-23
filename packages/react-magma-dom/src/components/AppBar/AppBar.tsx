import * as React from 'react';
import styled from '../../theme/styled';
import { ThemeContext } from '../../theme/ThemeContext';
import { ThemeInterface } from '../../theme/magma';

/**
 * @children required
 */
export interface AppBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * If true, the component will render at a shorter height with less padding
   * @default false
   **/
  isCompact?: boolean;
  isInverse?: boolean;
  position?: AppBarPosition;
  testId?: string;
  /**
   * @internal
   */
  theme?: ThemeInterface;
}

export enum AppBarPosition {
  absolute = 'absolute',
  fixed = 'fixed',
  relative = 'relative',
  static = 'static', // default
  sticky = 'sticky',
}

const StyledHeader = styled.header<{
  isCompact?: boolean;
  isInverse?: boolean;
  position: AppBarPosition;
}>`
  align-items: center;
  background: ${props =>
    props.isInverse
      ? props.theme.appBar.inverse.backgroundColor
      : props.theme.appBar.backgroundColor};
  border-bottom: 1px solid ${props => props.theme.colors.neutral06};
  box-shadow: ${props =>
    props.position === AppBarPosition.sticky ||
    props.position === AppBarPosition.fixed
      ? '0 2px 3px 0 rgb(0 0 0 / 37%)'
      : '0 0 0'};
  color: ${props =>
    props.isInverse
      ? props.theme.appBar.inverse.textColor
      : props.theme.appBar.textColor};
  display: flex;
  height: ${props =>
    props.isCompact
      ? props.theme.appBar.compact.height
      : props.theme.appBar.height};
  left: 0;
  padding: ${props =>
    props.isCompact
      ? props.theme.appBar.compact.padding
      : props.theme.appBar.padding};
  position: ${props => props.position};
  right: 0;
  top: 0;
`;

export const AppBar = React.forwardRef<HTMLDivElement, AppBarProps>(
  (props, ref) => {
    const {
      children,
      position = AppBarPosition.static,
      testId,
      ...other
    } = props;
    const theme = React.useContext(ThemeContext);

    return (
      <StyledHeader
        {...other}
        data-testid={testId}
        position={position}
        ref={ref}
        theme={theme}
      >
        {children}
      </StyledHeader>
    );
  }
);
