
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell, User, LogOut, Settings, ChevronDown, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, signOut, isAdmin } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Events', path: '/events' },
    { name: 'Memberships', path: '/memberships' },
    { name: 'About', path: '/about' },
  ];

  const getAvatarLetter = () => {
    if (!user) return '';
    const metadataName = user.user_metadata?.username;
    if (metadataName && metadataName.length > 0) {
      return metadataName[0].toUpperCase();
    }
    return user.email?.[0]?.toUpperCase() || 'U';
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center px-6 py-3 rounded-2xl bg-[#161b1d]/95 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/50 ring-1 ring-white/5">

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              <div className="relative bg-surface border border-white/10 p-2 rounded-lg group-hover:border-primary/50 transition-colors duration-300">
                <Dumbbell className="h-5 w-5 text-white group-hover:text-primary transition-colors duration-300 transform group-hover:-rotate-12" />
              </div>
              <span className="font-display font-bold text-xl tracking-wide text-white">GRIT <span className="text-primary text-glow">X</span></span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/5 mr-4 backdrop-blur-sm">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`
                    relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300
                    ${location.pathname === link.path ? 'text-black' : 'text-gray-400 hover:text-white hover:bg-white/5'}
                  `}
                >
                  {location.pathname === link.path && (
                    <span className="absolute inset-0 bg-primary rounded-full shadow-[0_0_15px_rgba(14,169,95,0.4)]" style={{ zIndex: -1 }}></span>
                  )}
                  {link.name}
                </Link>
              ))}
            </div>

            {isAdmin && (
              <Link
                to="/admin"
                className="p-2 rounded-full bg-surface border border-white/10 text-gray-400 hover:text-white hover:border-primary/50 transition-all mr-2"
                title="Admin Dashboard"
              >
                <LayoutDashboard className="h-5 w-5" />
              </Link>
            )}

            {user ? (
              <div className="relative group">
                <button className="flex items-center gap-2 focus:outline-none pl-2 pr-1">
                  <div className="w-9 h-9 rounded-full bg-surface border border-white/10 flex items-center justify-center text-primary font-bold text-sm group-hover:border-primary/50 transition-all shadow-lg shadow-black/50">
                    {getAvatarLetter()}
                  </div>
                </button>

                <div className="absolute right-0 mt-4 w-56 bg-[#121212] border border-white/10 rounded-2xl shadow-xl shadow-black/80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                  <div className="p-3 space-y-1">
                    <div className="px-3 py-2 text-xs text-gray-500 uppercase tracking-wider font-bold">
                      Account
                    </div>
                    <Link
                      to="/profile"
                      className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      <Settings className="h-4 w-4 text-primary" />
                      Settings
                    </Link>
                    <button
                      onClick={signOut}
                      className="flex w-full items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-300 hover:bg-white/10 hover:text-red-400 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to="/signin"
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-primary transition-all hover:scale-105 shadow-neon"
              >
                <span className="hidden lg:inline">Sign In</span>
                <User className="h-4 w-4" />
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`
            md:hidden absolute left-0 right-0 mx-4 mt-2
            bg-[#161b1d]/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl shadow-black/80 ring-1 ring-white/5
            transition-all duration-300 ease-in-out origin-top z-40 overflow-hidden
            ${isOpen ? 'opacity-100 scale-y-100 translate-y-0 visible' : 'opacity-0 scale-y-95 -translate-y-2 invisible'}
          `}
        style={{ top: '100%' }}
      >
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`
                    flex items-center justify-center p-4 rounded-2xl border transition-all text-sm font-bold
                    ${location.pathname === link.path
                    ? 'bg-primary text-black border-primary'
                    : 'bg-surface text-gray-300 border-white/5 hover:border-white/20'}
                  `}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="h-px bg-white/10 my-4" />

          {user ? (
            <div className="space-y-3">
              <Link
                to="/profile"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-4 rounded-2xl bg-surface border border-white/10 text-white"
              >
                <span className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">
                    {getAvatarLetter()}
                  </div>
                  My Profile
                </span>
                <Settings className="w-4 h-4 text-gray-400" />
              </Link>
              <button
                onClick={() => { signOut(); setIsOpen(false); }}
                className="w-full p-4 rounded-2xl bg-red-500/10 text-red-500 border border-red-500/20 font-bold"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link
              to="/signin"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center p-4 rounded-2xl bg-white text-black font-bold"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
