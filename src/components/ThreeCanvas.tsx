import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const VIBRANT_PALETTE = [
    { text: "const", color: "#FF007F" },       // Neon Pink
    { text: "=>", color: "#00FFFF" },          // Cyan
    { text: "{}", color: "#8A2BE2" },          // Blue Violet
    { text: "deploy()", color: "#FFD700" },    // Gold
    { text: "await", color: "#00FF00" },       // Lime Green
    { text: "async", color: "#FF4500" },       // Orange Red
    { text: "true", color: "#1E90FF" },        // Dodger Blue
    { text: "commit", color: "#FF1493" },      // Deep Pink
    { text: "push", color: "#39FF14" },        // Neon Green
    { text: "build", color: "#00BFFF" },       // Deep Sky Blue
    { text: "0x1A4", color: "#FF00FF" },       // Magenta
    { text: "init", color: "#FFFF00" }         // Yellow
];

const TinyCodeParticle = ({ text, color, initialPosition, speed, offset }: any) => {
    const ref = useRef<THREE.Group>(null);

    useFrame(({ clock }) => {
        if (ref.current) {
            const t = clock.getElapsedTime();
            // Extremely tight floating bounds so they stay exactly where they spawned
            ref.current.position.y = initialPosition[1] + Math.sin(t * speed + offset) * 0.3;
            ref.current.position.x = initialPosition[0] + Math.cos(t * speed * 0.5 + offset) * 0.15;
        }
    });

    return (
        <group ref={ref} position={initialPosition}>
            {/* Very small font size (0.22), high intensity neon colors. Monospace font. */}
            <Text
                fontSize={0.22}
                color={color}
                font="https://cdn.jsdelivr.net/fontsource/fonts/jetbrains-mono@latest/latin-400-normal.woff"
                anchorX="center"
                anchorY="middle"
                fillOpacity={0.9}
                material-toneMapped={false}
            >
                {text}
            </Text>
        </group>
    );
};

const HighDensityScene = () => {
    // Dynamically calculate and fill every single empty patch using a rejection algorithm
    const nodes = useMemo(() => {
        const particles = [];
        let i = 0;
        let attempts = 0;

        // Loop randomly over screen until we successfully place 130 valid particles
        while (particles.length < 130 && attempts < 3000) {
            attempts++;
            const template = VIBRANT_PALETTE[i % VIBRANT_PALETTE.length];

            // Generate entirely across the vast screen space
            const x = (Math.random() - 0.5) * 26; // Spans from -13 to +13
            const y = (Math.random() - 0.5) * 14;     // Spans from -7 to +7
            const z = -0.5 - Math.random() * 3;   // Z depth stays consistently close

            // 🛑 SAFETY ALGORITHM: VETO ANY PLACEMENT ON TOP OF CORE UI TEXT

            // 1. Protect Header / Logo Space (Top 15% of viewport)
            if (y > 4.2) continue;

            // 2. Protect Central Hero Title ("Building Digital Excellence...")
            // The central column gets a wide berth to be absolutely sure.
            if (Math.abs(x) < 7.5 && y > -1.0 && y < 4.2) continue;

            // 3. Protect Subtext, Buttons, and "Available" badge
            if (Math.abs(x) < 5.5 && y > -4.5 && y <= -1.0) continue;

            // If coordinates pass all the safety checks, they are confirmed in an empty space!
            particles.push({
                id: i,
                ...template,
                position: [x, y, z],
                speed: 0.1 + Math.random() * 0.35,
                offset: Math.random() * 100
            });
            i++;
        }
        return particles;
    }, []);

    return (
        <group>
            {nodes.map(node => (
                <TinyCodeParticle
                    key={node.id}
                    text={node.text}
                    color={node.color}
                    initialPosition={node.position}
                    speed={node.speed}
                    offset={node.offset}
                />
            ))}
        </group>
    );
};

export default function ThreeCanvas() {
    return (
        <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            zIndex: -1, pointerEvents: 'none',
            background: 'radial-gradient(circle at center, #ffffff 0%, #f4f6fc 100%)'
        }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={2} />
                <HighDensityScene />
            </Canvas>
        </div>
    );
}
