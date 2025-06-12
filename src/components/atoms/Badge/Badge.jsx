import React from 'react';
import styled from 'styled-components';

const StyledBadge = styled.span`
  display: inline-block;
  padding: ${props => {
    switch (props.size) {
      case 'small': return '0.2rem 0.6rem';
      case 'large': return '0.6rem 1.2rem';
      default: return '0.4rem 0.8rem';
    }
  }};
  font-size: ${props => {
    switch (props.size) {
      case 'small': return '0.7rem';
      case 'large': return '1rem';
      default: return '0.8rem';
    }
  }};
  font-weight: bold;
  border-radius: 8px;
  background-color: ${props => {
    switch (props.variant) {
      case 'primary': return '#3498db';
      case 'success': return '#27ae60';
      case 'danger': return '#e74c3c';
      case 'warning': return '#f39c12';
      case 'purple': return '#9b59b6';
      case 'light': return '#ecf0f1';
      default: return '#95a5a6';
    }
  }};
  color: ${props => props.variant === 'light' ? '#2c3e50' : '#ffffff'};
`;

const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'medium',
  ...props 
}) => {
  return (
    <StyledBadge variant={variant} size={size} {...props}>
      {children}
    </StyledBadge>
  );
};

export default Badge;