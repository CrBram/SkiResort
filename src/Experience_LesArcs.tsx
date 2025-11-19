import { Environment, OrbitControls } from "@react-three/drei";
import { Resort_LesArcs } from "./components/models/Resort_LesArcs";
import { Snow } from "./components/Snow";

const Experience_LesArcs = () => {
  return (
    <>
      <color attach="background" args={["#8785B9"]} />
      <fogExp2 attach="fog" args={["#8785B9", 0.03]} />
      <OrbitControls
        makeDefault
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 2.5}
        target={[0, 2.5, 127]}
      />
      <Environment preset="sunset" />
      <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />
      <directionalLight position={[-3, 2, 1]} intensity={0.5} color="#ffa500" />
      {/* Cabin 1 light */}
      <pointLight
        position={[-1.45, 1.35, -1.2]}
        intensity={1.5}
        scale={0.2}
        color="#ffd700"
        distance={5}
        decay={2}
      />
      {/* Cabin 2 light */}
      <pointLight
        position={[-0.4, 3.0, 2.3]}
        intensity={1.5}
        scale={0.2}
        color="#ffd700"
        distance={5}
        decay={2}
      />
      <Resort_LesArcs />
      <Snow centerX={0} centerY={0} centerZ={127} />
    </>
  );
};

export default Experience_LesArcs;
