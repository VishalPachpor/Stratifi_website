"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";

interface Globe3DProps {
  className?: string;
}

export default function Globe3D({ className = "" }: Globe3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const globeRef = useRef<THREE.Mesh | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!mountRef.current || hasError) return;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // Camera setup
      const camera = new THREE.PerspectiveCamera(
        75,
        mountRef.current.clientWidth / mountRef.current.clientHeight,
        0.1,
        1000
      );
      camera.position.set(-2, 1, 3);
      camera.lookAt(0, 0, 0);

      // Renderer setup
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);

      // Add defensive styling to the canvas
      const canvas = renderer.domElement;
      canvas.style.position = "absolute";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.pointerEvents = "none";
      canvas.style.zIndex = "1";

      mountRef.current.appendChild(canvas);
      rendererRef.current = renderer;

      // Create halftone dot texture
      const createHalftoneTexture = () => {
        const canvas = document.createElement("canvas");
        const size = 512;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d")!;

        // Fill with dark background
        ctx.fillStyle = "#0a0a0a";
        ctx.fillRect(0, 0, size, size);

        // Create halftone pattern
        const dotSpacing = 12;
        const maxDotSize = 6;

        for (let x = 0; x < size; x += dotSpacing) {
          for (let y = 0; y < size; y += dotSpacing) {
            // Calculate distance from center for size variation
            const centerX = size / 2;
            const centerY = size / 2;
            const distanceFromCenter = Math.sqrt(
              Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
            );
            const normalizedDistance = distanceFromCenter / (size / 2);

            // Vary dot size based on distance and add some randomness
            const baseDotSize = maxDotSize * (1 - normalizedDistance * 0.7);
            const randomFactor = 0.3 + Math.random() * 0.7;
            const dotSize = Math.max(0.5, baseDotSize * randomFactor);

            // Create gradient colors (purple theme)
            const intensity = 1 - normalizedDistance * 0.5;
            const hue = 270 + normalizedDistance * 30; // Purple to blue gradient
            const saturation = 70 + intensity * 30;
            const lightness = 40 + intensity * 40;

            ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
            ctx.beginPath();
            ctx.arc(
              x + dotSpacing / 2,
              y + dotSpacing / 2,
              dotSize,
              0,
              Math.PI * 2
            );
            ctx.fill();

            // Add smaller accent dots
            if (Math.random() > 0.7) {
              ctx.fillStyle = `hsl(${hue + 20}, ${saturation + 20}%, ${
                lightness + 20
              }%)`;
              ctx.beginPath();
              ctx.arc(
                x + dotSpacing / 2 + (Math.random() - 0.5) * dotSpacing,
                y + dotSpacing / 2 + (Math.random() - 0.5) * dotSpacing,
                dotSize * 0.3,
                0,
                Math.PI * 2
              );
              ctx.fill();
            }
          }
        }

        const texture = new THREE.CanvasTexture(canvas);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(2, 1);
        return texture;
      };

      // Create globe geometry and material
      const geometry = new THREE.SphereGeometry(1.5, 64, 32);
      const texture = createHalftoneTexture();

      const material = new THREE.MeshPhongMaterial({
        map: texture,
        transparent: true,
        opacity: 0.9,
        shininess: 30,
        specular: new THREE.Color(0x9b87f5),
      });

      const globe = new THREE.Mesh(geometry, material);
      globe.rotation.x = Math.PI * 0.1; // Slight tilt
      globe.rotation.z = Math.PI * 0.05;
      scene.add(globe);
      globeRef.current = globe;

      // Lighting setup
      const ambientLight = new THREE.AmbientLight(0x9b87f5, 0.4);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      const pointLight = new THREE.PointLight(0x7c3aed, 0.6, 10);
      pointLight.position.set(-3, 2, 3);
      scene.add(pointLight);

      // Animation loop
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);

        if (globeRef.current) {
          // Smooth rotation
          globeRef.current.rotation.y += 0.005;

          // Subtle floating motion
          globeRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.1;
        }

        renderer.render(scene, camera);
      };

      // Handle resize
      const handleResize = () => {
        if (!mountRef.current || !camera || !renderer) return;

        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      window.addEventListener("resize", handleResize);
      animate();

      // Mouse interaction (optional)
      const handleMouseMove = (event: MouseEvent) => {
        if (!globeRef.current || !mountRef.current) return;

        const rect = mountRef.current.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        // Subtle rotation based on mouse position
        globeRef.current.rotation.x = Math.PI * 0.1 + (y - 0.5) * 0.1;
        globeRef.current.rotation.z = Math.PI * 0.05 + (x - 0.5) * 0.1;
      };

      mountRef.current.addEventListener("mousemove", handleMouseMove);

      // Cleanup
      return () => {
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
        }

        window.removeEventListener("resize", handleResize);

        if (mountRef.current && rendererRef.current) {
          mountRef.current.removeEventListener("mousemove", handleMouseMove);
          mountRef.current.removeChild(rendererRef.current.domElement);
        }

        // Dispose of Three.js objects
        if (globeRef.current) {
          globeRef.current.geometry.dispose();
          if (globeRef.current.material instanceof THREE.Material) {
            globeRef.current.material.dispose();
          }
        }

        if (rendererRef.current) {
          rendererRef.current.dispose();
        }

        if (texture) {
          texture.dispose();
        }
      };
    } catch (error) {
      console.error("Error initializing 3D globe:", error);
      setHasError(true);
    }
  }, [hasError]);

  if (hasError) {
    return (
      <div
        className={`w-full h-full ${className} flex items-center justify-center`}
        style={{
          minHeight: "300px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Fallback halftone pattern */}
        <div
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(155, 135, 245, 0.6) 2px, transparent 2px)`,
            backgroundSize: "30px 30px",
            maskImage: `radial-gradient(circle, black 0%, black 60%, transparent 80%)`,
            WebkitMaskImage: `radial-gradient(circle, black 0%, black 60%, transparent 80%)`,
          }}
        />
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className={`three-js-container w-full h-full ${className}`}
      style={{
        minHeight: "300px",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
      }}
    />
  );
}
