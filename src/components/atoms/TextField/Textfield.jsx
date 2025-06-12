// src/components/atoms/TextField.jsx
import React from 'react';
import styled from "styled-components";

const StyledInput = styled.input`
  width: ${props => props.fullWidth ? '100%' : props.width || 'auto'};
  padding: ${props => props.padding || '0.75rem'};
  margin: ${props => props.margin || '0'};
  border: ${props => props.error ? '1px solid #f44336' : '1px solid #ddd'};
  border-radius: ${props => props.rounded ? '8px' : '4px'};
  font-size: ${props => props.fontSize || '1rem'};
  outline: none;
  transition: border 0.2s, box-shadow 0.2s;
  
  &:focus {
    border-color: ${props => props.error ? '#f44336' : '#3f51b5'};
    box-shadow: 0 0 0 2px ${props => props.error ? 'rgba(244, 67, 54, 0.2)' : 'rgba(63, 81, 181, 0.2)'};
  }
  
  &::placeholder {
    color: #aaa;
  }
  
  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.containerWidth || 'auto'};
  margin: ${props => props.containerMargin || '0'};
`;

const Label = styled.label`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  color: ${props => 
    props.error ? '#f44336' : 
    props.labelColor || '#333'  // Utilise labelColor ou couleur par défaut
  };
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
`;

const ErrorMessage = styled.div`
  color: #f44336;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

const TextField = ({
  value,
  onChange,
  placeholder,
  label,
  labelColor, // Nouvelle prop pour la couleur du label
  error,
  errorMessage,
  fullWidth,
  width,
  padding,
  margin,
  rounded,
  fontSize,
  disabled,
  containerWidth,
  containerMargin,
  bold,
  type = "text",
  ...props
}) => {
  return (
    <InputContainer
      containerWidth={containerWidth}
      containerMargin={containerMargin}
    >
      {label && (
        <Label 
          error={error} 
          bold={bold}
          labelColor={labelColor} // Passe la couleur au styled component
        >
          {label}
        </Label>
      )}
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        error={error}
        fullWidth={fullWidth}
        width={width}
        padding={padding}
        margin={margin}
        rounded={rounded}
        fontSize={fontSize}
        disabled={disabled}
        {...props}
      />
      {error && errorMessage && (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )}
    </InputContainer>
  );
};

export default TextField;