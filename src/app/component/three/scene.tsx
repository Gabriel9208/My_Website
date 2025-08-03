"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

const RotatingCube = () => {
    const meshRef = useRef(null);

    useFrame(() => {
        if(meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    })

    return (
        <mesh ref={meshRef}>
            <cylinderGeometry args={[1, 1, 2, 32]} />
            <meshLambertMaterial color="#9cdba6" emissive="#9cdba6"/>
        </mesh>
    );
}

const Scene = () => {
    return (
        <div className="flex" style={{ height: "100%", width: "100%", display: "flex",
                    justifyContent: "center", alignItems: "center" }}>

            <Canvas>
                <OrbitControls enableZoom enablePan enableRotate />
                <directionalLight position={[1, 1, 1]} intensity={10} color={"#9cdba6"} />
                <color attach={"background"} args={["#ffffff"]} />
                <RotatingCube />
            </Canvas>

        </div>
    );
}

export default Scene;