import React, { useState, useEffect } from "react";
import {Container, Typography} from "../atoms/";

const Clock = () => {
    const [clock, setClock] = useState(new Date());
    
    useEffect(() => {
      const timer = setInterval(() => {
        setClock(new Date());
      }, 1000);
      
      return () => clearInterval(timer);
    }, []);
  
    return (
      <Container.Base>
        <Typography.Typography variant="p" align="center" margin="1rem 0 0 0">
        {clock.toLocaleString()}
        </Typography.Typography>
      </Container.Base>
    );
  };
  
  export default Clock;