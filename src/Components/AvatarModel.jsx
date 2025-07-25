import React from 'react';
import { useGLTF } from '@react-three/drei';

const AvatarModel = ({ url }) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.2} />;
};

export default AvatarModel;
