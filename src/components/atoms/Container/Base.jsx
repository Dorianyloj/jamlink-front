import React from 'react';
import styled from "styled-components";

const StyledBaseContainer = styled.div.attrs(props => ({
  as: props.as || 'div'
}))`
  background-color: ${props => props.bgColor || 'transparent'};
  color: ${props => props.color || 'inherit'};
  padding: ${props => props.padding || '1rem'};
  margin: ${props => props.margin || '0'};
  border-radius: ${props => props.rounded ? '8px' : '0'};
  box-shadow: ${props => props.elevated ? '0 4px 8px rgba(0,0,0,0.1)' : 'none'};
`;

const Base = ({
  children,
  bgColor,
  color,
  padding,
  margin,
  rounded,
  elevated,
  as,
  ...props
}) => {
  return (
    <StyledBaseContainer
      bgColor={bgColor}
      color={color}
      padding={padding}
      margin={margin}
      rounded={rounded}
      elevated={elevated}
      as={as}
      {...props}
    >
      {children}
    </StyledBaseContainer>
  );
};

export default Base;