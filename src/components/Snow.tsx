import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Snow() {
  const particlesRef = useRef<THREE.Points>(null);

  const particleCount = 5000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 100;
      pos[i3 + 1] = Math.random() * 30 + 5;
      pos[i3 + 2] = (Math.random() - 0.5) * 100;
    }
    return pos;
  }, [particleCount]);

  const velocities = useMemo(() => {
    const vel = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      vel[i] = Math.random() * 0.5 + 0.1;
    }
    return vel;
  }, [particleCount]);

  useFrame((state, delta) => {
    if (!particlesRef.current) return;

    const positions = particlesRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      positions[i3 + 1] -= velocities[i] * delta * 10;

      // Horizontal drift (wind effect)
      positions[i3] += Math.sin(state.clock.elapsedTime + i) * 0.01;
      positions[i3 + 2] += Math.cos(state.clock.elapsedTime + i) * 0.01;

      // Reset particle to top when it falls below ground
      if (positions[i3 + 1] < -10) {
        positions[i3] = (Math.random() - 0.5) * 100;
        positions[i3 + 1] = Math.random() * 30 + 5;
        positions[i3 + 2] = (Math.random() - 0.5) * 100;
      }
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#ffffff"
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
