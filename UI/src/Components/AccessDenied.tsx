
import { useNavigate } from "react-router-dom";
import {
    Clapperboard,
    ShieldAlert,
    ArrowLeft,
    Home,
    Film,
    TicketX,
    Star
} from "lucide-react";

const AccessDenied = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-[100svh] bg-gray-950 text-white
      flex flex-col">

            {/* Navbar */}
            <nav className="relative z-20 flex items-center
        justify-between px-5 sm:px-8 md:px-14 py-4
        bg-gray-950/90 backdrop-blur-md
        border-b border-white/10">

                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl
            bg-violet-600 flex items-center justify-center">
                        <Clapperboard size={23} />
                    </div>

                    <h1 className="text-xl sm:text-2xl
            font-extrabold tracking-widest">
                        CINEVO
                    </h1>
                </div>

                <div className="hidden sm:flex items-center
          gap-2 text-gray-400 text-sm">
                    <Star className="text-yellow-400" size={17} />
                    Your Cinema. Your Experience.
                </div>

            </nav>

            {/* Hero Background */}
            <main
                className="relative flex flex-1 items-center
          justify-center bg-cover bg-center bg-no-repeat
          px-4 py-12 sm:px-6 sm:py-14
          lg:py-8"

                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=2000&q=85')"
                }}
            >

                {/* Background Overlay */}
                <div className="absolute inset-0
          bg-gradient-to-b from-gray-950/80
          via-gray-950/90 to-gray-950" />

                {/* Content */}
                <div className="relative z-10 w-full
          max-w-3xl mx-auto text-center">

                    {/* Error Badge */}
                    <div className="inline-flex items-center
            gap-2 px-4 py-2 rounded-full
            bg-violet-500/10 border border-violet-400/30
            text-violet-300 text-xs sm:text-sm mb-6">

                        <ShieldAlert size={16} />
                        ERROR 403 · ACCESS RESTRICTED
                    </div>

                    {/* Error Icon */}
                    <div className="mx-auto mb-6 flex
            h-20 w-20 sm:h-24 sm:w-24
            items-center justify-center
            rounded-2xl border border-violet-400/30
            bg-violet-500/10 backdrop-blur-md
            shadow-xl shadow-violet-900/20">

                        <TicketX className="w-10 h-10
              sm:w-12 sm:h-12 text-violet-300" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-5xl
            md:text-6xl font-extrabold leading-tight">

                        Oops! Page
                        <span className="block mt-2
              bg-gradient-to-r from-violet-400
              to-blue-400 bg-clip-text text-transparent">
                            Access Denied
                        </span>

                    </h2>

                    {/* Description */}
                    <p className="max-w-xl mx-auto mt-5
            text-sm sm:text-base md:text-lg
            text-gray-300 leading-7 sm:leading-8">

                        Looks like you don't have permission
                        to access this page. Please sign in
                        with an authorized account to continue
                        your Cinevo experience.

                    </p>

                    {/* Info */}
                    <div className="max-w-lg mx-auto mt-8
            flex items-center gap-4 text-left
            rounded-2xl border border-white/15
            bg-gray-900/70 backdrop-blur-xl
            p-4 sm:p-5">

                        <div className="shrink-0 w-12 h-12
              rounded-xl bg-violet-500/15
              flex items-center justify-center">

                            <Film className="text-violet-300"
                                size={25} />
                        </div>

                        <div>
                            <h3 className="text-sm sm:text-base
                font-semibold text-white">
                                Your next movie awaits!
                            </h3>

                            <p className="text-xs sm:text-sm
                text-gray-400 mt-1 leading-5">
                                Explore amazing movies and book
                                your favourite cinema seats.
                            </p>
                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col
            sm:flex-row items-center
            justify-center gap-4 mt-9">

                        <button
                            onClick={() => navigate("/movies")}
                            className="w-full sm:w-auto min-w-48
                flex items-center justify-center
                gap-2 bg-violet-600 hover:bg-violet-700
                text-white font-semibold px-7 py-3.5
                rounded-xl transition-all duration-300
                shadow-lg shadow-violet-900/30
                hover:-translate-y-1">

                            <Home size={18} />
                            Explore Movies
                        </button>

                        <button
                            onClick={() => navigate(-1)}
                            className="w-full sm:w-auto min-w-48
                flex items-center justify-center
                gap-2 border border-white/20
                bg-white/5 hover:bg-white/10
                text-white font-semibold px-7 py-3.5
                rounded-xl transition-all duration-300">

                            <ArrowLeft size={18} />
                            Go Back
                        </button>

                    </div>

                    {/* Bottom Text */}
                    <div className="mt-10 sm:mt-12">
                        <p className="text-gray-400 text-xs
              sm:text-sm tracking-wide">
                            ONE PLATFORM. ENDLESS MOVIE EXPERIENCES.
                        </p>
                    </div>

                </div>
            </main>

            {/* Footer */}
            <footer className="relative z-10 bg-black
        border-t border-white/10 py-5 px-5 text-center">

                <div className="flex items-center
          justify-center gap-2">
                    <Film className="text-violet-400" size={20} />

                    <h2 className="text-white font-bold
            tracking-widest">
                        CINEVO
                    </h2>
                </div>

                <p className="text-gray-500 text-xs sm:text-sm mt-2">
                    Your Cinema. Your Experience.
                </p>

                <p className="text-gray-600 text-xs mt-3">
                    © 2026 Cinevo. All rights reserved.
                </p>

            </footer>

        </div>
    );
};

export default AccessDenied;
