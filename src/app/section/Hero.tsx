"use client"
import React from 'react';
import { Canvas } from "@react-three/fiber";
import "@/app/index.css";
import { PerspectiveCamera } from '@react-three/drei';

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full sm:mt-36 mt-20 mx-auto flex flex-col c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center">Hi, I am Gabrieee</p>
                <p className="hero_tag text-gray_gradient">Building Product & Brands</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className='w-full h-full'>
                    <PerspectiveCamera makeDefault position={[0, 0, 30]}/>

                </Canvas>
            </div>
        </section>
    );
}

export default Hero;