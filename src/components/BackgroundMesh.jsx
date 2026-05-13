import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef } from 'react';

const RotatingStars = () => {
  const ref = useRef();
  
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 25;
    ref.current.rotation.y -= delta / 30;
  });

  return (
    <group ref={ref}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={1} />
    </group>
  );
};

const BackgroundMesh = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#07080f]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e40af]/10 to-[#6d28d9]/10"></div>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <RotatingStars />
      </Canvas>
    </div>
  );
};

export default BackgroundMesh;
