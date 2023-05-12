import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import CanvasLoader from "../Loader"
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei"


const Emoji = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.35}>
        <boxGeometry args={[2, 2]} />
        <meshStandardMaterial
          color='#f0b3c4'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 0]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.5}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const EmojiCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Emoji imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EmojiCanvas;

