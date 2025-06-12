import React from "react";
import styled from "styled-components";

const StyledBase = styled.div`
  width: 100%;
  margin: 1rem;
  padding: 1rem;
  background-color: ${props => props.bgColor || "transparent"};
  border: ${props => props.border || "none"};
  border-radius: 8px;
`;

const UserProfile = ({ bgColor, border, children, ...props }) => {
    return (
      <StyledBase bgColor={bgColor} border={border} {...props}>
        {children}
      </StyledBase>
    );
  };

export default UserProfile;