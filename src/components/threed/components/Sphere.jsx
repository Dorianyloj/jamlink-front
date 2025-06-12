import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Sphere = ({ position = [0, 0, 0], color = '#ff6b6b', ...props }) => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.5;
            meshRef.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <mesh ref={meshRef} position={position} {...props}>
            <sphereGeometry args={[1, 32, 16]} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
};

export default Sphere;