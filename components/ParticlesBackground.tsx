"use client";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
export default function ParticlesBackground() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: "#8b46d6" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            links: {
              enable: true,
              distance: 150,
              color: "#8b46d6",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: false,
              straight: false,
              outModes: { default: "out" },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 200, duration: 0.4 },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
          background: { color: "transparent" },
        }}
        className="absolute inset-0"
      />
    </div>
  );
}
