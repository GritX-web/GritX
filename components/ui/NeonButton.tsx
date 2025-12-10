import React from 'react';
import { Link } from 'react-router-dom';

interface NeonButtonProps {
    children: React.ReactNode;
    to?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    icon?: React.ReactNode;
}

const NeonButton: React.FC<NeonButtonProps> = ({
    children,
    to,
    onClick,
    variant = 'primary',
    className = '',
    icon
}) => {
    const baseStyles = "relative inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-300 group overflow-hidden";

    const variants = {
        primary: "bg-primary text-black hover:bg-white hover:shadow-[0_0_30px_rgba(14,169,95,0.6)]",
        secondary: "bg-surface text-white border border-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(14,169,95,0.3)]",
        outline: "bg-transparent text-primary border border-primary hover:bg-primary hover:text-black hover:shadow-[0_0_30px_rgba(14,169,95,0.4)]"
    };

    const content = (
        <span className={`px-8 py-4 rounded-none skew-x-[-10deg] ${baseStyles} ${variants[variant]} ${className}`}>
            <span className="skew-x-[10deg] inline-flex items-center gap-2 relative z-10">
                {children}
                {icon && <span className="group-hover:translate-x-1 transition-transform">{icon}</span>}
            </span>

            {/* Glitch/shine effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-150%] group-hover:animate-[shimmer_0.6s_infinite] skew-x-[10deg]" />
        </span>
    );

    if (to) {
        return <Link to={to} className="inline-block hover:-translate-y-1 transition-transform">{content}</Link>;
    }

    return (
        <button onClick={onClick} className="inline-block hover:-translate-y-1 transition-transform">
            {content}
        </button>
    );
};

export default NeonButton;
