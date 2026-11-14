
import { useState } from "react";
import {
    Clapperboard,
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    ShieldCheck,
    Film,
    BarChart3,
    Ticket,
    Building2,
    Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../Services/AdminServices";

function AdminLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        if (!email.trim() || !password.trim()) {
            setError("Please enter your email and password.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        try {
            setLoading(true)
            const response = await axiosInstance.get("/user/Singin", {
                params: {

                    "useremail": email,
                    "Role": "Admin",
                    "userpassword": password
                }
            })

            if (response.status == 200 || response.status == 201) {

                alert("Login sucesfull")
                console.log(response.data.token)
                sessionStorage.setItem("toekn", response.data.token)
                localStorage.setItem("user", JSON.stringify(response.data.data))
                setLoading(false)
                return window.location.href = "/admin/dashboard"
            }

        } catch (error) {
            setLoading(false)

        }

        // setLoading(false)
    };

    return (
        <>
            <div className="min-h-screen bg-[#080812] text-white flex flex-col lg:flex-row overflow-hidden">

                {/* LEFT BRANDING SECTION */}
                <section className="relative lg:w-1/2 min-h-[340px] lg:min-h-screen flex flex-col justify-between p-7 sm:p-10 lg:p-14 overflow-hidden">

                    {/* Background effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-[#111025] to-[#080812]" />

                    <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/20 blur-[120px] rounded-full" />

                    {/* Cinema background image */}
                    <div
                        className="absolute inset-0 opacity-20 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600')",
                        }}
                    />

                    <div className="relative z-10">

                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-xl bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-600/30">
                                <Clapperboard size={25} />
                            </div>

                            <div>
                                <h1 className="text-2xl font-bold tracking-wide">
                                    Cinevo<span className="text-violet-400">.</span>
                                </h1>
                                <p className="text-[10px] uppercase tracking-[3px] text-gray-400">
                                    Cinema Management
                                </p>
                            </div>
                        </div>

                        {/* Main content */}
                        <div className="mt-12 lg:mt-32 max-w-xl">

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-400/20 bg-violet-500/10 text-violet-300 text-xs mb-6">
                                <Sparkles size={14} />
                                Your Cinema. Your Control.
                            </div>

                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                                Manage Your
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                                    Cinema Experience
                                </span>
                            </h2>

                            <p className="mt-6 text-gray-300 leading-7 text-sm sm:text-base max-w-md">
                                A smarter way to manage theatres, movies, shows and bookings.
                                Everything your cinema business needs, in one place.
                            </p>

                        </div>

                        {/* Features */}
                        <div className="hidden sm:grid grid-cols-2 gap-4 mt-12 max-w-lg">

                            {[
                                { icon: Building2, title: "Theatre Management", desc: "Manage your cinemas" },
                                { icon: Film, title: "Movies & Shows", desc: "Control screenings" },
                                { icon: BarChart3, title: "Booking Analytics", desc: "Track performance" },
                                { icon: Ticket, title: "Revenue Monitoring", desc: "Monitor ticket sales" },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md hover:bg-white/[0.08] transition"
                                >
                                    <div className="w-10 h-10 shrink-0 rounded-xl bg-violet-500/20 text-violet-300 flex items-center justify-center">
                                        <item.icon size={20} />
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-semibold">{item.title}</h3>
                                        <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="relative z-10 hidden lg:flex items-center justify-between text-xs text-gray-500 mt-10">
                        <span>© 2026 Cinevo. All rights reserved.</span>
                        <span className="flex items-center gap-2">
                            <ShieldCheck size={15} />
                            Secure Admin Portal
                        </span>
                    </div>
                </section>

                {/* RIGHT LOGIN SECTION */}
                <section className="relative lg:w-1/2 min-h-[600px] lg:min-h-screen flex items-center justify-center px-6 py-12 sm:px-12">

                    <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c19] to-[#111020]" />

                    <div className="absolute top-20 right-10 w-64 h-64 bg-violet-600/10 blur-[100px] rounded-full" />

                    <div className="relative z-10 w-full max-w-md">

                        {/* Header */}
                        <div className="mb-10">

                            <div className="lg:hidden flex items-center gap-2 mb-10">
                                <Clapperboard className="text-violet-400" size={28} />
                                <span className="text-2xl font-bold">Cinevo.</span>
                            </div>

                            <div className="w-14 h-14 rounded-2xl bg-violet-500/15 border border-violet-400/20 flex items-center justify-center mb-7">
                                <Lock className="text-violet-400" size={25} />
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-bold">
                                Welcome Back
                            </h2>

                            <p className="text-gray-400 mt-3 text-sm">
                                Sign in to your Cinevo Admin Account.
                            </p>

                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address
                                </label>

                                <div className="relative">
                                    <Mail
                                        size={19}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                    />

                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="admin@cinevo.com"
                                        className="w-full h-14 pl-12 pr-4 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="text-sm font-medium text-gray-300">
                                        Password
                                    </label>
                                </div>

                                <div className="relative">
                                    <Lock
                                        size={19}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                    />

                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        className="w-full h-14 pl-12 pr-12 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-gray-600 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-violet-400 transition"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                                    </button>
                                </div>
                            </div>

                            {/* Remember and Forgot */}
                            <div className="flex items-center justify-between gap-3">

                                <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="w-4 h-4 accent-violet-600 rounded"
                                    />
                                    Remember me
                                </label>

                                <button
                                    type="button"
                                    className="text-sm text-violet-400 hover:text-violet-300 transition"
                                >
                                    Forgot password?
                                </button>

                            </div>

                            {/* Error message */}
                            {error && (
                                <p role="alert" className="text-sm text-red-400">
                                    {error}
                                </p>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="group w-full h-14 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 flex items-center justify-center gap-3 font-semibold shadow-lg shadow-violet-600/20 transition-all duration-300 hover:shadow-violet-600/40 disabled:opacity-60"
                            >
                                {loading ? (
                                    <>
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Signing in...
                                    </>
                                ) : (
                                    <>
                                        Sign In to Dashboard
                                        <ArrowRight
                                            size={19}
                                            className="group-hover:translate-x-1 transition-transform"
                                        />
                                    </>
                                )}
                            </button>

                        </form>

                        {/* Footer */}
                        <div className="mt-10 pt-6 border-t border-white/10">

                            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                                <ShieldCheck size={16} className="text-violet-400" />
                                Authorized theatre administrators only.
                            </div>

                            <p className="text-center text-sm text-gray-400 mt-6">
                                Don't have an admin account?{" "}
                                <Link
                                    to="/admin/signup"
                                    className="text-violet-400 font-semibold hover:text-violet-300 transition"
                                >
                                    Create Account
                                </Link>
                            </p>

                            <p className="text-center text-xs text-gray-500 mt-3">
                                New admin accounts require Platform Admin approval.
                            </p>

                            <p className="text-center text-xs text-gray-600 mt-6">
                                © 2026 Cinevo. All rights reserved.
                            </p>

                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default AdminLogin;
