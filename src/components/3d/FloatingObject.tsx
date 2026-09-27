import { useRef, useMemo, MutableRefObject } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingObjectProps {
  mouse: MutableRefObject<{ x: number; y: number }>;
}

// A single smooth sphere with a slow, water-like surface distortion and a
// glassy, translucent teal material — evokes a drop of ocean water rather
// than a hard geometric shape. Cheap to render: one mesh, no textures.
export default function FloatingObject({ mouse }: FloatingObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const target = useMemo(() => new THREE.Vector2(0, 0), []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    // Constant slow auto-rotation
    meshRef.current.rotation.y += delta * 0.12;
    meshRef.current.rotation.x += delta * 0.04;

    // Ease rotation subtly toward mouse position (does not fight the auto-rotation)
    target.x = THREE.MathUtils.lerp(target.x, mouse.current.y * 0.2, 0.04);
    target.y = THREE.MathUtils.lerp(target.y, mouse.current.x * 0.2, 0.04);
    meshRef.current.rotation.x += target.x * delta;
    meshRef.current.rotation.y += target.y * delta;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.9}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color="#3ba9c7"
          attach="material"
          distort={0.28}
          speed={1.1}
          roughness={0.1}
          metalness={0.1}
          transparent
          opacity={0.9}
          emissive="#0f4a5c"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  );
}
