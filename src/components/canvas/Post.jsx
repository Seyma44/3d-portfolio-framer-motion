import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Post = () => {
  const postduct = useGLTF("./contact_3d/scene.gltf");

  return (
    <primitive 
    object={postduct.scene} 
    scale={0.01}
    position={[0, 0, 0]}
     />
  );
};

const PostCanvas = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [30, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
           enableZoom={false}  
        />
        <Post />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default PostCanvas;