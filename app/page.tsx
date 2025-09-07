"use client"
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-white">
      {/* 🔥 Animated Layered Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3c72] via-[#2a5298] to-[#0f2027] animate-gradient bg-[length:300%_300%]" />
      <div className="absolute inset-0 backdrop-blur-3xl bg-black/30" />

      {/* ✨ Decorative Gradient Rings */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-3xl animate-pulse" />

      {/* 🔝 Header */}
      <header className="absolute top-0 w-full flex justify-between items-center px-10 py-6 z-10">
        <h1 className="text-3xl font-extrabold tracking-wide text-white drop-shadow-xl">
          ⚡ NeoCorp
        </h1>
        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          <a href="#services" className="hover:text-pink-300 transition">Services</a>
          <a href="#about" className="hover:text-pink-300 transition">About</a>
          <a href="#contact" className="hover:text-pink-300 transition">Contact</a>
        </nav>
        <div className="space-x-4">
          <Link
            href="/login"
            className="px-5 py-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg shadow-pink-500/30 hover:scale-105 transition-transform"
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* 🎯 Hero Section */}
      <main className="z-10 text-center px-6 mt-28">
        <div className="relative max-w-5xl mx-auto">
          {/* 🔵 Glass Ring Border Effect */}
          <div className="absolute inset-0 rounded-3xl border border-white/20 blur-md" />
          <div className="relative p-12 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <h2 className="text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              The Future of <span className="text-pink-400">Innovation</span>
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Discover cutting-edge solutions designed to push your brand beyond limits.  
              NeoCorp delivers high-tech products for a hyper-connected world.
            </p>
            <div className="flex justify-center space-x-6">
              <Link
                href="/register"
                className="px-8 py-4 text-lg rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-110 transition-transform font-semibold shadow-lg shadow-pink-500/40"
              >
                Get Started
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 text-lg rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* 🔑 Custom Animations */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 18s ease infinite;
        }
      `}</style>
    </div>
  );
}
