import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  background-color: ${props => props.bgColor || 'transparent'};
  padding: ${props => props.padding || '1rem'};
  margin: ${props => props.margin || '0'};
  border-radius: ${props => props.rounded ? '8px' : '0'};
`;

const Section = ({ children, bgColor, padding, margin, rounded, ...props }) => {
  return (
    <StyledSection 
      bgColor={bgColor} 
      padding={padding} 
      margin={margin} 
      rounded={rounded} 
      {...props}
    >
      {children}
    </StyledSection>
  );
};

export default Section;