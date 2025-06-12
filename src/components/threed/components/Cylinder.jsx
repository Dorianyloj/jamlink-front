import React from 'react';

const Cylinder = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1], color = "#ffffff", ...props }) => {
    return (
        <mesh position={position} rotation={rotation} scale={scale} {...props}>
            <cylinderGeometry args={[1, 1, 2, 32]} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
};

export default Cylinder;