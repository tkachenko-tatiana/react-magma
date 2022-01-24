import * as React from 'react';
import styled from '../../theme/styled';
import { IconButton } from '../IconButton';
import { Heading } from '../Heading';
import { ArrowBackIcon } from 'react-magma-icons';
import { TypographyVisualStyle } from '../Typography';

import { Modal } from '../Modal';
import { I18nContext } from '../../i18n';
import { ThemeContext } from '../../theme/ThemeContext';
import { ButtonSize, ButtonVariant } from '../Button';

interface HelperInformationProps {
  isOpen?: boolean;
  onClose?: (event?: React.SyntheticEvent) => void;
}

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
`;

const Item = styled.li`
  display: flex;
  list-style: none;
  margin-bottom: 12px;
  font-size: ${props => props.theme.typeScale.size02.fontSize};
  line-height: ${props => props.theme.typeScale.size02.lineHeight};
  align-items: center;
  span {
    flex: 0 0 100px;
    overflow: hidden;
    line-height: 28px;
    min-height: 36px;
    height: max-content;
    text-align: center;
  }
  div {
    flex: 1;
  }
`;

const KeyboardShortcutButtonWrapper = styled.span`
  background: rgb(242, 242, 242);
  font-family: monospace;
  font-size: ${props => props.theme.typeScale.size02.fontSize};
  letter-spacing: ${props => props.theme.typeScale.size02.letterSpacing};
  line-height: ${props => props.theme.typeScale.size02.lineHeight};
  margin-right: ${props => props.theme.spaceScale.spacing03};
  padding: ${props => props.theme.spaceScale.spacing02}
    ${props => props.theme.spaceScale.spacing04};
  text-transform: uppercase;
`;

export const HelperInformation: React.FunctionComponent<HelperInformationProps> =
  (props: HelperInformationProps) => {
    const i18n = React.useContext(I18nContext);
    const theme = React.useContext(ThemeContext);

    return (
      <Modal
        closeButtonSize="medium"
        containerStyle={{
          position: 'relative',
          padding: '0',
          margin: '0',
          marginBottom: '-408px',
        }}
        contentStyle={{
          border: 'none',
          boxShadow: 'none',
          margin: '0',
        }}
        hiddenBackground
        onClose={props.onClose}
        isOpen={props.isOpen}
        unmountOnExit
      >
        <IconButton
          icon={<ArrowBackIcon />}
          onClick={props.onClose}
          size={ButtonSize.small}
          style={{ margin: '-24px 0 0 -12px' }}
          variant={ButtonVariant.link}
        >
          Back to Calendar
        </IconButton>
        <Heading level={2} visualStyle={TypographyVisualStyle.headingXSmall}>
          {i18n.datePicker.helpModal.header}
        </Heading>
        <List id="DayPickerKeyboardShortcuts_description">
          <Item theme={theme}>
            <KeyboardShortcutButtonWrapper
              aria-label={i18n.datePicker.helpModal.enter.ariaLabel}
              role="img"
              theme={theme}
            >
              ↵
            </KeyboardShortcutButtonWrapper>
            <div>{i18n.datePicker.helpModal.enter.explanation}</div>
          </Item>
          <Item theme={theme}>
            <KeyboardShortcutButtonWrapper
              role="img"
              theme={theme}
              aria-label={
                i18n.datePicker.helpModal.rightAndLeftArrowKeys.ariaLabel
              }
            >
              ←/→
            </KeyboardShortcutButtonWrapper>
            <div>
              {i18n.datePicker.helpModal.rightAndLeftArrowKeys.explanation}
            </div>
          </Item>
          <Item theme={theme}>
            <KeyboardShortcutButtonWrapper
              role="img"
              theme={theme}
              aria-label={
                i18n.datePicker.helpModal.upAndDownArrowKeys.ariaLabel
              }
            >
              ↑/↓
            </KeyboardShortcutButtonWrapper>
            <div>
              {i18n.datePicker.helpModal.upAndDownArrowKeys.explanation}
            </div>
          </Item>
          <Item theme={theme}>
            <KeyboardShortcutButtonWrapper
              role="img"
              theme={theme}
              aria-label={
                i18n.datePicker.helpModal.pageUpAndPageDownKeys.ariaLabel
              }
            >
              {i18n.datePicker.helpModal.pageUpAndPageDownKeys.displayValue}
            </KeyboardShortcutButtonWrapper>
            <div>
              {i18n.datePicker.helpModal.pageUpAndPageDownKeys.explanation}
            </div>
          </Item>
          <Item theme={theme}>
            <KeyboardShortcutButtonWrapper
              role="img"
              theme={theme}
              aria-label={i18n.datePicker.helpModal.homeAndEndKeys.ariaLabel}
            >
              {i18n.datePicker.helpModal.homeAndEndKeys.displayValue}
            </KeyboardShortcutButtonWrapper>
            <div>{i18n.datePicker.helpModal.homeAndEndKeys.explanation}</div>
          </Item>
          <Item theme={theme}>
            <KeyboardShortcutButtonWrapper
              role="img"
              theme={theme}
              aria-label={i18n.datePicker.helpModal.escape.ariaLabel}
            >
              {i18n.datePicker.helpModal.escape.displayValue}
            </KeyboardShortcutButtonWrapper>
            <div>{i18n.datePicker.helpModal.escape.explanation}</div>
          </Item>
          <Item theme={theme}>
            <KeyboardShortcutButtonWrapper
              role="img"
              theme={theme}
              aria-label={i18n.datePicker.helpModal.questionMark.ariaLabel}
            >
              ?
            </KeyboardShortcutButtonWrapper>
            <div>{i18n.datePicker.helpModal.questionMark.explanation}</div>
          </Item>
        </List>
      </Modal>
    );
  };
