"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Scene = () => {
    return (
        <Canvas style={
            { 
                height: "100px", 
                width: "100px", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"
            }
        }>
            <OrbitControls enableZoom enablePan enableRotate/>
            <directionalLight position={[1, 1, 1]} intensity={10} color={"#9cdba6"} />
            <color attach={"background"} args={["#771010ff"]} />

        </Canvas>
    );
}

export default Scene;