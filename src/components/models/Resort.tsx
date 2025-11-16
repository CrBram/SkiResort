import { useGLTF } from "@react-three/drei";

export function Resort(props: React.ComponentPropsWithoutRef<"group">) {
  const { nodes, materials } = useGLTF("/models/SkiResort_v8.glb") as any;
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
        scale={-39.205}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mountains_Backup001.geometry}
        material={materials["Rock.001"]}
        position={[13.657, -0.248, -26.173]}
        scale={5.163}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mountains_Backup002.geometry}
        material={materials["Rock.002"]}
        position={[29.784, -0.248, -16.156]}
        rotation={[0, -1.194, 0]}
        scale={5.163}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mountains_Backup003.geometry}
        material={materials["Rock.003"]}
        position={[5.241, -0.248, 29.678]}
        rotation={[0, -1.194, 0]}
        scale={2.799}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mountains_Backup004.geometry}
        material={materials["Rock.004"]}
        position={[-26.052, -0.047, 11.322]}
        rotation={[0, -1.194, 0]}
        scale={3.74}
      />
      <group position={[-1.814, 0.103, -6.794]} scale={0.086}>
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
          material={materials["TrunkBrown.008"]}
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
        position={[-8.32, 0.089, 9.608]}
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
        position={[-7.975, 0.067, 10.048]}
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
        position={[-11.974, 0.115, 10.523]}
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
        position={[-11.11, 0.154, 10.004]}
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
        position={[-9.579, 0.144, 9.576]}
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
          material={materials["Snow.008"]}
          position={[-0.018, 3.69, -0.045]}
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
          material={materials["Snow.009"]}
          position={[-0.072, 3.621, -0.057]}
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
          material={materials["Snow.010"]}
          position={[-0.013, 3.503, 0.039]}
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
          material={materials["Snow.011"]}
          position={[-0.132, 3.895, 0.266]}
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
        position={[-11.515, 0.154, 6.726]}
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
        position={[-9.929, 0.144, 6.835]}
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
        position={[8.79, 0.096, 7.737]}
        rotation={[0, 0.281, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder084.geometry}
          material={materials["TrunkBrown.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder084_1.geometry}
          material={materials["LeafGreen.008"]}
        />
      </group>
      <group
        position={[7.049, 0.096, 8.239]}
        rotation={[0, 0.281, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder103.geometry}
          material={materials["TrunkBrown.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder103_1.geometry}
          material={materials["LeafGreen.008"]}
        />
      </group>
      <group
        position={[-0.34, 0.097, 8.258]}
        rotation={[0, -0.193, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder107.geometry}
          material={materials["TrunkBrown.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder107_1.geometry}
          material={materials["LeafGreen.009"]}
        />
      </group>
      <group
        position={[-2.377, 0.144, 8.202]}
        rotation={[0, -0.193, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder110.geometry}
          material={materials["TrunkBrown.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder110_1.geometry}
          material={materials["LeafGreen.009"]}
        />
      </group>
      <group
        position={[-2.66, 0.144, 7.329]}
        rotation={[0, -0.535, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder111.geometry}
          material={materials["TrunkBrown.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder111_1.geometry}
          material={materials["LeafGreen.009"]}
        />
      </group>
      <group
        position={[6.487, 0.154, -7.445]}
        rotation={[Math.PI, -0.208, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1036.geometry}
          material={materials["TrunkBrown.070"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1036_1.geometry}
          material={materials["LeafGreen.069"]}
        />
      </group>
      <group
        position={[8.043, 0.144, 14.837]}
        rotation={[0, -0.069, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1038.geometry}
          material={materials["TrunkBrown.071"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1038_1.geometry}
          material={materials["LeafGreen.070"]}
        />
      </group>
      <group
        position={[6.456, 0.154, 14.728]}
        rotation={[0, -0.069, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1039.geometry}
          material={materials["TrunkBrown.071"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1039_1.geometry}
          material={materials["LeafGreen.070"]}
        />
      </group>
      <group
        position={[10.035, 0.144, 11.095]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1040.geometry}
          material={materials["TrunkBrown.071"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1040_1.geometry}
          material={materials["LeafGreen.070"]}
        />
      </group>
      <group
        position={[8.503, 0.154, 12.828]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1041.geometry}
          material={materials["TrunkBrown.071"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1041_1.geometry}
          material={materials["LeafGreen.070"]}
        />
      </group>
      <group
        position={[7.64, 0.115, 13.347]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1042.geometry}
          material={materials["TrunkBrown.071"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1042_1.geometry}
          material={materials["LeafGreen.070"]}
        />
      </group>
      <group
        position={[11.639, 0.067, 11.567]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1043.geometry}
          material={materials["TrunkBrown.071"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1043_1.geometry}
          material={materials["LeafGreen.070"]}
        />
      </group>
      <group
        position={[11.294, 0.089, 11.127]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1044.geometry}
          material={materials["TrunkBrown.071"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1044_1.geometry}
          material={materials["LeafGreen.070"]}
        />
      </group>
      <group
        position={[0.963, 0.032, 11.095]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1045.geometry}
          material={materials["TrunkBrown.072"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1045_1.geometry}
          material={materials["LeafGreen.071"]}
        />
      </group>
      <group
        position={[-0.912, 0.173, -12.412]}
        rotation={[Math.PI, -0.671, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1046.geometry}
          material={materials["TrunkBrown.073"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1046_1.geometry}
          material={materials["LeafGreen.072"]}
        />
      </group>
      <group
        position={[-10.448, 0.23, -8.436]}
        rotation={[Math.PI, -0.671, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1047.geometry}
          material={materials["TrunkBrown.074"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1047_1.geometry}
          material={materials["LeafGreen.073"]}
        />
      </group>
      <group
        position={[-10.936, 0.208, -8.708]}
        rotation={[Math.PI, -0.671, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1048.geometry}
          material={materials["TrunkBrown.074"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1048_1.geometry}
          material={materials["LeafGreen.073"]}
        />
      </group>
      <group
        position={[-7.94, 0.256, -11.899]}
        rotation={[Math.PI, -0.671, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1049.geometry}
          material={materials["TrunkBrown.074"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1049_1.geometry}
          material={materials["LeafGreen.073"]}
        />
      </group>
      <group
        position={[-8.535, 0.295, -11.086]}
        rotation={[Math.PI, -0.671, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1050.geometry}
          material={materials["TrunkBrown.074"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1050_1.geometry}
          material={materials["LeafGreen.073"]}
        />
      </group>
      <group
        position={[-9.275, 0.285, -8.895]}
        rotation={[Math.PI, -0.671, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1051.geometry}
          material={materials["TrunkBrown.074"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1051_1.geometry}
          material={materials["LeafGreen.073"]}
        />
      </group>
      <group
        position={[-7.384, 0.295, -13.631]}
        rotation={[Math.PI, -0.329, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1052.geometry}
          material={materials["TrunkBrown.074"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1052_1.geometry}
          material={materials["LeafGreen.073"]}
        />
      </group>
      <group
        position={[-8.889, 0.285, -13.117]}
        rotation={[Math.PI, -0.329, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1053.geometry}
          material={materials["TrunkBrown.074"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1053_1.geometry}
          material={materials["LeafGreen.073"]}
        />
      </group>
      <group
        position={[6.083, 0.256, -12.01]}
        rotation={[Math.PI, -0.671, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1054.geometry}
          material={materials["TrunkBrown.075"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1054_1.geometry}
          material={materials["LeafGreen.074"]}
        />
      </group>
      <group
        position={[10.779, 0.285, -12.708]}
        rotation={[Math.PI, -0.329, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1055.geometry}
          material={materials["TrunkBrown.075"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1055_1.geometry}
          material={materials["LeafGreen.074"]}
        />
      </group>
      <group
        position={[12.284, 0.295, -13.222]}
        rotation={[Math.PI, -0.329, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1056.geometry}
          material={materials["TrunkBrown.075"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1056_1.geometry}
          material={materials["LeafGreen.074"]}
        />
      </group>
      <group
        position={[9.394, 0.285, -15.098]}
        rotation={[Math.PI, -0.671, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1057.geometry}
          material={materials["TrunkBrown.075"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1057_1.geometry}
          material={materials["LeafGreen.074"]}
        />
      </group>
      <group
        position={[10.64, 0.295, -16.087]}
        rotation={[Math.PI, -0.671, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1058.geometry}
          material={materials["TrunkBrown.075"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1058_1.geometry}
          material={materials["LeafGreen.074"]}
        />
      </group>
      <group
        position={[7.733, 0.208, -14.911]}
        rotation={[Math.PI, -0.671, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1059.geometry}
          material={materials["TrunkBrown.075"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1059_1.geometry}
          material={materials["LeafGreen.074"]}
        />
      </group>
      <group
        position={[8.221, 0.23, -14.64]}
        rotation={[Math.PI, -0.671, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1060.geometry}
          material={materials["TrunkBrown.075"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1060_1.geometry}
          material={materials["LeafGreen.074"]}
        />
      </group>
      <group position={[1.134, 0.117, -9.397]} scale={0.086}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1061.geometry}
          material={materials["TrunkBrown.076"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1061_1.geometry}
          material={materials["LeafGreen.075"]}
        />
      </group>
      <group position={[0.163, 0.074, -9.129]} scale={0.086}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1062.geometry}
          material={materials["TrunkBrown.076"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1062_1.geometry}
          material={materials["LeafGreen.075"]}
        />
      </group>
      <group position={[-0.05, 0.041, -9.646]} scale={0.086}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1063.geometry}
          material={materials["TrunkBrown.076"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1063_1.geometry}
          material={materials["LeafGreen.075"]}
        />
      </group>
      <group position={[-1.692, 0.114, -9.27]} scale={0.086}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1064.geometry}
          material={materials["TrunkBrown.076"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1064_1.geometry}
          material={materials["LeafGreen.075"]}
        />
      </group>
      <group position={[-3.254, 0.114, -9.525]} scale={0.086}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1065.geometry}
          material={materials["TrunkBrown.076"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1065_1.geometry}
          material={materials["LeafGreen.075"]}
        />
      </group>
      <group position={[-1.814, 0.103, -10.27]} scale={0.086}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1066.geometry}
          material={materials["TrunkBrown.076"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1066_1.geometry}
          material={materials["LeafGreen.075"]}
        />
      </group>
      <group
        position={[15.008, 0.103, 1.023]}
        rotation={[0, -1.306, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1067.geometry}
          material={materials["TrunkBrown.077"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1067_1.geometry}
          material={materials["LeafGreen.076"]}
        />
      </group>
      <group
        position={[13.913, 0.114, -0.172]}
        rotation={[0, -1.306, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1068.geometry}
          material={materials["TrunkBrown.077"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1068_1.geometry}
          material={materials["LeafGreen.076"]}
        />
      </group>
      <group
        position={[14.075, 0.114, 1.403]}
        rotation={[0, -1.306, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1069.geometry}
          material={materials["TrunkBrown.077"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1069_1.geometry}
          material={materials["LeafGreen.076"]}
        />
      </group>
      <group
        position={[14.867, 0.041, 2.888]}
        rotation={[0, -1.306, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1070.geometry}
          material={materials["TrunkBrown.077"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1070_1.geometry}
          material={materials["LeafGreen.076"]}
        />
      </group>
      <group
        position={[14.425, 0.074, 3.229]}
        rotation={[0, -1.306, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1071.geometry}
          material={materials["TrunkBrown.077"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1071_1.geometry}
          material={materials["LeafGreen.076"]}
        />
      </group>
      <group
        position={[14.937, 0.117, 4.097]}
        rotation={[0, -1.306, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1072.geometry}
          material={materials["TrunkBrown.077"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1072_1.geometry}
          material={materials["LeafGreen.076"]}
        />
      </group>
      <group
        position={[21.986, 0.208, 9.024]}
        rotation={[-Math.PI, 0.635, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1073.geometry}
          material={materials["TrunkBrown.078"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1073_1.geometry}
          material={materials["LeafGreen.077"]}
        />
      </group>
      <group
        position={[21.545, 0.295, 13.858]}
        rotation={[-Math.PI, 0.977, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1074.geometry}
          material={materials["TrunkBrown.078"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1074_1.geometry}
          material={materials["LeafGreen.077"]}
        />
      </group>
      <group
        position={[20.655, 0.285, 12.54]}
        rotation={[-Math.PI, 0.977, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1075.geometry}
          material={materials["TrunkBrown.078"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1075_1.geometry}
          material={materials["LeafGreen.077"]}
        />
      </group>
      <group
        position={[18.754, 0.256, 8.19]}
        rotation={[-Math.PI, 0.635, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1076.geometry}
          material={materials["TrunkBrown.078"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1076_1.geometry}
          material={materials["LeafGreen.077"]}
        />
      </group>
      <group
        position={[15.906, 0.285, -6.551]}
        rotation={[-Math.PI, 0.977, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1077.geometry}
          material={materials["TrunkBrown.079"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1077_1.geometry}
          material={materials["LeafGreen.078"]}
        />
      </group>
      <group
        position={[16.795, 0.295, -5.232]}
        rotation={[-Math.PI, 0.977, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1078.geometry}
          material={materials["TrunkBrown.079"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1078_1.geometry}
          material={materials["LeafGreen.078"]}
        />
      </group>
      <group
        position={[11.73, 0.285, -5.819]}
        rotation={[-Math.PI, 0.635, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1079.geometry}
          material={materials["TrunkBrown.079"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1079_1.geometry}
          material={materials["LeafGreen.078"]}
        />
      </group>
      <group
        position={[14.038, 0.295, -5.677]}
        rotation={[-Math.PI, 0.635, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1080.geometry}
          material={materials["TrunkBrown.079"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1080_1.geometry}
          material={materials["LeafGreen.078"]}
        />
      </group>
      <group
        position={[14.978, 0.256, -5.316]}
        rotation={[-Math.PI, 0.635, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1081.geometry}
          material={materials["TrunkBrown.079"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1081_1.geometry}
          material={materials["LeafGreen.078"]}
        />
      </group>
      <group
        position={[11.115, 0.208, -7.373]}
        rotation={[-Math.PI, 0.635, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1082.geometry}
          material={materials["TrunkBrown.079"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1082_1.geometry}
          material={materials["LeafGreen.078"]}
        />
      </group>
      <group
        position={[10.98, 0.23, -6.83]}
        rotation={[-Math.PI, 0.635, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1083.geometry}
          material={materials["TrunkBrown.079"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1083_1.geometry}
          material={materials["LeafGreen.078"]}
        />
      </group>
      <group
        position={[17.312, 0.173, 1.333]}
        rotation={[-Math.PI, 0.635, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1084.geometry}
          material={materials["TrunkBrown.080"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1084_1.geometry}
          material={materials["LeafGreen.079"]}
        />
      </group>
      <group
        position={[-16.012, 0.115, 3.192]}
        rotation={[0, -0.378, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1085.geometry}
          material={materials["TrunkBrown.081"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1085_1.geometry}
          material={materials["LeafGreen.080"]}
        />
      </group>
      <group
        position={[-16.557, 0.115, 4.698]}
        rotation={[0, -0.037, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1086.geometry}
          material={materials["TrunkBrown.081"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1086_1.geometry}
          material={materials["LeafGreen.080"]}
        />
      </group>
      <group
        position={[-15.614, 0.154, 6.563]}
        rotation={[0, -0.037, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1087.geometry}
          material={materials["TrunkBrown.081"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1087_1.geometry}
          material={materials["LeafGreen.080"]}
        />
      </group>
      <group
        position={[-16.069, 0.115, 5.855]}
        rotation={[0, -0.378, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1088.geometry}
          material={materials["TrunkBrown.081"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1088_1.geometry}
          material={materials["LeafGreen.080"]}
        />
      </group>
      <group
        position={[-15.635, 0.154, 7.13]}
        rotation={[0, -0.037, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1089.geometry}
          material={materials["TrunkBrown.081"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1089_1.geometry}
          material={materials["LeafGreen.080"]}
        />
      </group>
      <group
        position={[-16.615, 0.115, 7.361]}
        rotation={[0, -0.037, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1090.geometry}
          material={materials["TrunkBrown.081"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1090_1.geometry}
          material={materials["LeafGreen.080"]}
        />
      </group>
      <group
        position={[-7.222, 0.074, -3.985]}
        rotation={[0, -0.309, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1091.geometry}
          material={materials["TrunkBrown.081"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1091_1.geometry}
          material={materials["LeafGreen.080"]}
        />
      </group>
      <group
        position={[-8.946, 0.114, -4.684]}
        rotation={[0, -0.309, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1092.geometry}
          material={materials["TrunkBrown.081"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1092_1.geometry}
          material={materials["LeafGreen.080"]}
        />
      </group>
      <group
        position={[-13.02, 0.024, 0.399]}
        rotation={[-0.053, -0.3, 0.036]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1093.geometry}
          material={materials["TrunkBrown.081"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1093_1.geometry}
          material={materials["LeafGreen.080"]}
        />
      </group>
      <group
        position={[-14.02, 0.081, 0.057]}
        rotation={[-0.02, -0.307, -0.006]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1094.geometry}
          material={materials["TrunkBrown.081"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1094_1.geometry}
          material={materials["LeafGreen.080"]}
        />
      </group>
      <group
        position={[-10.357, 0.114, -5.403]}
        rotation={[0, -0.309, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1095.geometry}
          material={materials["TrunkBrown.081"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1095_1.geometry}
          material={materials["LeafGreen.080"]}
        />
      </group>
      <group
        position={[-12.462, 0.128, -4.327]}
        rotation={[-0.02, -0.307, -0.006]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1096.geometry}
          material={materials["TrunkBrown.082"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1096_1.geometry}
          material={materials["LeafGreen.080"]}
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
          material={materials["Snow.012"]}
          position={[0.031, 3.391, -0.032]}
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
          geometry={nodes.SnowBall008.geometry}
          material={materials["Snow.015"]}
          position={[-0.159, 3.581, -0.14]}
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
          geometry={nodes.SnowBall010.geometry}
          material={materials["Snow.017"]}
          position={[-0.205, 3.783, -0.004]}
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
          geometry={nodes.SnowBall011.geometry}
          material={materials["Snow.018"]}
          position={[-0.036, 3.96, -0.089]}
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
          material={materials["Snow.016"]}
          position={[0.026, 3.523, 0.003]}
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
          geometry={nodes.SnowBall012.geometry}
          material={materials["Snow.019"]}
          position={[-0.411, 3.412, 0.207]}
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
          geometry={nodes.SnowBall006.geometry}
          material={materials["Snow.013"]}
          position={[0.035, 3.391, 0.275]}
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
          geometry={nodes.SnowBall007.geometry}
          material={materials["Snow.014"]}
          position={[0.006, 3.026, 0.009]}
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
          geometry={nodes.SnowBall013.geometry}
          material={materials["Snow.035"]}
          position={[-0.004, 5.318, 0.001]}
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
          geometry={nodes.SnowBall014.geometry}
          material={materials["Snow.036"]}
          position={[0.007, 5.657, 0.001]}
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
      <group
        position={[-0.851, 2.158, 0.658]}
        rotation={[-Math.PI / 2, 0, 0.651]}
        scale={0.004}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["03___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials["07___Default"]}
          />
        </group>
      </group>
      <group
        position={[1.472, 3.209, 2.11]}
        rotation={[-Math.PI / 2, 0, -1.621]}
        scale={0.004}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4001.geometry}
            material={materials["03___Default.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5001.geometry}
            material={materials["07___Default.001"]}
          />
        </group>
      </group>
      <group
        position={[3.557, 4.029, 1.086]}
        rotation={[-Math.PI / 2, 0, -2.694]}
        scale={0.004}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4002.geometry}
            material={materials["03___Default.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5002.geometry}
            material={materials["07___Default.002"]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1001.geometry}
        material={materials["Fence.002"]}
        position={[-2.083, 1.043, -1.013]}
        rotation={[0, -0.203, 0]}
        scale={[0.023, 0.037, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2001.geometry}
        material={materials["Fence.003"]}
        position={[-2.08, 1.007, -1.367]}
        rotation={[-0.097, 0.011, 0]}
        scale={[0.023, 0.037, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1002.geometry}
        material={materials["Fence.004"]}
        position={[-2.123, 1.045, -0.679]}
        rotation={[-2.885, 1.418, 2.882]}
        scale={[0.023, 0.037, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1003.geometry}
        material={materials["Fence.005"]}
        position={[-2.133, 0.973, -1.724]}
        rotation={[-0.097, 0.131, 0]}
        scale={[0.023, 0.037, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1005.geometry}
        material={materials["Fence.008"]}
        position={[-0.978, 2.941, 2.462]}
        rotation={[-0.024, 0.089, 0]}
        scale={[0.023, 0.037, 0.017]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2002.geometry}
        material={materials["Fence.006"]}
        position={[-0.82, 2.936, 2.162]}
        rotation={[-0.001, -0.494, 0]}
        scale={[0.023, 0.037, 0.023]}
      />
    </group>
  );
}

useGLTF.preload("/models/SkiResort_v8.glb");
