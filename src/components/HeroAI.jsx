import React from 'react'

function Hero() {
  return (
    <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#00f2fe] min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Futuristic Animated Background Waves */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] z-0 opacity-60 animate-spin-slow pointer-events-none">
        <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M300,550 Q400,500 500,300 Q400,100 300,50 Q200,100 100,300 Q200,500 300,550Z" fill="url(#wave1)" filter="url(#blur1)" />
          <defs>
            <radialGradient id="wave1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#2c5364" stopOpacity="0.2" />
            </radialGradient>
            <filter id="blur1">
              <feGaussianBlur stdDeviation="30" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] z-0 opacity-50 animate-pulse-slow pointer-events-none">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M250,450 Q350,400 450,250 Q350,100 250,50 Q150,100 50,250 Q150,400 250,450Z" fill="url(#wave2)" filter="url(#blur2)" />
          <defs>
            <radialGradient id="wave2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0f2027" stopOpacity="0.1" />
            </radialGradient>
            <filter id="blur2">
              <feGaussianBlur stdDeviation="25" />
            </filter>
          </defs>
        </svg>
      </div>
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between px-6 gap-12">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_0_20px_cyan] mb-6">
            Welcome to <span className="text-cyan-400">The Future</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/80 mb-8 max-w-xl mx-auto md:mx-0">
            Experience next-gen web design with neon gradients, glassmorphism, and smooth animations. Build your vision with <span className="text-cyan-300 font-semibold">NEONIX</span>.
          </p>
          <a href="#" className="inline-block px-8 py-3 bg-cyan-400 text-white font-bold rounded-full shadow-lg hover:bg-cyan-300 transition-all duration-300 text-lg tracking-wide animate-glow">
            Get Started
          </a>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end animate-float">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl bg-white/10 backdrop-blur-lg border-2 border-cyan-400/30 shadow-2xl flex items-center justify-center overflow-hidden">
            {/* Futuristic SVG illustration */}
            <svg className="w-48 h-48 md:w-64 md:h-64 animate-pulse-slow" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="#00f2fe" fillOpacity="0.15" />
              <circle cx="100" cy="100" r="60" fill="#2c5364" fillOpacity="0.25" />
              <circle cx="100" cy="100" r="40" fill="#0f2027" fillOpacity="0.5" />
              <circle cx="100" cy="100" r="20" fill="#00f2fe" fillOpacity="0.7" />
              <circle cx="100" cy="100" r="8" fill="#fff" />
            </svg>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none animate-glow-box" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
