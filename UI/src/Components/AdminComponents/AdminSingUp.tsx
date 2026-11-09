
import { useState } from "react";
import {
  Clapperboard,
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  Building2,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Film,
} from "lucide-react";
import { Link } from "react-router-dom";

function AdminSignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#080812] text-white flex flex-col lg:flex-row">

      {/* LEFT SECTION */}
      <section className="relative lg:w-5/12 min-h-[280px] lg:min-h-screen flex flex-col justify-between p-8 lg:p-12 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-[#111025] to-[#080812]" />

        <div className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600')",
          }}
        />

        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-violet-600/20 blur-[120px] rounded-full" />

        <div className="relative z-10">

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-violet-600 flex items-center justify-center">
              <Clapperboard size={25} />
            </div>

            <div>
              <h1 className="text-2xl font-bold">
                Cinevo<span className="text-violet-400">.</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[3px] text-gray-400">
                Cinema Management
              </p>
            </div>
          </div>

          <div className="mt-16 lg:mt-32 max-w-md">

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-400/20 bg-violet-500/10 text-violet-300 text-xs mb-6">
              <Film size={14} />
              Join the Cinevo Network
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Bring Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                Cinema Online.
              </span>
            </h2>

            <p className="mt-6 text-gray-300 leading-7 text-sm">
              Register your theatre with Cinevo and simplify
              movie scheduling, ticket bookings and cinema
              management from one powerful platform.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Manage multiple theatre screens",
                "Organize movies and show timings",
                "Monitor bookings and revenue",
                "Reach more movie lovers",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-violet-500/20 text-violet-300 flex items-center justify-center text-xs">
                    ✓
                  </div>
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        <p className="relative z-10 hidden lg:block text-xs text-gray-500">
          © 2026 Cinevo. All rights reserved.
        </p>
      </section>

      {/* RIGHT SIGNUP SECTION */}
      <section className="lg:w-7/12 flex items-center justify-center px-5 py-12 sm:px-10 lg:px-16">

        <div className="w-full max-w-xl">

          <div className="mb-8">
            <div className="w-14 h-14 rounded-2xl bg-violet-500/15 border border-violet-400/20 flex items-center justify-center mb-6">
              <Building2 size={26} className="text-violet-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold">
              Create Admin Account
            </h2>

            <p className="text-gray-400 text-sm mt-3">
              Register your theatre business on Cinevo.
            </p>
          </div>

          <form className="space-y-5">

            {/* PERSONAL DETAILS */}
            <div>
              <h3 className="text-sm font-semibold text-violet-300 uppercase tracking-wider mb-4">
                Personal Information
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">

                <div>
                  <label className="text-sm text-gray-300 block mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full h-12 pl-11 pr-4 rounded-xl bg-white/[0.04] border border-white/10 outline-none focus:border-violet-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-300 block mb-2">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="tel"
                      placeholder="Enter mobile number"
                      className="w-full h-12 pl-11 pr-4 rounded-xl bg-white/[0.04] border border-white/10 outline-none focus:border-violet-500 transition"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm text-gray-300 block mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="email"
                      placeholder="admin@example.com"
                      className="w-full h-12 pl-11 pr-4 rounded-xl bg-white/[0.04] border border-white/10 outline-none focus:border-violet-500 transition"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* THEATRE DETAILS */}
            <div className="pt-5 border-t border-white/10">

              <h3 className="text-sm font-semibold text-violet-300 uppercase tracking-wider mb-4">
                Theatre Information
              </h3>

              <div className="space-y-4">

                <div>
                  <label className="text-sm text-gray-300 block mb-2">
                    Theatre Name
                  </label>
                  <div className="relative">
                    <Building2 size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Enter theatre name"
                      className="w-full h-12 pl-11 pr-4 rounded-xl bg-white/[0.04] border border-white/10 outline-none focus:border-violet-500 transition"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">

                  <div>
                    <label className="text-sm text-gray-300 block mb-2">
                      City
                    </label>
                    <div className="relative">
                      <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        placeholder="Enter city"
                        className="w-full h-12 pl-11 pr-4 rounded-xl bg-white/[0.04] border border-white/10 outline-none focus:border-violet-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-300 block mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      placeholder="Enter state"
                      className="w-full h-12 px-4 rounded-xl bg-white/[0.04] border border-white/10 outline-none focus:border-violet-500 transition"
                    />
                  </div>

                </div>

                <div>
                  <label className="text-sm text-gray-300 block mb-2">
                    Theatre Address
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Enter complete theatre address"
                    className="w-full p-4 rounded-xl bg-white/[0.04] border border-white/10 outline-none focus:border-violet-500 transition resize-none"
                  />
                </div>

              </div>
            </div>

            {/* PASSWORD */}
            <div className="pt-5 border-t border-white/10">

              <h3 className="text-sm font-semibold text-violet-300 uppercase tracking-wider mb-4">
                Account Security
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">

                <div>
                  <label className="text-sm text-gray-300 block mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create password"
                      className="w-full h-12 pl-11 pr-11 rounded-xl bg-white/[0.04] border border-white/10 outline-none focus:border-violet-500 transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-violet-400"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-300 block mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="w-full h-12 pl-11 pr-4 rounded-xl bg-white/[0.04] border border-white/10 outline-none focus:border-violet-500 transition"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full h-14 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 flex items-center justify-center gap-3 font-semibold shadow-lg shadow-violet-600/20 transition"
            >
              Create Admin Account
              <ArrowRight size={19} />
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <ShieldCheck size={16} className="text-violet-400" />
              Your registration will be reviewed by Cinevo Platform Admin.
            </div>

            <p className="text-center text-sm text-gray-400 pt-2">
              Already have an account?{" "}
              <Link
                to="/admin/login"
                className="text-violet-400 font-semibold hover:text-violet-300"
              >
                Sign In
              </Link>
            </p>

          </form>

        </div>
      </section>
    </div>
  );
}

export default AdminSignUp;
