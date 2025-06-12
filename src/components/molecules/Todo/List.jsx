import React from "react";
import { Container } from "../../atoms";

const List = ({ 
  children,
  title,
  spacing = "0.5rem",
  ...props
}) => {
  return (
    <Container.Base padding="1rem" rounded elevated bgColor="#ffffff" {...props}>
      {title && (
        <Container.Base padding="0 0 1rem 0">
          {title}
        </Container.Base>
      )}
      
      <Container.Flex 
        direction="column" 
        gap={spacing} 
        fullWidth
      >
        {children}
      </Container.Flex>
    </Container.Base>
  );
};

export default List;