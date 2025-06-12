import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  min-width: 350px;
  max-width: 400px;
  flex: 1 1 350px;
  margin: 0;
  padding: ${props => props.padding || '0'};
  transition: ${props => props.hover ? 'transform 0.2s ease, box-shadow 0.2s ease' : 'none'};
  cursor: ${props => props.hover ? 'pointer' : 'default'};

  &:hover {
    transform: ${props => props.hover ? 'translateY(-4px)' : 'none'};
    box-shadow: ${props => props.hover ? '0 8px 25px rgba(0,0,0,0.15)' : '0 4px 8px rgba(0,0,0,0.1)'};
  }
`;

const Card = ({ 
  children, 
  hover = false, 
  padding = "0",
  ...props 
}) => {
  return (
    <StyledCard hover={hover} padding={padding} {...props}>
      {children}
    </StyledCard>
  );
};

export default Card;