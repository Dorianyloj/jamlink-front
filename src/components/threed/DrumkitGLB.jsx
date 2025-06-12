// components/3d/SimpleDrumKit.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

// Composant du modèle qui tourne
const RotatingDrumKit = () => {
  const groupRef = useRef();
  
  // Charger le modèle GLB
  const { scene } = useGLTF('/models/drumkit.glb');
  
  // Animation de rotation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3; // Vitesse de rotation
    }
  });

  return (
    <group ref={groupRef}>
      <primitive 
        object={scene} 
        scale={[1, 1, 1]} 
        position={[0, 0, 0]}
      />
    </group>
  );
};

// Composant principal
const SimpleDrumKit = ({ theme }) => {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Canvas camera={{ position: [5, 3, 5], fov: 50 }}>
        {/* Éclairage simple */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Environnement pour les reflets */}
        <Environment preset="sunset" />
        
        {/* Modèle qui tourne */}
        <RotatingDrumKit />
        
        {/* Contrôles de caméra (optionnel) */}
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
};

// Précharger le modèle
useGLTF.preload('/models/drumkit.glb');

export default SimpleDrumKit;