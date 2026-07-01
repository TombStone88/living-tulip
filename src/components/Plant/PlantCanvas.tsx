import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Tulip from "./Tulip";

export default function PlantCanvas() {
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 0.8, 6],
        fov: 38,
      }}
    >
      <color attach="background" args={["#ffffff"]} />

      <ambientLight intensity={1.8} />

      <directionalLight
        position={[5, 6, 5]}
        intensity={2.5}
        castShadow
      />

      <directionalLight
        position={[-4, 3, -2]}
        intensity={1}
      />

      <Environment preset="city" />

      {/* Debug only - remove later */}
      <OrbitControls
        autoRotate
        autoRotateSpeed={1.5}
        enablePan={false}
        enableZoom
      />

      <Suspense fallback={null}>
        <Tulip />
      </Suspense>
    </Canvas>
  );
}