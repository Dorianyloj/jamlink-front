import React from "react";
import { Container, Typography } from "../../atoms";

const Task = ({ taskName, isDone, onToggle, onDelete }) => {
  return (
    <Container.Flex 
      direction="row" 
      justify="space-between" 
      align="center" 
      fullWidth 
      padding="0.5rem" 
      gap="1rem"
    >
      <Container.Base 
        padding="0.5rem" 
        rounded 
        bgColor="#f0f0f0" 
        onClick={onToggle}
        style={{ cursor: "pointer" }}
      >
        <Typography.Typography>
          {isDone ? "✓" : "○"}
        </Typography.Typography>
      </Container.Base>
      
      <Typography.Typography 
        style={{ 
          flexGrow: 1,
          textDecoration: isDone ? "line-through" : "none",
          color: isDone ? "#888" : "inherit"
        }}
      >
        {taskName}
      </Typography.Typography>
      
      <Container.Base 
        padding="0.5rem" 
        rounded 
        bgColor="#ffeeee" 
        onClick={onDelete}
        style={{ cursor: "pointer" }}
      >
        <Typography.Typography color="#ff5555">
          ✕
        </Typography.Typography>
      </Container.Base>
    </Container.Flex>
  );
};

export default Task;