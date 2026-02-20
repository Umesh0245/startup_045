import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus, Float, Environment, SoftShadows } from '@react-three/drei';
import * as THREE from 'three';

const GlassShape = ({ position, rotation, scale, color }) => {
    const meshRef = useRef(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.005;
            meshRef.current.rotation.y += 0.005;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Torus ref={meshRef} args={[1, 0.4, 32, 100]} position={position} rotation={rotation} scale={scale}>
                <meshPhysicalMaterial
                    color={color}
                    transparent
                    opacity={0.7} // Glassy
                    roughness={0.1}
                    metalness={0.1}
                    transmission={0.5} // Key for glass
                    thickness={2}
                    clearcoat={1}
                    clearcoatRoughness={0}
                />
            </Torus>
        </Float>
    );
};

const AbstractSphere = ({ position, color, scale }) => {
    return (
        <Float speed={3} rotationIntensity={1} floatIntensity={2}>
            <mesh position={position} scale={scale}>
                <dodecahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color={color} roughness={0.2} metalness={0.5} />
            </mesh>
        </Float>
    );
}

export default function ThreeCanvas() {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh', // Only fill viewport initially, or use fixed for persistent bg
            zIndex: -1, // Behind everything
            pointerEvents: 'none',
            background: '#FCFCFC' // Ensure bg matches CSS
        }}>
            <Canvas shadows camera={{ position: [0, 0, 10], fov: 40 }} gl={{ antialias: true, alpha: false }}>
                <color attach="background" args={['#FCFCFC']} />

                {/* Lighting for bright scene */}
                <ambientLight intensity={1} />
                <directionalLight
                    position={[5, 10, 5]}
                    intensity={2}
                    castShadow
                    shadow-mapSize={[1024, 1024]}
                />

                {/* Environment for reflections */}
                <Environment preset="city" />

                {/* Abstract Shapes */}
                <GlassShape position={[-3, 2, 0]} rotation={[0.5, 0.5, 0]} scale={1.5} color="#4F46E5" />
                <GlassShape position={[4, -2, -2]} rotation={[-0.5, 1, 0]} scale={2} color="#818CF8" />

                <AbstractSphere position={[2, 3, -5]} color="#C4B5FD" scale={0.8} />
                <AbstractSphere position={[-4, -3, -3]} color="#A5B4FC" scale={1.2} />

                {/* Subtle fog for depth */}
                <fog attach="fog" args={['#FCFCFC', 5, 25]} />
            </Canvas>
        </div>
    );
}
