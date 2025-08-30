"use client";
import { ReactNode } from "react";

export default function StarfieldWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="relative">
            {/* Starfield video */}
            <video
                className="fixed top-0 left-0 w-full h-full object-cover -z-10"
                src="/STARFIELD.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            {/* Content */}
            <div className="relative z-10">{children}</div>
        </div>
    );
}