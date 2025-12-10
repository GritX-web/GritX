import React from 'react';
import { Trophy, Users, Calendar, Activity, ChevronRight, Zap, Target, Star } from 'lucide-react';
import NeonButton from '../components/ui/NeonButton';
import HoloCard from '../components/ui/HoloCard';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/95 to-transparent z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
            alt="Hero background"
            className="w-full h-full object-cover opacity-50 contrast-125 saturate-0"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-mono text-primary uppercase tracking-widest">System Online // v2.4</span>
            </div>

            <h1 className="font-display text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-white animate-slide-up mix-blend-screen" style={{ animationDelay: '0.1s' }}>
              FORGE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">YOUR</span> <br />
              <span className="text-primary text-glow relative inline-block">
                LEGACY
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-xl leading-relaxed animate-slide-up opacity-0 border-l-2 border-primary/50 pl-6" style={{ animationDelay: '0.2s' }}>
              Enter the bio-dome of performance. Where data meets discipline, and athletes become legends.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 animate-slide-up opacity-0 items-start" style={{ animationDelay: '0.3s' }}>
              <NeonButton to="/memberships" icon={<ChevronRight className="w-5 h-5" />}>
                Initiate Protocol
              </NeonButton>
              <NeonButton to="/facilities" variant="secondary">
                Scan Facilities
              </NeonButton>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-20 py-10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 md:divide-x divide-white/10">
              <div className="text-center md:text-left pt-0 md:pt-0 first:pt-0 pl-0 md:pl-8 first:pl-0">
                <div className="text-3xl md:text-5xl font-display font-bold text-white mb-2 whitespace-nowrap">2,000+</div>
                <div className="text-xs font-bold tracking-widest text-gray-500 uppercase">Active Members</div>
              </div>
              <div className="text-center md:text-left pt-0 md:pt-0 pl-0 md:pl-8">
                <div className="text-3xl md:text-5xl font-display font-bold text-white mb-2 whitespace-nowrap">50k sqft</div>
                <div className="text-xs font-bold tracking-widest text-gray-500 uppercase">Facility Area</div>
              </div>
              <div className="text-center md:text-left pt-8 md:pt-0 pl-0 md:pl-8 border-t border-white/10 md:border-t-0">
                <div className="text-3xl md:text-5xl font-display font-bold text-white mb-2 whitespace-nowrap">120+</div>
                <div className="text-xs font-bold tracking-widest text-gray-500 uppercase">Weekly Classes</div>
              </div>
              <div className="text-center md:text-left pt-8 md:pt-0 pl-0 md:pl-8 border-t border-white/10 md:border-t-0">
                <div className="text-3xl md:text-5xl font-display font-bold text-white mb-2 whitespace-nowrap">45+</div>
                <div className="text-xs font-bold tracking-widest text-gray-500 uppercase">Pro Coaches</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose GRIT X Features */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Why Choose GRIT X?</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              More than just a gym. It's a complete performance lifestyle designed for the elite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <HoloCard className="bg-surface/30 hover:bg-surface/50 transition-colors p-8" delay="0s">
              <div className="w-14 h-14 rounded-lg border border-primary/30 flex items-center justify-center mb-6 bg-primary/10">
                <Trophy className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Elite Facilities</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Train with Olympic-grade equipment and specialized zones designed for pro athletes.
              </p>
            </HoloCard>

            {/* Feature 2 */}
            <HoloCard className="bg-surface/30 hover:bg-surface/50 transition-colors p-8" delay="0.1s">
              <div className="w-14 h-14 rounded-lg border border-primary/30 flex items-center justify-center mb-6 bg-primary/10">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Connect with like-minded individuals, founders, and industry leaders.
              </p>
            </HoloCard>

            {/* Feature 3 */}
            <HoloCard className="bg-surface/30 hover:bg-surface/50 transition-colors p-8" delay="0.2s">
              <div className="w-14 h-14 rounded-lg border border-primary/30 flex items-center justify-center mb-6 bg-primary/10">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Exclusive Events</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Access to workshops, competitions, and networking nights.
              </p>
            </HoloCard>

            {/* Feature 4 */}
            <HoloCard className="bg-surface/30 hover:bg-surface/50 transition-colors p-8" delay="0.3s">
              <div className="w-14 h-14 rounded-lg border border-primary/30 flex items-center justify-center mb-6 bg-primary/10">
                <Activity className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Performance Tracking</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Advanced metrics and health monitoring integration to track your gains.
              </p>
            </HoloCard>
          </div>
        </div>
      </section>

      {/* Scrolling Text Banner */}
      <div className="py-12 border-y border-white/5 bg-black overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
        <div className="flex animate-[scroll_20s_linear_infinite] whitespace-nowrap gap-12 text-6xl font-display font-black text-transparent opacity-70 select-none" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>
          <span>DISCIPLINE</span>
          <span>•</span>
          <span>RESILIENCE</span>
          <span>•</span>
          <span>GRIT</span>
          <span>•</span>
          <span>PERFORMANCE</span>
          <span>•</span>
          <span>DOMINANCE</span>
          <span>•</span>
          <span>DISCIPLINE</span>
          <span>•</span>
          <span>RESILIENCE</span>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter">
            READY TO <span className="text-primary text-glow">ASCEND?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            The only limit is the one you accept. Break through with a 14-day full access pass.
          </p>

          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-primary blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <NeonButton to="/memberships" className="text-xl px-12 py-6">
              Join The Elite
            </NeonButton>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
