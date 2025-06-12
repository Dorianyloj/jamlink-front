import React from "react";
import {Canvas} from "@react-three/fiber";

const ThreeDFrame = ({children}) => {

    return (
        <Canvas width="100%" height="100%">  

            <ambientLight intensity={0.5} />  
              
            <directionalLight   
                position={[2, 4, 3]}   
                intensity={1}   
                color="#f0f0f0"  
            />  
              
            <spotLight   
                position={[-3, 3, 2]}   
                angle={0.5}  
                penumbra={0.4}  
                intensity={0.7}   
                color="#03fc18" // Vert  
            />  
              
            <spotLight   
                position={[3, -2, -3]}   
                angle={0.3}  
                penumbra={0.6}  
                intensity={0.4}   
                color="#ff6b35" // Orange  
            />  
              
            {children}  
        </Canvas>  
    )
};

export default ThreeDFrame;