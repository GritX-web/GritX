import React, { useRef } from 'react';

interface HoloCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: string;
}

const HoloCard: React.FC<HoloCardProps> = ({ children, className = '', delay = '0s' }) => {
    const divRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        divRef.current.style.setProperty('--mouse-x', `${x}px`);
        divRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            className={`
        relative overflow-hidden rounded-xl bg-surface/50 border border-white/5 
        backdrop-blur-xl group hover:border-white/20 transition-all duration-500
        animate-fade-in ${className}
      `}
            style={{
                animationDelay: delay,
                animationFillMode: 'both'
            } as React.CSSProperties}
        >
            {/* Holographic Gradient Blob following mouse */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(14, 169, 95, 0.15), transparent 40%)`
                }}
            />

            {/* Content */}
            <div className="relative z-10 p-6">
                {children}
            </div>

            {/* Animated Border Line */}
            <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out" />
        </div>
    );
};

export default HoloCard;
