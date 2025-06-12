import React from 'react';
import styled from "styled-components";

// Version simplifiée du composant Typography
const StyledText = styled.p`
  color: ${props => props.color || props.theme.color || '#000'};
  font-size: ${props => props.size || '1rem'};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  margin: ${props => props.margin || '0'};
  text-align: ${props => props.align || 'left'};
`;

const Typography = ({ 
  variant = 'p',
  children,
  ...props 
}) => {
  const Tag = variant;
  return <StyledText as={Tag} {...props}>{children}</StyledText>;
};

export default Typography;