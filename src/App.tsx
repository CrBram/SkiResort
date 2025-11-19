import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.tsx";
import Experience_LesArcs from "./Experience_LesArcs.tsx";

const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 400,
  position: [-10, 4, -8],
};

const cameraSettingsLesArcs = {
  fov: 45,
  near: 0.1,
  far: 400,
  position: [-15, 8, 115],
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Canvas
            gl={{
              antialias: true,
            }}
            camera={cameraSettings as any}
          >
            <Experience />
          </Canvas>
        }
      />
      <Route
        path="/les-arcs"
        element={
          <Canvas
            gl={{
              antialias: true,
            }}
            camera={cameraSettingsLesArcs as any}
          >
            <Experience_LesArcs />
          </Canvas>
        }
      />
    </Routes>
  );
}

export default App;
