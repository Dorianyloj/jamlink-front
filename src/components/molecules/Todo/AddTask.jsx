// src/components/molecules/Todo/AddTask.jsx
import React, { useState } from "react";
import { Container, Typography, TextField } from "../../atoms";
import { useDispatch } from "react-redux";
import { addTask } from "../../../store/";

const AddTask = () => {
  const [newTaskName, setNewTaskName] = useState("");
  const dispatch = useDispatch();
  
  const handleAddTask = () => {
    if (newTaskName.trim() === "") return;
    
    dispatch(addTask(newTaskName));
    
    setNewTaskName("");
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };
  
  return (
    <Container.Flex 
      direction="row" 
      gap="0.5rem" 
      margin="0 0 1rem 0" 
      align="center"
    >
      <TextField.TextField
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Nouvelle tâche..."
        fullWidth
      />
      
      <Container.Base 
        padding="0.5rem 1rem" 
        bgColor="#3f51b5" 
        color="#fff" 
        rounded
        onClick={handleAddTask}
        style={{ cursor: "pointer" }}
      >
        <Typography.Typography color="#fff">
          +
        </Typography.Typography>
      </Container.Base>
    </Container.Flex>
  );
};

export default AddTask;