
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Globe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Auto-rotation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Main Earth sphere with blue oceans */}
      <sphereGeometry args={[2, 64, 64]} />
      <meshPhongMaterial
        color="#1E40AF"
        shininess={50}
        transparent
        opacity={0.9}
      />
      
      {/* Continents layer - green/brown landmasses */}
      <mesh>
        <sphereGeometry args={[2.01, 32, 16]} />
        <meshBasicMaterial
          color="#22C55E"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
      
      {/* Additional continent detail */}
      <mesh>
        <sphereGeometry args={[2.005, 24, 12]} />
        <meshBasicMaterial
          color="#A16207"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Atmospheric glow */}
      <mesh>
        <sphereGeometry args={[2.1, 16, 16]} />
        <meshBasicMaterial
          color="#87CEEB"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
    </mesh>
  );
};

const Globe3D = () => {
  return (
    <div className="h-[500px] w-full relative">
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} />
        
        <Globe />
        <Stars radius={300} depth={60} count={800} factor={4} />
        
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
          minDistance={4}
          maxDistance={10}
        />
      </Canvas>
      
      {/* Interaction hint */}
      <div className="absolute bottom-4 left-4 text-xs text-muted-foreground font-mono">
        Click and drag to rotate • Scroll to zoom
      </div>
    </div>
  );
};

export default Globe3D;
