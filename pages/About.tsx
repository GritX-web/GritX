import React from 'react';
import { Trophy, Zap, Users, TrendingUp, MapPin, Target, Award, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-bg min-h-screen text-gray-100 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white animate-fade-in leading-tight">
            Redefining the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">
              Athletic Ecosystem
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            From boutique training center to multi-discipline performance hub. We are the space where structure meets science, and potential meets performance.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 space-y-24 pb-24">

        {/* Mission / Vision Split */}
        <section className="grid md:grid-cols-2 gap-12 items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-primary uppercase text-sm tracking-wider font-bold">
              <Target className="w-5 h-5" />
              <span>Our Purpose</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Unlock Your True Potential
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                GRIT X was built because good enough wasn't enough. We saw a gap between potential and performance, and filled it with elite-grade turf arenas, high-performance labs, and collaborative spaces.
              </p>
              <p>
                Whether you're a grassroots talent or a corporate team, we provide the infrastructure and community to elevate your game.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl md:translate-x-4 md:translate-y-4 border border-white/5" />
            <div className="glass-card p-8 rounded-2xl relative border border-white/10 shadow-neon-strong">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1 text-center p-4 bg-white/5 rounded-xl">
                  <h3 className="text-3xl font-display font-bold text-white">3+</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Arenas</p>
                </div>
                <div className="space-y-1 text-center p-4 bg-white/5 rounded-xl">
                  <h3 className="text-3xl font-display font-bold text-white">15+</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Coaches</p>
                </div>
                <div className="space-y-1 text-center p-4 bg-white/5 rounded-xl">
                  <h3 className="text-3xl font-display font-bold text-white">500+</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Members</p>
                </div>
                <div className="space-y-1 text-center p-4 bg-white/5 rounded-xl">
                  <h3 className="text-3xl font-display font-bold text-white">24/7</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Access</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Athletes Choose GRIT X */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Why Choose GRIT X?</h2>
            <p className="text-gray-400 max-w-xl mx-auto">More than just a gym. It's a complete ecosystem designed for growth.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'Elite Coaching',
                text: 'Train with certified experts who understand sport-specific needs and long-term development.'
              },
              {
                icon: Zap,
                title: 'Next-Gen Tech',
                text: 'Calibrated equipment, recovery zones, and performance tracking to optimize every session.'
              },
              {
                icon: Users,
                title: 'Community',
                text: 'Join a thriving network of athletes, families, and professionals growing together.'
              },
              {
                icon: TrendingUp,
                title: 'Real Results',
                text: 'Data-driven programs that turn hard work into measurable improvements on the field.'
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group bg-surface border border-white/5 p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-neon relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Meet the Team */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
            <div className="space-y-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">The Leadership</h2>
              <p className="text-gray-400 max-w-md">Visionaries and veterans guiding the next generation of athletes.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Rohit Malhotra',
                role: 'Founder & Strategist',
                bio: 'Former athlete turned entrepreneur. 15+ years crafting the vision behind GRIT X.',
                color: 'from-blue-500/20 to-purple-500/20'
              },
              {
                name: 'Simran Kaur',
                role: 'COO',
                bio: 'The operational backbone. Ensures seamless execution across all facilities and programs.',
                color: 'from-primary/20 to-emerald-500/20'
              },
              {
                name: 'Aman Verma',
                role: 'Head Coach',
                bio: 'National-level specialist in youth development and advanced performance training.',
                color: 'from-orange-500/20 to-red-500/20'
              },
            ].map((member) => (
              <div key={member.name} className="glass-card p-6 rounded-2xl border border-white/10 space-y-4 hover:bg-white/[0.02] transition-colors">
                <div className={`h-32 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-4`}>
                  <Shield className="w-12 h-12 text-white/20" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-primary text-sm font-medium tracking-wide uppercase">{member.role}</p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  "{member.bio}"
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Location Map */}
        <section className="rounded-3xl overflow-hidden border border-white/10 relative group">
          <div className="absolute top-4 left-4 z-10 bg-bg/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg max-w-xs">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="text-white font-bold mb-1">Visit GRIT X</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Shop No. 4, Icon Plaza, Sector 84<br />
                  Gurugram, Haryana
                </p>
              </div>
            </div>
          </div>
          <iframe
            title="GRIT X Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.085591920844!2d77.0266!3d28.3572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDIxJzI1LjkiTiA3N8KwMDEnMzYuMyJF!5e0!3m2!1sen!2sin!4v0000000000"
            className="w-full h-96 grayscale invert contrast-[1.1] opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

      </div>
    </div>
  );
};

export default About;
