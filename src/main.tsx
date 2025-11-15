import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.tsx";

const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 800,
  position: [-5, 8, -14],
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Canvas
      gl={{
        antialias: true,
      }}
      camera={cameraSettings as any}
    >
      <Experience />
    </Canvas>
  </StrictMode>
);
