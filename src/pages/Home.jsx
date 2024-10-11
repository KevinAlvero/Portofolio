import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../component/Loader'

import Earth from '../models/Earth';
import Space from '../models/Space';
import Moon from '../models/Moon';
import Plane from '../models/Plane';
import HomeInfo from '../component/HomeInfo';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [earthRotation, setEarthRotation] = useState(0);

  const adjustEarthForScreenSize = () => {
    let screenScale = null; 
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [1.9, 1.9, 1.9];
      screenPosition = [0, -6.5, -43];
    } else {
      screenScale = [2, 2, 2];
      screenPosition = [0, -6.5, -43];
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  }

  const [EarthScale, EarthPosition, EarthRotation] = adjustEarthForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} /> }
      </div>
      <Canvas className={`w-full h-screen ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={3} />
          <ambientLight intensity={.5} />
          
          <Moon />
          <Space isRotating={isRotating} earthRotation={earthRotation} />
          <Earth 
            position={EarthPosition}
            scale={EarthScale}
            rotation={EarthRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            setEarthRotation={setEarthRotation}
          />
          <Plane
            isRotating={isRotating}
            planeScale={planeScale}
            planePosition={planePosition}
            rotation={[0, 1, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
