import React from 'react';
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  gap: ${props => props.gap || '0'};
  width: ${props => props.width || (props.fullWidth ? '100%' : 'auto')};
  height: ${props => props.fullHeight ? '100%' : 'auto'};
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
`;

const Flex = ({
  children,
  direction,
  justify,
  align,
  wrap,
  gap,
  fullWidth,
  fullHeight,
  margin,
  padding,
  width,
  ...props
}) => {
  return (
    <StyledFlex
      direction={direction}
      justify={justify}
      align={align}
      wrap={wrap}
      gap={gap}
      fullWidth={fullWidth}
      fullHeight={fullHeight}
      margin={margin}
      padding={padding}
      width={width}
      {...props}
    >
      {children}
    </StyledFlex>
  );
};

export default Flex;