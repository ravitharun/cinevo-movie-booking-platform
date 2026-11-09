
import { Clapperboard, Home, ArrowLeft, Ticket } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#09090F] flex items-center justify-center p-6">

            <div className="w-full max-w-3xl text-center">

                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <div className="absolute inset-0 bg-purple-600 blur-3xl opacity-20" />
                        <div className="relative w-24 h-24 rounded-3xl bg-[#171322]
              border border-purple-500/20 flex items-center justify-center">
                            <Clapperboard size={44} className="text-purple-400" />
                        </div>
                    </div>
                </div>

                <p className="text-purple-400 uppercase tracking-[5px] text-xs font-semibold">
                    Cinevo Admin Panel
                </p>

                <h1 className="text-[120px] sm:text-[160px] font-black
          leading-none tracking-tighter text-transparent bg-clip-text
          bg-gradient-to-b from-purple-300 to-purple-800">
                    404
                </h1>

                <div className="mt-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                        Scene Not Found!
                    </h2>

                    <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm leading-6">
                        Looks like this scene was removed from the script.
                        The page you are looking for doesn't exist or has been moved.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-3 mt-9">

                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center justify-center gap-2 px-6 py-3
            rounded-xl border border-white/10 text-gray-300
            hover:bg-white/5 transition-all"
                    >
                        <ArrowLeft size={17} />
                        Go Back
                    </button>

                    <button
                        onClick={() => navigate("/admin")}
                        className="flex items-center justify-center gap-2 px-6 py-3
            rounded-xl bg-purple-600 text-white font-medium
            hover:bg-purple-700 transition-all shadow-lg shadow-purple-900/20"
                    >
                        <Home size={17} />
                        Back to Dashboard
                    </button>

                </div>

                <div className="mt-16 flex items-center justify-center gap-2 text-gray-600 text-xs">
                    <Ticket size={15} />
                    <span>Every great movie deserves a way back.</span>
                </div>

                <p className="text-gray-700 text-xs mt-5">
                    © 2026 Cinevo. All rights reserved.
                </p>

            </div>
        </div>
    );
};

export default NotFound;
