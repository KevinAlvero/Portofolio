import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import * as THREE from 'three';

const Space = ({ isRotating }) => {
  const skyRef = useRef();
  const starsRef = useRef();

  // Create an array of stars
  const stars = useMemo(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1500; // X position
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1500; // Y position
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1500; // Z position
    }
    return positions;
  }, []);

  useFrame(() => {
    if (isRotating && skyRef.current) {
      // Rotate the sky around the Y-axis
      skyRef.current.rotation.y += 0.0001 // Adjust speed of rotation as needed
    }

    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0001; // Rotate stars around the Y-axis
    }
  });

  return (
    <>
      <Sky
        ref={skyRef}
        distance={450000000} // Distance to the sky
        sunPosition={[0, 0, 0]} // Position of the sun
        inclination={0} // Tilt of the sky
        azimuth={0} // Horizontal position of the sun
      />
      <group ref={starsRef}>
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={stars.length / 3}
              array={stars}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial size={0.5} color="#ffffff" />
        </points>
      </group>
    </>
  );
};

export default Space;
