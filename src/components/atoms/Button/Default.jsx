import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  padding: ${props => props.small ? '0.3rem 0.6rem' : '0.5rem 1rem'};
  background-color: ${props => props.variant === 'secondary' ? '#f50057' : '#3f51b5'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.6;
    onMouseOver={handleLoginHover}
    cursor: not-allowed;
  }
`;

const Button = ({
  children,
  variant,
  small,
  fullWidth,
  bold,
  onClick,
  onMouseOver,
  onMouseOut,
  onFocus,
  onBlur,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      small={small}
      fullWidth={fullWidth}
      bold={bold}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onFocus={onFocus}
      onBlur={onBlur}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;