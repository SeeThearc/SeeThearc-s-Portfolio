import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import AvatarModel from './AvatarModel';

const AvatarCanvas = ({ modelUrl }) => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Canvas camera={{ position: [0, 1.5, 3] }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <AvatarModel url={modelUrl} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default AvatarCanvas;
