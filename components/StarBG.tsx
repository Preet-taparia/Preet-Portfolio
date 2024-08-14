// components/StarBG.tsx

"use client";

import { useLayoutEffect, useRef } from "react";
import * as THREE from "three";

const createCircleTexture = () => {
  const size = 8;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  if (context) {
    context.beginPath();
    context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
  }
  return new THREE.CanvasTexture(canvas);
};

const StarBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 75;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 500; // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 500; // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 500; // Z
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const starTexture = createCircleTexture();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 2,
      sizeAttenuation: true,
      map: starTexture,
      alphaTest: 0.5,
      transparent: true,
      depthWrite: false,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.004;
      stars.rotation.x += 0.002;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed top-0 left-0 w-full h-full bg-[#000000]"
    ></div>
  );
};

export default StarBackground;
