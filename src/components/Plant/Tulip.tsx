import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { usePlantStore } from "../../store/plantStore";

export default function Tulip() {
  const group = useRef<THREE.Group>(null);

  const { scene } = useGLTF("/models/tulip.glb");

  // Ready for future animations
  const health = usePlantStore((state) => state.health);
  const hydration = usePlantStore((state) => state.hydration);

  useEffect(() => {
    // Clone the model so future changes don't affect the cached GLTF
    const model = scene.clone();

    // Calculate the bounding box
    const box = new THREE.Box3().setFromObject(model);

    // Find the center
    const center = box.getCenter(new THREE.Vector3());

    // Move the model so its center is at the origin
    model.position.sub(center);

    // Clear previous children
    if (group.current) {
      group.current.clear();
      group.current.add(model);
    }
  }, [scene]);

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.elapsedTime;

    // Gentle idle sway
    group.current.rotation.z = Math.sin(t) * 0.04;

    // Slow rotation (debug)
    group.current.rotation.y += 0.003;

    // Floating effect
    group.current.position.y = Math.sin(t * 2) * 0.03;
  });

  return (
    <group
      ref={group}
      scale={0.9}
    />
  );
}