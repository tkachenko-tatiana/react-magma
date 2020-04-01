import React from 'react';
import styled from '@emotion/styled';
import { TabsContainerContext } from './TabsContainer';

interface TabPanelContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  isInverse?: boolean;
  testId?: string;
}

const StyledContainer = styled.div`
  width: 100%;
`;

export const TabPanelsContainer: React.FunctionComponent<
  TabPanelContainerProps
> = React.forwardRef((props, ref: React.Ref<any>) => {
  const { children, testId, ...rest } = props;

  const { isInverseContainer } = React.useContext(TabsContainerContext);

  return (
    <StyledContainer ref={ref} data-testid={testId} {...rest}>
      {React.Children.map(children, (child: React.ReactElement<any>, index) => {
        const isInverse =
          typeof child.props.isInverse !== 'undefined'
            ? child.props.isInverse
            : typeof props.isInverse !== 'undefined'
            ? props.isInverse
            : isInverseContainer;

        return React.cloneElement(child, { index, isInverse, key: index });
      })}
      {children}
    </StyledContainer>
  );
});
