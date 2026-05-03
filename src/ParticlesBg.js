import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBg() {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // ✅ correct loader
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-10"
      options={{
        fullScreen: { enable: false },

        particles: {
          number: { value: 60 },
          size: { value: 2 },
          move: { speed: 1 },
          links: {
            enable: true,
            distance: 150,
            color: "#60a5fa",
            opacity: 0.3,
          },
        },

        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },
        },
      }}
    />
  );
}