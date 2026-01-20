/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Fix for JSX intrinsic element errors in some environments
const MeshStandardMaterial = 'meshStandardMaterial' as any;
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;
const SpotLight = 'spotLight' as any;

const FluidAtmosphere = () => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.y = t * 0.05;
      ref.current.rotation.z = t * 0.02;
    }
  });

  return (
    <Sphere ref={ref} args={[1, 64, 64]} scale={2.5}>
      <MeshDistortMaterial
        color="#3a4439"
        transparent
        opacity={0.3}
        distort={0.4}
        speed={1.5}
        roughness={0.1}
        metalness={0.2}
      />
    </Sphere>
  );
};

const AbstractEarth = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.8}>
      {/* Fix: use defined MeshStandardMaterial constant */}
      <MeshStandardMaterial
        color="#2D5A27"
        wireframe
        transparent
        opacity={0.2}
      />
    </Sphere>
  );
};

export const EarthScene: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        {/* Fix: use defined lighting constants */}
        <AmbientLight intensity={0.5} />
        <PointLight position={[10, 10, 10]} intensity={1.5} color="#C5A059" />
        <SpotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        
        <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.5}>
          <AbstractEarth />
          <FluidAtmosphere />
        </Float>

        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};