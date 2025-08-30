"use client";
import { useMemo } from "react";
import { BufferAttribute, Color } from "three";
import { useFrame } from "@react-three/fiber";

type Props = {
    count?: number;      // number of stars
    radius?: number;     // galaxy radius
    branches?: number;   // spiral arms
    spin?: number;       // spiral twist
    randomness?: number; // noise
    size?: number;       // point size
    inside?: string;
    outside?: string;
};

export default function GalaxyStars({
    count = 40000,
    radius = 90,
    branches = 5,
    spin = 1.2,
    randomness = 0.22,
    size = 0.035,
    inside = "#ffffff",
    outside = "#9fb7ff",
}: Props) {
    const { positions, colors } = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const col = new Float32Array(count * 3);
        const colorInside = new Color(inside);
        const colorOutside = new Color(outside);

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            const r = Math.pow(Math.random(), 0.7) * radius; // denser core
            const branch = (i % branches) / branches;
            const baseAngle = branch * Math.PI * 2;
            const spinAngle = r * spin;

            const randomX = (Math.random() - 0.5) * randomness * r;
            const randomY = (Math.random() - 0.5) * randomness * 0.4 * r; // flatter disk
            const randomZ = (Math.random() - 0.5) * randomness * r;

            pos[i3 + 0] = Math.cos(baseAngle + spinAngle) * r + randomX;
            pos[i3 + 1] = randomY;
            pos[i3 + 2] = Math.sin(baseAngle + spinAngle) * r + randomZ;

            const mixed = colorInside.clone().lerp(colorOutside, r / radius);
            col[i3 + 0] = mixed.r;
            col[i3 + 1] = mixed.g;
            col[i3 + 2] = mixed.b;
        }
        return { positions: pos, colors: col };
    }, [count, radius, branches, spin, randomness, inside, outside]);

    // gentle twinkle
    useFrame(({ clock, scene }) => {
        const t = clock.getElapsedTime();
        const points = scene.getObjectByName("galaxy_points");
        if (points) {
            // @ts-ignore
            points.material.size = size + Math.sin(t * 1.5) * size * 0.15;
        }
    });

    // @ts-ignore
    return (
        <points name="galaxy_points">
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={positions.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                vertexColors
                size={size}
                sizeAttenuation
                depthWrite={false}
                transparent
                opacity={0.95}
            />
        </points>
    );
}