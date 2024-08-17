"use client";

import { useLayoutEffect, useRef, useState } from "react";
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
  const [material, setMaterial] = useState<THREE.PointsMaterial | null>(null);

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
    const rendererElement = renderer.domElement; // Store renderer.domElement in a local variable
    if (mountRef.current) {
      mountRef.current.appendChild(rendererElement);
    }

    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 50;
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
      opacity: 0, // Initial opacity
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

    setMaterial(starsMaterial);

    // Cleanup on unmount
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(rendererElement); // Use the local variable
      }
    };
  }, []);

  useLayoutEffect(() => {
    if (material) {
      let startTime: number | null = null;
      const duration = 1000; // 1 second

      const fadeIn = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        material.opacity = progress;
        if (progress < 1) {
          requestAnimationFrame(fadeIn);
        }
      };

      requestAnimationFrame(fadeIn);
    }
  }, [material]);

  return (
    <div
      ref={mountRef}
      className={`fixed top-0 left-0 w-full h-full bg-[#000401] transition-opacity duration-1000 opacity-100`}
    ></div>
  );
};

export default StarBackground;
