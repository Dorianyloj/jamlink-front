import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Box = ({ position = [0, 0, 0], color = "orange", speed = 1 }) => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * speed;
            meshRef.current.rotation.y += delta * speed * 0.7;
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshStandardMaterial 
                color={color}
                roughness={0.3}
                metalness={0.2}
            />
        </mesh>
    );
};

export default Box;