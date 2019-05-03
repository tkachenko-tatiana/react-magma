import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { ThemeContext } from '../../theme/themeContext';
import { Info2Icon } from '../Icon/types/Info2Icon';
import { CheckIcon } from '../Icon/types/CheckIcon';
import { NotificationIcon } from '../Icon/types/NotificationIcon';
import { BlockedIcon } from '../Icon/types/BlockedIcon';
import { CrossIcon } from '../Icon/types/CrossIcon';
import { Button } from '../Button';
import { ButtonVariant } from '../StyledButton';
import { AlertCore } from 'react-magma-core';

const VARIANT_ICON = {
  info: Info2Icon,
  success: CheckIcon,
  warning: NotificationIcon,
  danger: BlockedIcon
};

export enum AlertVariant {
  info = 'info', //default
  success = 'success',
  warning = 'warning',
  danger = 'danger'
}

export interface AlertProps {
  children: React.ReactNode;
  closeLabel?: string;
  id?: string;
  testId?: string;
  dismissable?: boolean;
  variant?: AlertVariant;
  style?: React.CSSProperties;
  onDismiss?: () => void;
  isExiting?: boolean;
}

export const transitionDuration = 500;

const StyledAlert = styled.div<AlertProps>`
  align-items: stretch;
  background-color: ${props => {
    switch (props.variant) {
      case 'info':
        return props.theme.colors.neutral03;
      case 'success':
        return props.theme.colors.success01;
      case 'warning':
        return props.theme.colors.pop04;
      case 'danger':
        return props.theme.colors.danger;
      default:
        return props.theme.colors.neutral03;
    }
  }};
  border-radius: 3px;
  color: ${props =>
    props.variant === 'warning'
      ? props.theme.colors.neutral02
      : props.theme.colors.neutral08};
  display: flex;
  position: relative;
  padding: 0;
  margin: 10px;
  max-width: 100%;
  animation: ${props =>
    props.isExiting
      ? `fadeout ${transitionDuration}ms`
      : `fadein ${transitionDuration}ms`};

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  a {
    color: inherit;
    font-weight: 600;
    text-decoration: underline;
  }
`;

const AlertContents = styled.div`
  flex-grow: 1;
  padding: 10px 15px 10px 0;
`;

const IconWrapperStyles = css`
  align-items: center;
  display: flex;
  flex-shrink: 0;
`;

const IconWrapper = styled.span`
  ${IconWrapperStyles}
  padding: 0 10px 0 15px;
`;

const DismissableIconWrapper = styled.span<AlertProps>`
  ${IconWrapperStyles}

  svg {
    height: 13px;
    width: 13px;
  }

  button:focus,
  button:hover {
    :not(:disabled):before {
      background: ${props =>
        props.variant === 'warning'
          ? props.theme.colors.neutral02
          : props.theme.colors.neutral08};
      opacity: 0.15;
    }
  }

  button: after {
    display: none;
  }
`;

const DismissButtonStyles = {
  borderRadius: '0 3px 3px 0',
  color: 'inherit',
  height: '100%',
  margin: 0,
  padding: ' 0 15px',
  width: 'auto'
};

function renderIcon(variant = 'info') {
  const Icon = VARIANT_ICON[variant];

  return (
    <IconWrapper>
      <Icon size={20} />
    </IconWrapper>
  );
}

export const Alert: React.FunctionComponent<AlertProps> = ({
  closeLabel,
  id,
  testId,
  variant,
  style,
  children,
  dismissable,
  onDismiss,
  isExiting
}: AlertProps) => (
  <ThemeContext.Consumer>
    {theme =>
      theme && (
        <AlertCore
          transitionDuration={transitionDuration}
          onDismiss={onDismiss}
        >
          {({ handleDismiss, isExiting: coreIsExiting }) => (
            <StyledAlert
              id={id}
              data-testid={testId}
              isExiting={isExiting || coreIsExiting}
              variant={variant}
              style={style}
              theme={theme}
            >
              {renderIcon(variant)}
              <AlertContents>{children}</AlertContents>
              {dismissable && (
                <DismissableIconWrapper variant={variant} theme={theme}>
                  <Button
                    ariaLabel={closeLabel ? closeLabel : 'Close this message'}
                    icon={<CrossIcon />}
                    inverse
                    onClick={handleDismiss}
                    style={DismissButtonStyles}
                    theme={theme}
                    variant={ButtonVariant.link}
                  />
                </DismissableIconWrapper>
              )}
            </StyledAlert>
          )}
        </AlertCore>
      )
    }
  </ThemeContext.Consumer>
);