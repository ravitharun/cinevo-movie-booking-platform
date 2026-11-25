
import { useNavigate } from "react-router-dom";

function Unauthorized() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4 py-10">

            <div className="w-full max-w-lg text-center">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                        <svg
                            className="w-12 h-12 sm:w-14 sm:h-14 text-red-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M12 9v4m0 4h.01M10.3 3.9L2.6 17.5A2 2 0 004.3 20h15.4a2 2 0 001.7-2.5L13.7 3.9a2 2 0 00-3.4 0z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Error Code */}
                <h1 className="text-6xl sm:text-8xl font-extrabold text-white tracking-wider">
                    403
                </h1>

                <h2 className="text-xl sm:text-3xl font-bold text-white mt-4">
                    Access Denied
                </h2>

                <p className="text-gray-400 text-sm sm:text-base mt-4 leading-7 max-w-md mx-auto">
                    Sorry! You don't have permission to access this page.
                    Please contact your administrator if you believe this is a mistake.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">

                    <button
                        onClick={() => navigate(-1)}
                        className="w-full sm:w-auto px-7 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition duration-200"
                    >
                        Go Back
                    </button>

                    <button
                        onClick={() => navigate("/")}
                        className="w-full sm:w-auto px-7 py-3 rounded-lg border border-gray-700 hover:bg-gray-800 text-gray-200 font-semibold transition duration-200"
                    >
                        Go Home
                    </button>

                </div>

                <p className="text-gray-600 text-xs mt-10">
                    Error Code: 403 | Forbidden Access
                </p>

            </div>
        </div>
    );
}

export default Unauthorized;
