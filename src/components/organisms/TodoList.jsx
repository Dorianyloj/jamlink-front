// src/components/organisms/TodoList.jsx
import React from "react";
import { Container, Typography } from "../atoms";
import { Todo } from "../molecules/";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../../store";

const TodoList = () => {
  const tasks = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  
  return (
    <Container.Base padding="1rem" bgColor="#f5f5f5">
      <Typography.Typography variant="h2" margin="0 0 1rem 0">
        Mes tâches
      </Typography.Typography>
      
      <Todo.AddTask />
      
      <Todo.List>
        {tasks.length === 0 ? (
          <Typography.Typography color="#888" align="center" padding="1rem">
            Aucune tâche pour le moment. Ajoutez-en une !
          </Typography.Typography>
        ) : (
          tasks.map(task => (
            <Todo.Task
              key={task.id}
              taskName={task.name}
              isDone={task.done}
              onToggle={() => dispatch(toggleTask(task.id))}
              onDelete={() => dispatch(deleteTask(task.id))}
            />
          ))
        )}
      </Todo.List>
    </Container.Base>
  );
};

export default TodoList;