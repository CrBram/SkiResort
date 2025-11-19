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
      {/* Cabin 1 light - cabin at [-1.256, 1.717, 126.83], offset similar to original */}
      <pointLight
        position={[-1.559, 2.016, 126.75]}
        intensity={1.5}
        scale={0.2}
        color="#ffd700"
        distance={5}
        decay={2}
      />
      {/* Cabin 2 light - cabin at [-1.231, 2.684, 129.587], offset similar to original */}
      <pointLight
        position={[-1.485, 2.745, 129.501]}
        intensity={1.5}
        scale={0.2}
        color="#ffd700"
        distance={5}
        decay={2}
      />
      {/* Cabin 3 light - cabin at [-1.862, 1.546, 133.913], offset similar to original */}
      <pointLight
        position={[-2.165, 1.845, 133.833]}
        intensity={1.5}
        scale={0.2}
        color="#ffd700"
        distance={5}
        decay={2}
      />
      {/* Cabin 4 light - cabin at [2.502, 4.125, 126.728], offset similar to original */}
      <pointLight
        position={[2.248, 4.186, 126.642]}
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
