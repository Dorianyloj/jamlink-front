// components/3d/SimpleDrumKit.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';

const RotatingKeyboard = () => {
  const groupRef = useRef();
  const { scene } = useGLTF('/models/keyboard.glb');
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive 
        object={scene} 
        scale={[0.8, 0.8, 0.8]} 
        position={[0, -0.5, 0]}
      />
    </group>
  );
};

const SimpleSynthe = ({ theme }) => {
  return (
    <div style={{ 
      width: '100%', 
      height: '300px',
      borderRadius: '10px',
      overflow: 'hidden'
    }}>
     
        <Canvas camera={{ 
        position: [1,1,1],
        fov: 50 
        }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Environment preset="sunset" />
        <RotatingKeyboard />
        <OrbitControls 
                  enableZoom={false}
                  enablePan={false}
                  enableRotate={true}
                  autoRotate={false}
                />
      </Canvas>
    </div>
  );
};

useGLTF.preload('/models/keyboard.glb');
export default SimpleSynthe;