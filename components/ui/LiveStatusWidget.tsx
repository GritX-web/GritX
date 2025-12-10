import React, { useState, useEffect } from 'react';
import { Activity, Users, Wifi } from 'lucide-react';

const LiveStatusWidget: React.FC = () => {
    // Simulate live data changes
    const [occupancy, setOccupancy] = useState(42);
    const [pulse, setPulse] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setOccupancy(prev => {
                const change = Math.floor(Math.random() * 5) - 2;
                return Math.min(Math.max(prev + change, 20), 95);
            });
            setPulse(true);
            setTimeout(() => setPulse(false), 500);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-40 hidden lg:block">
            <div className="bg-black/80 backdrop-blur-md border border-primary/20 rounded-lg p-4 w-64 shadow-neon-strong">
                <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        Live Metrics
                    </span>
                    <Wifi className="w-3 h-3 text-primary" />
                </div>

                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                            <Users className="w-4 h-4 text-primary" />
                            <span>Current Occupancy</span>
                        </div>
                        <span className={`font-mono text-primary font-bold transition-all ${pulse ? 'text-white scale-110' : ''}`}>
                            {occupancy}%
                        </span>
                    </div>

                    {/* Occupancy Bar */}
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary transition-all duration-1000 ease-out"
                            style={{ width: `${occupancy}%` }}
                        />
                    </div>

                    <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                            <Activity className="w-4 h-4 text-accent" />
                            <span>Air Quality</span>
                        </div>
                        <span className="text-xs text-accent bg-accent/10 px-2 py-0.5 rounded">
                            Optimal
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveStatusWidget;
