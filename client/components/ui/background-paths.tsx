"use client";

import { motion } from "framer-motion";

export function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 24 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.35 + i * 0.03,
        opacity: 0.03 + i * 0.011,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke={`rgba(245,244,239,${path.opacity.toFixed(3)})`}
                        strokeWidth={path.width}
                        fill="none"
                        initial={{ pathLength: 0.3, opacity: 0.2 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.2, path.opacity * 1.15, 0.2],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + (path.id * 7) % 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                            delay: -((path.id * 11) % 20),
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}
