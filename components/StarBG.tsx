// components/StarBG.tsx

"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { InstancedMesh } from "three";
import { motion } from "framer-motion";
import * as THREE from "three";

const Stars: React.FC = () => {
  // Explicitly typing the ref for InstancedMesh
  const starRef = useRef<InstancedMesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>(null!);
  const numStars = 50; // Adjust number of stars

  useEffect(() => {
    const starMesh = starRef.current;

    // Ensure starMesh is available
    if (!starMesh) return;

    // Position the stars randomly in space
    for (let i = 0; i < numStars; i++) {
      const x = THREE.MathUtils.randFloatSpread(500);
      const y = THREE.MathUtils.randFloatSpread(500);
      const z = THREE.MathUtils.randFloatSpread(800);

      const matrix = new THREE.Matrix4();
      matrix.setPosition(x, y, z);
      starMesh.setMatrixAt(i, matrix);
    }
    starMesh.instanceMatrix.needsUpdate = true;

    // Cleanup function to dispose geometries and materials
    return () => {
      starMesh.geometry.dispose();
      if (Array.isArray(starMesh.material)) {
        starMesh.material.forEach((material) => material.dispose());
      } else {
        starMesh.material.dispose();
      }
    };
  }, [numStars]);

  // Rotate stars group for cosmic effect
  useFrame(() => {
    if (starRef.current) {
      starRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <instancedMesh
      ref={starRef}
      args={[new THREE.BufferGeometry(), null as any, numStars]} // Provide a BufferGeometry instance
    >
      <sphereGeometry args={[0.5, 8, 8]} />
      <meshBasicMaterial color="white" />
    </instancedMesh>
  );
};

const StarBackground: React.FC = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-[#000401]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Canvas>
        <ambientLight intensity={0.2} />
        <Stars />
      </Canvas>
    </motion.div>
  );
};

export default StarBackground;
