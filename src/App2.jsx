import React, { useState, useEffect } from 'react';
// const express = require('express');
// const router = express.Router();


// router.route("/app2").get((req, res) => {
//   res.send("This is App2 route");
// });





// Confetti component
const Confetti = ({ trigger }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (trigger) {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: -10,
        color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
        size: Math.random() * 8 + 4,
        speedX: (Math.random() - 0.5) * 4,
        speedY: Math.random() * 3 + 2,
      }));
      setParticles(newParticles);

      const animationInterval = setInterval(() => {
        setParticles(prev => prev.map(particle => ({
          ...particle,
          x: particle.x + particle.speedX,
          y: particle.y + particle.speedY,
          speedY: particle.speedY + 0.1,
        })).filter(particle => particle.y < 110));
      }, 50);

      setTimeout(() => {
        clearInterval(animationInterval);
        setParticles([]);
      }, 3000);

      return () => clearInterval(animationInterval);
    }
  }, [trigger]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};

// Fireworks component for celebration
const Fireworks = ({ trigger }) => {
  const [fireworks, setFireworks] = useState([]);

  useEffect(() => {
    if (trigger) {
      const newFireworks = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: 20 + (i * 10),
        y: 20 + (i % 3) * 30,
        particles: Array.from({ length: 15 }, (_, j) => ({
          id: j,
          angle: (j * 24) * (Math.PI / 180),
          speed: 2 + Math.random() * 3,
          color: `hsl(${Math.random() * 360}, 100%, 60%)`,
          size: 3 + Math.random() * 4,
        }))
      }));
      
      setFireworks(newFireworks);
      
      setTimeout(() => {
        setFireworks([]);
      }, 2000);
    }
  }, [trigger]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {fireworks.map(firework => 
        firework.particles.map(particle => (
          <div
            key={`${firework.id}-${particle.id}`}
            className="absolute rounded-full"
            style={{
              left: `${firework.x + Math.cos(particle.angle) * particle.speed * 20}%`,
              top: `${firework.y + Math.sin(particle.angle) * particle.speed * 20}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              animation: `firework-explosion 2s ease-out forwards`,
            }}
          />
        ))
      )}
    </div>
  );
};

// Screen flash component
const ScreenFlash = ({ trigger }) => {
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    if (trigger) {
      setIsFlashing(true);
      setTimeout(() => setIsFlashing(false), 300);
    }
  }, [trigger]);

  if (!isFlashing) return null;

  return (
    <div className="fixed inset-0 bg-white pointer-events-none z-40" style={{
      animation: 'screen-flash 0.3s ease-out'
    }} />
  );
};

// Name Input Component
const NameInput = ({ name, setName, onSubmit }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && name.trim()) {
      onSubmit();
    }
  };

  return (
    <div className="mb-8 flex flex-col items-center space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter your name"
        className="w-full max-w-md px-6 py-4 text-xl text-center border-4 border-pink-400 rounded-full bg-black bg-opacity-50 backdrop-blur-sm text-white placeholder-gray-300 shadow-lg focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500 focus:ring-opacity-30 transition-all duration-300"
        style={{
          boxShadow: '0 10px 25px rgba(236, 72, 153, 0.2)'
        }}
      />
      {name.trim() && (
        <button
          onClick={onSubmit}
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 animate-pulse hover:animate-none"
          style={{
            boxShadow: '0 10px 25px rgba(236, 72, 153, 0.3)'
          }}
        >
          🎉 Celebrate! 🎉
        </button>
      )}
    </div>
  );
};

// Hero Section Component
const HeroSection = ({ name }) => {
  const displayName = name.trim() ? `, ${name}` : '';
  
  return (
    <div className="text-center mb-12">
      <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6 animate-bounce">
        Happy Birthday{displayName}! 🎉
      </h1>
      <div className="flex justify-center items-center space-x-4 text-4xl md:text-6xl">
        <span className="animate-spin">🎂</span>
        <span className="animate-pulse">🎈</span>
        <span className="animate-bounce">🎁</span>
        <span className="animate-pulse">🎈</span>
        <span className="animate-spin">🎂</span>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [name, setName] = useState('');
  const [isNameComplete, setIsNameComplete] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [prevNameLength, setPrevNameLength] = useState(0);

  // Handle manual submission via button or Enter key
  const handleSubmit = () => {
    if (name.trim()) {
      setIsButtonPressed(true);
      setShowFlash(prev => !prev);
      setShowFireworks(prev => !prev);
      setShowConfetti(prev => !prev);
      
      // Add screen shake effect
      document.body.style.animation = 'screen-shake 0.5s ease-in-out';
      setTimeout(() => {
        document.body.style.animation = '';
      }, 500);
      
      setTimeout(() => {
        setIsNameComplete(true);
      }, 500);
    }
  };

  // Handle name completion (when user stops typing for 3 seconds)
  useEffect(() => {
    if (name.trim().length > 2 && !isButtonPressed) {
      const timer = setTimeout(() => {
        setIsNameComplete(true);
        setShowConfetti(prev => !prev);
      }, 3000);

      return () => clearTimeout(timer);
    } else if (!name.trim()) {
      setIsNameComplete(false);
      setIsButtonPressed(false);
    }
  }, [name, isButtonPressed]);

  // Trigger confetti when user starts typing or adds more characters
  useEffect(() => {
    if (name.length > prevNameLength && name.trim() && !isButtonPressed) {
      setShowConfetti(prev => !prev);
    }
    setPrevNameLength(name.length);
  }, [name, prevNameLength, isButtonPressed]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Animated Background with Stars and Particles */}
      <div className="absolute inset-0">
        {/* Twinkling Stars */}
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `star-twinkle ${2 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Floating Particles */}
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              background: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
              animation: `particle-float ${8 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        
        {/* Moving Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-10"
            style={{
              top: '10%', 
              left: '20%',
              animation: 'slow-rotate 20s linear infinite'
            }}
          ></div>
          <div 
            className="absolute w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-10"
            style={{
              top: '60%', 
              right: '10%',
              animation: 'slow-rotate-reverse 25s linear infinite',
              animationDelay: '2s'
            }}
          ></div>
          <div 
            className="absolute w-64 h-64 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full opacity-10"
            style={{
              bottom: '20%', 
              left: '10%',
              animation: 'slow-rotate 20s linear infinite',
              animationDelay: '4s'
            }}
          ></div>
        </div>
      </div>

      {/* Floating Emojis */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute top-10 left-10 text-6xl" style={{animation: 'emoji-float 3s ease-in-out infinite'}}>🎈</div>
        <div className="absolute top-20 right-20 text-5xl" style={{animation: 'emoji-float 3s ease-in-out infinite', animationDelay: '1s'}}>🎂</div>
        <div className="absolute bottom-20 left-20 text-4xl" style={{animation: 'emoji-float 3s ease-in-out infinite', animationDelay: '2s'}}>🎁</div>
        <div className="absolute bottom-10 right-10 text-6xl" style={{animation: 'emoji-float 3s ease-in-out infinite', animationDelay: '0.5s'}}>🎉</div>
        <div className="absolute top-1/2 left-5 text-5xl" style={{animation: 'emoji-float 3s ease-in-out infinite', animationDelay: '1.5s'}}>🎈</div>
        <div className="absolute top-1/3 right-5 text-4xl" style={{animation: 'emoji-float 3s ease-in-out infinite', animationDelay: '2.5s'}}>🧁</div>
        <div className="absolute top-1/4 left-1/3 text-3xl" style={{animation: 'emoji-float 3s ease-in-out infinite', animationDelay: '3s'}}>⭐</div>
        <div className="absolute bottom-1/3 right-1/4 text-4xl" style={{animation: 'emoji-float 3s ease-in-out infinite', animationDelay: '3.5s'}}>✨</div>
      </div>

      <Confetti trigger={showConfetti} />
      <Fireworks trigger={showFireworks} />
      <ScreenFlash trigger={showFlash} />
      
      <div className="relative z-10 w-full max-w-4xl">
        {!isNameComplete && <NameInput name={name} setName={setName} onSubmit={handleSubmit} />}
        <HeroSection name={name} />
        
        {name.trim() && (
          <div className="text-center">
            <p className="text-2xl text-white font-semibold mb-4 animate-pulse">
              Hope your special day is wonderful! 🌟
            </p>
            <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-2xl p-6 border border-purple-500 border-opacity-30 shadow-lg">
              <p className="text-lg text-white">
                Wishing you joy, laughter, and all your favorite things on your birthday! 🎊
              </p>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes star-twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes particle-float {
          0% { 
            transform: translateY(100vh) rotate(0deg); 
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            transform: translateY(-100px) rotate(360deg); 
            opacity: 0;
          }
        }
        
        @keyframes slow-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes slow-rotate-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes emoji-float {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            filter: drop-shadow(0 0 10px currentColor);
          }
          50% { 
            transform: translateY(-20px) scale(1.1); 
            filter: drop-shadow(0 0 20px currentColor);
          }
        }
        
        @keyframes firework-explosion {
          0% { 
            transform: scale(1); 
            opacity: 1; 
          }
          100% { 
            transform: scale(0); 
            opacity: 0; 
          }
        }
        
        @keyframes screen-flash {
          0% { opacity: 0; }
          50% { opacity: 0.8; }
          100% { opacity: 0; }
        }
        
        @keyframes screen-shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
          20%, 40%, 60%, 80% { transform: translateX(2px); }
        }
      `}</style>
    </div>
  );
};

export default App;