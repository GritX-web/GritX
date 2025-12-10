import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LiveStatusWidget from './ui/LiveStatusWidget';

const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const [showWidget, setShowWidget] = useState(false);

  // Only show widget on dashboard-like pages or Home
  useEffect(() => {
    setShowWidget(pathname === '/' || pathname === '/facilities');
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-100 bg-bg relative selection:bg-primary/30 selection:text-white">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Cyber Grid - Moving */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] animate-[pulse_8s_ease-in-out_infinite] opacity-20"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow"></div>
      </div>

      <div
        className="fixed inset-0 pointer-events-none z-[60] opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <Navbar />
      <main className="flex-grow z-10 relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;