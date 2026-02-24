import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleDataWave = () => {
    // 140x70 creates 9,800 dense, highly vibrant data points
    const width = 140;
    const depth = 70;
    const count = width * depth;
    const pointsRef = useRef<THREE.Points>(null);

    const [positions, colors] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const col = new Float32Array(count * 3);

        let i = 0;
        for (let x = 0; x < width; x++) {
            for (let z = 0; z < depth; z++) {
                // Map the grid broadly to 3D space
                const posX = (x - width / 2) * 0.35;
                const posZ = (z - depth / 2) * 0.35;

                pos[i * 3] = posX;
                pos[i * 3 + 1] = 0; // Y is completely calculated on the fly in the animation frame
                pos[i * 3 + 2] = posZ;

                // Create a smooth, beautiful gradient/rainbow across the entirely of the wave (based on X position)
                // We map the X index (0 to 140) to a Hue value (0 to 1) for a seamless fluid rainbow
                const hue = x / width;

                // Max saturation and ideal lightness for extreme vibrance in the rainbow pattern
                const color = new THREE.Color().setHSL(hue, 1.0, 0.55);

                col[i * 3] = color.r;
                col[i * 3 + 1] = color.g;
                col[i * 3 + 2] = color.b;

                i++;
            }
        }

        return [pos, col];
    }, []);

    useFrame(({ clock }) => {
        if (!pointsRef.current) return;

        // Extremely smooth, sophisticated time scaling.
        const time = clock.getElapsedTime() * 0.3;
        const posAttr = pointsRef.current.geometry.attributes.position;

        for (let i = 0; i < count; i++) {
            const x = posAttr.getX(i);
            const z = posAttr.getZ(i);

            // Elegant interference sine waves (Fluid, organic mathematical motion)
            const wave1 = Math.sin(x * 0.3 + time) * 1.5;
            const wave2 = Math.cos(z * 0.2 + time) * 1.5;
            const wave3 = Math.sin((x + z) * 0.15 + time) * 1.0;

            // Resting elegantly under the hero text.
            const y = wave1 + wave2 + wave3 - 1.5;

            posAttr.setY(i, y);
        }
        posAttr.needsUpdate = true;

        // Subtly pan the entire wave field
        pointsRef.current.rotation.y = Math.sin(time * 0.1) * 0.05;
        pointsRef.current.rotation.z = Math.cos(time * 0.1) * 0.03;
    });

    return (
        <points ref={pointsRef} position={[0, -1, -4]}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    args={[colors, 3]}
                />
            </bufferGeometry>
            {/* 
              Increased size and maximum opacity for explosive vibrance while retaining the elegant shape
            */}
            <pointsMaterial
                size={0.11}
                vertexColors={true}
                transparent={true}
                opacity={1}
                sizeAttenuation={true}
            />
        </points>
    );
};

export default function ThreeCanvas() {
    return (
        <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            zIndex: -1, pointerEvents: 'none',
            // Clean gradient background 
            background: 'radial-gradient(ellipse at top, #ffffff 0%, #f4f6fc 100%)'
        }}>
            <Canvas camera={{ position: [0, 4, 12], fov: 60 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
                <ParticleDataWave />
            </Canvas>
        </div>
    );
}
