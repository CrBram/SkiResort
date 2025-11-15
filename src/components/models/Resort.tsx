import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface ResortProps {
  [key: string]: any;
}

export function Resort(props: ResortProps) {
  const { nodes, materials } = useGLTF(
    "/models/SkiResort_v2.glb"
  ) as unknown as {
    nodes: { [key: string]: THREE.Mesh };
    materials: { [key: string]: THREE.Material };
  };
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary002.geometry}
        material={materials.Cable}
        position={[2.093, 3.728, 3.339]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary003.geometry}
        material={materials.Cable}
        position={[3.509, 4.435, 2.298]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary004.geometry}
        material={materials.Cable}
        position={[2.145, 3.707, 3.488]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary005.geometry}
        material={materials.Cable}
        position={[3.721, 4.428, 2.299]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mountains.geometry}
        material={materials.Rock}
        position={[1.531, -0.248, 1.695]}
        scale={5.163}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground.geometry}
        material={materials.Ground}
        position={[1.531, -0.259, 1.695]}
        scale={8.121}
      />
      <group position={[-1.814, 0.103, -1.941]} scale={0.086}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-4.932, 0.128, -3.014]}
        rotation={[-0.019, 0.003, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder030.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder030_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-4.441, 0.128, -1.612]}
        rotation={[-0.019, 0.003, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group position={[-3.254, 0.114, -4.68]} scale={0.086}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder032.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder032_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-5.081, 0.128, -0.537]}
        rotation={[-0.019, 0.003, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder033.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder033_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-5.081, 0.081, 1.636]}
        rotation={[-0.019, 0.003, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder034.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder034_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-4.025, 0.024, 1.657]}
        rotation={[-0.051, 0.009, 0.052]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group position={[-1.692, 0.114, -4.425]} scale={0.086}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder036.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder036_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group position={[-0.05, 0.041, -4.8]} scale={0.086}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder037.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder037_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group position={[0.163, 0.074, -4.284]} scale={0.086}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder038.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder038_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group position={[1.134, 0.117, -4.551]} scale={0.086}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder039.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder039_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group position={[7.407, 0.103, -2.838]} scale={0.086}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder040.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder040_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[3.613, 0.089, 7.642]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder041.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder041_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[3.958, 0.067, 8.082]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder042.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder042_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[4.821, 0.106, 7.563]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder043.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder043_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[6.353, 0.096, 7.135]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder044.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder044_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-1.089, 0.097, 7.572]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder045.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder045_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-0.041, 0.115, 8.558]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder046.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder046_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[0.823, 0.154, 8.039]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder047.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder047_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[2.354, 0.144, 7.611]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder048.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder048_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group position={[9.004, 0.06, 0.906]} scale={0.086}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder049.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder049_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[8.586, 0.115, 1.886]}
        rotation={[-0.019, 0.003, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder050.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder050_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[9.102, 0.012, 3.272]}
        rotation={[0.102, 0.011, 0.007]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder051.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder051_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[8.414, 0.091, 4.337]}
        rotation={[-0.143, -0.005, -0.009]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder052.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder052_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[6.926, 0.089, 5.825]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder053.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder053_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[7.27, 0.067, 8.104]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder054.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder054_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[6.15, 0.144, 5.793]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder055.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder055_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group position={[4.191, 0.107, -3.303]} scale={0.086}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder056.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder056_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group position={[5.072, 0.092, -3.679]} scale={0.086}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder057.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder057_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group position={[6.664, 0.071, -3.163]} scale={0.086}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder058.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder058_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-1.234, 1.114, -0.47]}
        rotation={[-0.019, 0.003, 0]}
        scale={0.093}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder059.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder059_1.geometry}
          material={materials.LeafGreen}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall001.geometry}
          material={materials["Snow.022"]}
          position={[-0.009, 3.23, -0.036]}
          rotation={[0.019, -0.003, 0]}
          scale={10.723}
        />
      </group>
      <group
        position={[-1.615, 1.08, -0.791]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.086, 0.075, 0.086]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder060.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder060_1.geometry}
          material={materials.LeafGreen}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall002.geometry}
          material={materials["Snow.023"]}
          position={[0.05, 3.498, 0.051]}
          rotation={[0.02, -0.003, 0]}
          scale={[11.679, 13.329, 11.68]}
        />
      </group>
      <group
        position={[-1.922, 1, -0.58]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.109, 0.07, 0.109]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder061.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder061_1.geometry}
          material={materials.LeafGreen}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall003.geometry}
          material={materials["Snow.024"]}
          position={[-0.014, 3.055, 0.029]}
          rotation={[0.021, -0.003, 0]}
          scale={[9.158, 14.252, 9.161]}
        />
      </group>
      <group
        position={[-0.767, 1.014, -1.408]}
        rotation={[-0.15, 0.069, -0.018]}
        scale={0.091}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder062.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder062_1.geometry}
          material={materials.LeafGreen}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall004.geometry}
          material={materials["Snow.025"]}
          position={[-0.173, 3.54, 0.282]}
          rotation={[0.152, -0.066, 0.028]}
          scale={10.976}
        />
      </group>
      <group
        position={[-0.142, 0.115, 9.15]}
        rotation={[0, -0.069, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[0.846, 0.154, 8.95]}
        rotation={[0, -0.069, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[2.432, 0.144, 9.06]}
        rotation={[0, -0.069, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-1.675, 0.089, 8.071]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-5.329, 0.115, 9.383]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-4.466, 0.154, 8.864]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-2.934, 0.144, 8.436]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-5.268, 0.115, 7.782]}
        rotation={[0, -0.069, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-4.281, 0.154, 7.583]}
        rotation={[0, -0.069, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-2.694, 0.144, 7.693]}
        rotation={[0, -0.069, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-4.618, 0.154, 8.318]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-6.085, 0.115, 6.829]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-5.222, 0.154, 6.31]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-3.69, 0.144, 5.882]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-6.024, 0.115, 5.228]}
        rotation={[0, -0.069, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-5.037, 0.154, 5.029]}
        rotation={[0, -0.069, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-3.45, 0.056, 5.138]}
        rotation={[0.181, -0.114, -0.02]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[-5.375, 0.154, 5.764]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[4.209, 0.103, -4.967]}
        rotation={[Math.PI, -0.294, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[7.422, 0.107, -5.455]}
        rotation={[Math.PI, -0.294, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[6.688, 0.092, -4.84]}
        rotation={[Math.PI, -0.294, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder063.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder063_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[5.015, 0.071, -4.872]}
        rotation={[Math.PI, -0.294, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder064.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder064_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[5.36, 0.071, -4.278]}
        rotation={[Math.PI, -0.294, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder065.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder065_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group position={[9.004, 0.06, -5.626]} scale={0.086}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder066.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder066_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[8.569, 0.058, -4.645]}
        rotation={[-0.019, 0.003, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder067.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder067_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[9.028, 0.03, -3.226]}
        rotation={[0.102, 0.011, 0.007]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder068.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder068_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[8.449, 0.019, -2.129]}
        rotation={[0.144, 0.027, -0.043]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder069.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder069_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[7.27, 0.067, 8.104]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder070.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder070_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[8.098, 0.096, 6.647]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder071.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder071_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[8.67, 0.089, 5.337]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder072.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder072_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[9.015, 0.067, 7.617]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder073.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder073_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[7.895, 0.144, 5.305]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder074.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder074_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[0.176, 3.04, 3.672]}
        rotation={[-0.019, 0.003, 0]}
        scale={0.061}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076.geometry}
          material={materials["TrunkBrown.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076_1.geometry}
          material={materials["LeafGreen.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall005.geometry}
          material={materials["Snow.026"]}
          position={[0.007, 3.785, -0.024]}
          rotation={[0.019, -0.003, 0]}
          scale={16.479}
        />
      </group>
      <group
        position={[3.648, 3.035, 4.002]}
        rotation={[0.009, -0.031, -0.044]}
        scale={0.061}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder077.geometry}
          material={materials["TrunkBrown.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder077_1.geometry}
          material={materials["LeafGreen.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall006.geometry}
          material={materials["Snow.027"]}
          position={[-0.122, 3.736, -0.017]}
          rotation={[-0.01, 0.031, 0.044]}
          scale={16.479}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall013.geometry}
          material={materials.Snow}
          position={[-0.268, 4.009, -0.122]}
          rotation={[-0.01, 0.031, 0.044]}
          scale={16.479}
        />
      </group>
      <group
        position={[3.76, 4.191, 1.791]}
        rotation={[0.009, -0.031, -0.044]}
        scale={0.061}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder078.geometry}
          material={materials["TrunkBrown.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder078_1.geometry}
          material={materials["LeafGreen.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall007.geometry}
          material={materials["Snow.028"]}
          position={[-0.152, 3.933, -0.069]}
          rotation={[-0.01, 0.031, 0.044]}
          scale={16.479}
        />
      </group>
      <group
        position={[3.823, 4.141, 1.628]}
        rotation={[0.009, -0.031, -0.044]}
        scale={[0.04, 0.032, 0.04]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder079.geometry}
          material={materials["TrunkBrown.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder079_1.geometry}
          material={materials["LeafGreen.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall008.geometry}
          material={materials["Snow.029"]}
          position={[0.038, 4.144, 0.156]}
          rotation={[-0.01, 0.031, 0.045]}
          scale={[25.196, 31.067, 25.176]}
        />
      </group>
      <group
        position={[2.143, 3.826, 1.522]}
        rotation={[-0.199, 0.039, 0.111]}
        scale={[0.061, 0.042, 0.06]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder080.geometry}
          material={materials["TrunkBrown.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder080_1.geometry}
          material={materials["LeafGreen.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall009.geometry}
          material={materials["Snow.030"]}
          position={[0.001, 3.384, -0.013]}
          rotation={[0.203, -0.061, -0.11]}
          scale={[16.629, 23.263, 16.958]}
        />
      </group>
      <group
        position={[3.76, 2.451, -1.042]}
        rotation={[-0.155, 0.014, -0.257]}
        scale={0.05}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder081.geometry}
          material={materials["TrunkBrown.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder081_1.geometry}
          material={materials["LeafGreen.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall010.geometry}
          material={materials["Snow.031"]}
          position={[-0.243, 4.339, 0.329]}
          rotation={[0.154, 0.026, 0.256]}
          scale={19.984}
        />
      </group>
      <group
        position={[0.607, 2.362, 0.749]}
        rotation={[-0.283, -0.016, 0.181]}
        scale={[0.061, 0.048, 0.06]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder082.geometry}
          material={materials["TrunkBrown.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder082_1.geometry}
          material={materials["LeafGreen.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall011.geometry}
          material={materials["Snow.032"]}
          position={[0.17, 3.59, 0.321]}
          rotation={[0.288, -0.036, -0.184]}
          scale={[16.666, 20.503, 17.005]}
        />
      </group>
      <group
        position={[0.63, 2.37, 0.9]}
        rotation={[0.183, -0.051, 0.097]}
        scale={[0.06, 0.034, 0.06]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder083.geometry}
          material={materials["TrunkBrown.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder083_1.geometry}
          material={materials["LeafGreen.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall012.geometry}
          material={materials["Snow.033"]}
          position={[-0.091, 3.716, 0.058]}
          rotation={[-0.202, 0.07, -0.105]}
          scale={[16.705, 29.098, 17.318]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.002"]}
        position={[-1.732, 1.822, 1.094]}
        rotation={[0, -1.247, 0]}
        scale={[0.035, 0.012, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.002"]}
        position={[-0.094, 3.598, 3.232]}
        rotation={[0, -0.475, 0]}
        scale={[0.035, 0.012, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.003"]}
        position={[4.311, 4.145, 3.559]}
        rotation={[0, 1.165, 0]}
        scale={[0.035, 0.012, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.004"]}
        position={[2.884, 4.848, 1.037]}
        rotation={[-Math.PI, 1.172, -Math.PI]}
        scale={[0.035, 0.012, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary.geometry}
        material={materials.Cable}
        position={[-0.841, 2.581, 2.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary001.geometry}
        material={materials.Cable}
        position={[-1.002, 2.563, 2.242]}
      />
    </group>
  );
}

useGLTF.preload("/models/SkiResort_v2.glb");
