import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: ${props => props.bgColor || '#3498db'};
  color: ${props => props.color || '#ffffff'};
  padding: ${props => props.padding || '1.5rem'};
  margin: 0;
  border-radius: ${props => props.rounded ? '8px 8px 0 0' : '0'};
`;

const Header = ({ children, bgColor, color, padding, rounded, ...props }) => {
  return (
    <StyledHeader 
      bgColor={bgColor} 
      color={color} 
      padding={padding} 
      rounded={rounded} 
      {...props}
    >
      {children}
    </StyledHeader>
  );
};

export default Header;