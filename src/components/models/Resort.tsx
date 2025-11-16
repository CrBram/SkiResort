import { useGLTF } from "@react-three/drei";

export function Resort(props: { [key: string]: any }) {
  const { nodes, materials } = useGLTF("/models/SkiResort_v4.glb") as any;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mountains.geometry}
        material={materials.Rock}
        position={[1.531, -0.248, 0.325]}
        scale={5.163}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground.geometry}
        material={materials.Ground}
        position={[1.531, -0.259, 0.325]}
        scale={8.121}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.Ground}
        scale={-20.529}
      />
      <group position={[-1.814, 0.103, -3.311]} scale={0.086}>
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
        position={[-4.932, 0.128, -4.384]}
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
        position={[-4.441, 0.128, -2.982]}
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
      <group position={[-3.254, 0.114, -6.05]} scale={0.086}>
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
        position={[-5.081, 0.128, -1.907]}
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
        position={[-5.081, 0.081, 0.266]}
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
        position={[-4.025, 0.024, 0.287]}
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
      <group position={[-1.692, 0.114, -5.795]} scale={0.086}>
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
      <group position={[-0.05, 0.041, -6.17]} scale={0.086}>
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
      <group position={[0.163, 0.074, -5.654]} scale={0.086}>
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
      <group position={[1.134, 0.117, -5.921]} scale={0.086}>
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
      <group position={[7.407, 0.103, -4.208]} scale={0.086}>
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
        position={[3.613, 0.089, 6.272]}
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
        position={[3.958, 0.067, 6.712]}
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
        position={[4.821, 0.106, 6.193]}
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
        position={[6.353, 0.096, 5.765]}
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
        position={[-1.089, 0.097, 6.202]}
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
        position={[-0.041, 0.115, 7.188]}
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
        position={[0.823, 0.154, 6.669]}
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
        position={[2.354, 0.144, 6.241]}
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
      <group position={[9.004, 0.06, -0.464]} scale={0.086}>
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
        position={[8.586, 0.115, 0.516]}
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
        position={[9.102, 0.012, 1.902]}
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
        position={[8.414, 0.091, 2.967]}
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
        position={[6.926, 0.089, 4.455]}
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
        position={[7.27, 0.067, 6.734]}
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
        position={[6.15, 0.144, 4.423]}
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
      <group position={[4.191, 0.107, -4.673]} scale={0.086}>
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
      <group position={[5.072, 0.092, -5.049]} scale={0.086}>
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
      <group position={[6.664, 0.071, -4.533]} scale={0.086}>
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
        position={[-1.234, 1.135, -2.024]}
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
          material={materials["Snow.004"]}
          position={[-0.055, 3.583, -0.011]}
          rotation={[0.019, -0.003, 0]}
          scale={10.723}
        />
      </group>
      <group
        position={[-1.615, 1.08, -2.161]}
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
          material={materials["Snow.005"]}
          position={[-0.012, 3.457, -0.007]}
          rotation={[0.02, -0.003, 0]}
          scale={[11.679, 13.329, 11.68]}
        />
      </group>
      <group
        position={[-1.922, 1, -1.95]}
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
          material={materials["Snow.006"]}
          position={[-0.048, 3.361, 0.015]}
          rotation={[0.021, -0.003, 0]}
          scale={[9.158, 14.252, 9.161]}
        />
      </group>
      <group
        position={[-0.767, 1.014, -2.778]}
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
          material={materials.Snow}
          position={[-0.176, 3.738, 0.28]}
          rotation={[0.152, -0.066, 0.028]}
          scale={10.976}
        />
      </group>
      <group
        position={[-0.142, 0.115, 7.78]}
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
        position={[0.846, 0.154, 7.58]}
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
        position={[2.432, 0.144, 7.69]}
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
        position={[-1.675, 0.089, 6.701]}
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
        position={[-5.329, 0.115, 8.013]}
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
        position={[-4.466, 0.154, 7.494]}
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
        position={[-2.934, 0.144, 7.066]}
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
        position={[-5.268, 0.115, 6.412]}
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
        position={[-4.281, 0.154, 6.213]}
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
        position={[-2.694, 0.144, 6.323]}
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
        position={[-4.618, 0.154, 6.948]}
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
        position={[-6.085, 0.115, 5.459]}
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
        position={[-5.222, 0.154, 4.94]}
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
        position={[-3.69, 0.144, 4.512]}
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
        position={[-6.024, 0.115, 3.858]}
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
        position={[-5.037, 0.154, 3.659]}
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
        position={[-3.45, 0.056, 3.768]}
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
        position={[-5.375, 0.154, 4.394]}
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
        position={[4.209, 0.103, -6.337]}
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
        position={[7.422, 0.107, -6.825]}
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
        position={[6.688, 0.092, -6.21]}
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
        position={[5.015, 0.071, -6.242]}
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
        position={[5.36, 0.071, -5.648]}
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
      <group position={[9.004, 0.06, -6.996]} scale={0.086}>
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
        position={[8.569, 0.058, -6.015]}
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
        position={[9.028, 0.03, -4.596]}
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
        position={[8.449, 0.019, -3.499]}
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
        position={[7.27, 0.067, 6.734]}
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
        position={[8.098, 0.096, 5.277]}
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
        position={[8.67, 0.089, 3.967]}
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
        position={[9.015, 0.067, 6.247]}
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
        position={[7.895, 0.144, 3.935]}
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
        position={[0.176, 3.04, 2.302]}
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
        position={[3.648, 3.035, 2.632]}
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
          material={materials["Snow.001"]}
          position={[-0.268, 4.009, -0.122]}
          rotation={[-0.01, 0.031, 0.044]}
          scale={16.479}
        />
      </group>
      <group
        position={[3.76, 4.191, 0.421]}
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
        position={[3.823, 4.141, 0.258]}
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
        position={[2.143, 3.826, 0.152]}
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
        position={[3.76, 2.451, -2.412]}
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
        position={[0.607, 2.362, -0.621]}
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
        position={[0.63, 2.37, -0.47]}
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
        position={[-1.732, 1.822, -0.276]}
        rotation={[0, -1.247, 0]}
        scale={[0.035, 0.012, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.002"]}
        position={[-0.094, 3.598, 1.862]}
        rotation={[0, -0.475, 0]}
        scale={[0.035, 0.012, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.003"]}
        position={[4.311, 4.145, 2.189]}
        rotation={[0, 1.165, 0]}
        scale={[0.035, 0.012, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.004"]}
        position={[2.884, 4.848, -0.333]}
        rotation={[-Math.PI, 1.172, -Math.PI]}
        scale={[0.035, 0.012, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary.geometry}
        material={materials.Cable}
        position={[-0.841, 2.581, 0.731]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary001.geometry}
        material={materials.Cable}
        position={[-1.002, 2.563, 0.872]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary002.geometry}
        material={materials.Cable}
        position={[2.093, 3.728, 1.969]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary003.geometry}
        material={materials.Cable}
        position={[3.509, 4.435, 0.928]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary004.geometry}
        material={materials.Cable}
        position={[2.145, 3.707, 2.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary005.geometry}
        material={materials.Cable}
        position={[3.721, 4.428, 0.929]}
      />
      <group
        position={[-1.147, 1.051, -1.12]}
        rotation={[1.809, -0.471, 0.492]}
        scale={[0.026, 0.33, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.Cabin}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials["Cabin.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials["Cabin.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_3.geometry}
          material={materials["Cabin.004"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_Right.geometry}
        material={materials.Cabin}
        position={[-1.518, 1.365, -0.974]}
        rotation={[1.088, -0.212, -1.188]}
        scale={[0.026, 0.33, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_Left.geometry}
        material={materials.Cabin}
        position={[-1.276, 1.365, -1.495]}
        rotation={[1.088, -0.212, -1.188]}
        scale={[0.026, 0.33, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof.geometry}
        material={materials.Cabin}
        position={[-1.396, 1.405, -1.234]}
        rotation={[0, -0.435, 0]}
        scale={[0.347, 0.016, 0.437]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall014.geometry}
          material={materials["Snow.002"]}
          position={[-0.005, 4.4, -0.004]}
          rotation={[0, 0.44, 0]}
          scale={[2.782, 63.516, 2.404]}
        />
      </mesh>
      <group
        position={[-1.643, 1.231, -1.35]}
        rotation={[1.809, -0.471, 0.492]}
        scale={[0.026, 0.33, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder127.geometry}
          material={materials.Cabin}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder127_1.geometry}
          material={materials["Cabin.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder127_2.geometry}
          material={materials["Cabin.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder127_3.geometry}
          material={materials["Cabin.007"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chimney.geometry}
        material={materials.Chimney}
        position={[-1.191, 1.613, -1.264]}
        rotation={[0, -0.435, 0]}
        scale={[0.037, 0.083, 0.037]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.Cabin}
        position={[-1.379, 1.037, -1.236]}
        rotation={[0, -0.435, 0]}
        scale={0.387}
      />
      <group
        position={[-0.146, 2.939, 2.386]}
        rotation={[1.429, -0.506, -0.287]}
        scale={[0.019, 0.236, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder179.geometry}
          material={materials.Cabin}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder179_1.geometry}
          material={materials["Cabin.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder179_2.geometry}
          material={materials["Cabin.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder179_3.geometry}
          material={materials["Cabin.004"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_Right001.geometry}
        material={materials.Cabin}
        position={[-0.285, 3.164, 2.635]}
        rotation={[1.061, 0.124, -1.789]}
        scale={[0.019, 0.236, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_Left001.geometry}
        material={materials.Cabin}
        position={[-0.387, 3.164, 2.237]}
        rotation={[1.061, 0.124, -1.789]}
        scale={[0.019, 0.236, 0.019]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof001.geometry}
        material={materials.Cabin}
        position={[-0.336, 3.193, 2.436]}
        rotation={[0, 0.25, 0]}
        scale={[0.249, 0.011, 0.313]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SnowBall015.geometry}
          material={materials["Snow.003"]}
          position={[-0.016, 4.201, 0.01]}
          rotation={[0, -0.256, 0]}
          scale={[3.976, 88.772, 3.255]}
        />
      </mesh>
      <group
        position={[-0.524, 3.068, 2.483]}
        rotation={[1.429, -0.506, -0.287]}
        scale={[0.019, 0.236, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder182.geometry}
          material={materials.Cabin}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder182_1.geometry}
          material={materials["Cabin.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder182_2.geometry}
          material={materials["Cabin.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder182_3.geometry}
          material={materials["Cabin.007"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chimney001.geometry}
        material={materials.Chimney}
        position={[-0.235, 3.341, 2.327]}
        rotation={[0, 0.25, 0]}
        scale={[0.027, 0.059, 0.027]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor001.geometry}
        material={materials.Cabin}
        position={[-0.327, 2.929, 2.427]}
        rotation={[0, 0.25, 0]}
        scale={0.277}
      />
    </group>
  );
}

useGLTF.preload("/models/SkiResort_v4.glb");
