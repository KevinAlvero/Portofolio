import { useRef } from 'react';
import moonScene from '../assets/3d/Moon.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Moon = () => {
  const { scene, animations } = useGLTF(moonScene);
  const moonRef = useRef();
  const { actions } = useAnimations(animations, moonRef);

  // Initial parameters
  const orbitRadius = 2; // Radius of the orbit
  const speed = 0.2; // Speed of rotation

  useFrame(({ clock }) => {
    if (moonRef.current) {
      // Rotate the moon around its own axis
      moonRef.current.rotation.y += 0.001; // Rotate around Y-axis

      // Calculate elapsed time
      const t = clock.getElapsedTime();

      // Calculate the current angle based on elapsed time
      const angle = t * speed;

      // Set new position using circular motion
      moonRef.current.position.set(
        orbitRadius * Math.cos(angle), // X position
        1.8, // Keep Y constant
        orbitRadius * Math.sin(angle)  // Z position
      );
    }
  });

  return (
    <mesh 
      scale={[0.005, 0.005, 0.005]} 
      ref={moonRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Moon;
