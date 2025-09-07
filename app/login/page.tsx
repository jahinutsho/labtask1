import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-600 overflow-hidden">
      {/* 🔥 Background Glow Elements */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-3xl"></div>
      
      {/* 🪟 Glassmorphic Card */}
      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-10 relative z-10">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-lg">
          Welcome Back
        </h1>

        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-white/90 mb-2 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/60"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-white/90 mb-2 font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/60"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-lg shadow-lg hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="mt-8 text-center text-white/80">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-cyan-300 hover:underline font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
