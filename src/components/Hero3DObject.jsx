import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Wireframe, Icosahedron } from '@react-three/drei';

function AnimatedGeometry() {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      
      // Slight mouse interaction
      const mouseX = (state.mouse.x * Math.PI) / 10;
      const mouseY = (state.mouse.y * Math.PI) / 10;
      
      meshRef.current.rotation.x += (mouseY - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (mouseX - meshRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <Icosahedron ref={meshRef} args={[2.5, 1]}>
        <meshStandardMaterial 
          color="#3b82f6" 
          wireframe 
          transparent 
          opacity={0.8}
          emissive="#10b981"
          emissiveIntensity={0.4}
        />
      </Icosahedron>
      
      {/* Inner glowing core */}
      <Icosahedron args={[1.5, 0]}>
        <meshBasicMaterial color="#10b981" wireframe transparent opacity={0.3} />
      </Icosahedron>
    </Float>
  );
}

export default function Hero3DObject() {
  return (
    <div className="w-full h-[400px] lg:h-[600px] absolute inset-0 lg:relative opacity-60 lg:opacity-100 pointer-events-none lg:pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedGeometry />
      </Canvas>
    </div>
  );
}
