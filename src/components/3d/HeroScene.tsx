import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Box } from '@mui/material';
import FloatingObject from './FloatingObject';

// Cheap WebGL support check, run once on mount.
function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

// Static fallback shown when WebGL isn't available — a simple CSS ring,
// so the hero still looks intentional rather than broken.
function StaticFallback() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: { xs: 180, md: 260 },
          height: { xs: 180, md: 260 },
          borderRadius: '50%',
          border: '1px solid rgba(59,169,199,0.4)',
          background:
            'radial-gradient(circle at 35% 30%, rgba(59,169,199,0.28), transparent 70%)',
        }}
      />
    </Box>
  );
}

export default function HeroScene() {
  const [webglOk, setWebglOk] = useState(true);
  const mouse = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWebglOk(isWebGLAvailable());
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.current.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  if (!webglOk) {
    return <StaticFallback />;
  }

  return (
    <Box
      ref={containerRef}
      sx={{
        width: '100%',
        height: '100%',
        minHeight: { xs: 280, md: 420 },
        cursor: 'default',
      }}
    >
      <Canvas
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 3, 4]} intensity={1} color="#eaf7fa" />
        <pointLight position={[-3, -2, -2]} intensity={0.5} color="#3ba9c7" />
        <Suspense fallback={null}>
          <FloatingObject mouse={mouse} />
          <Environment preset="city" background={false} />
        </Suspense>
      </Canvas>
    </Box>
  );
}
