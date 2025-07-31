import React from 'react'

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#0f2027] via-[#2c5364] to-[#00f2fe] shadow-xl rounded-b-3xl border-b-2 border-cyan-400/40 backdrop-blur-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo with Icon */}
          <div className="flex items-center space-x-3">
            <div className="bg-cyan-400 rounded-full p-2 shadow-lg animate-pulse">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="text-3xl font-extrabold tracking-widest text-white drop-shadow-[0_0_10px_cyan] select-none">NEONIX</span>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10">
            <a href="#" className="relative text-lg font-semibold text-white px-4 py-2 transition-all duration-300 rounded-xl hover:bg-cyan-400/20 hover:text-cyan-300 shadow-md hover:shadow-cyan-400/40 before:absolute before:inset-0 before:rounded-xl before:opacity-0 hover:before:opacity-100 before:bg-cyan-400/10 before:transition-all before:duration-300">Home</a>
            <a href="#" className="relative text-lg font-semibold text-white px-4 py-2 transition-all duration-300 rounded-xl hover:bg-cyan-400/20 hover:text-cyan-300 shadow-md hover:shadow-cyan-400/40 before:absolute before:inset-0 before:rounded-xl before:opacity-0 hover:before:opacity-100 before:bg-cyan-400/10 before:transition-all before:duration-300">Features</a>
            <a href="#" className="relative text-lg font-semibold text-white px-4 py-2 transition-all duration-300 rounded-xl hover:bg-cyan-400/20 hover:text-cyan-300 shadow-md hover:shadow-cyan-400/40 before:absolute before:inset-0 before:rounded-xl before:opacity-0 hover:before:opacity-100 before:bg-cyan-400/10 before:transition-all before:duration-300">Pricing</a>
            <a href="#" className="relative text-lg font-semibold text-white px-4 py-2 transition-all duration-300 rounded-xl hover:bg-cyan-400/20 hover:text-cyan-300 shadow-md hover:shadow-cyan-400/40 before:absolute before:inset-0 before:rounded-xl before:opacity-0 hover:before:opacity-100 before:bg-cyan-400/10 before:transition-all before:duration-300">Contact</a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-cyan-300 hover:text-white focus:outline-none">
              <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
