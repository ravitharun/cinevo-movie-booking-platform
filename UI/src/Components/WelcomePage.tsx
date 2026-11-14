

import { useNavigate } from "react-router-dom";
import {
  FaTicketAlt,
  FaBuilding,
  FaUserShield,
  FaArrowRight,
  FaFilm,
  FaStar,
  FaPlayCircle,
} from "react-icons/fa";
import { Clapperboard } from "lucide-react";

function WelcomePage() {
  const navigate = useNavigate();

  const roles = [
    {
      title: "Customer",
      subtitle: "Enjoy the movies",
      isdeveloped: false,
      description:
        "Discover the latest movies, explore theatres, book your favourite seats and enjoy an unforgettable cinema experience.",
      icon: <FaTicketAlt />,
      button: "Continue as Customer",
      path: "/user/login",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Theatre Admin",
      subtitle: "Manage your cinema", isdeveloped: true,
      description:
        "Register your theatre, manage screens, schedule movie shows and monitor your theatre bookings.",
      icon: <FaBuilding />,
      button: "Continue as Theatre Admin",
      path: "/admin/login",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Platform Admin",
      subtitle: "Control the platform", isdeveloped: false,
      description:
        "Manage theatre registrations, approve requests, monitor users and oversee the entire Cinevo platform.",
      icon: <FaUserShield />,
      button: "Continue as Platform Admin",
      path: "/admin/login",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <>

      {/* </> */}
      <div className="min-h-screen bg-gray-950 text-white">

        {/* Navbar */}
        <nav className="relative z-20 flex items-center justify-between px-6 md:px-14 py-5 bg-gray-950/90 backdrop-blur-md border-b border-white/10">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center">
              <Clapperboard size={23} />
            </div>

            <h1 className="text-2xl font-extrabold tracking-widest">
              CINEVO
            </h1>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-gray-400 text-sm">
            <FaStar className="text-yellow-400" />
            Your Cinema. Your Experience.
          </div>

        </nav>

        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=2000&q=85')",
          }}
        >

          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/85 to-gray-950" />

          <div className="relative z-10 px-5 py-20 md:py-24">

            {/* Welcome Content */}
            <div className="max-w-3xl mx-auto text-center">

              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm mb-7">
                <FaStar className="text-yellow-400" />
                Your Complete Cinema Platform
              </div>

              <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Experience the
                <span className="block text-red-500 mt-2">
                  Magic of Cinema
                </span>
              </h2>

              <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mt-6 leading-8">
                Discover amazing movies, book your favourite seats
                and manage cinema operations with Cinevo.
                Everything you need, all in one place.
              </p>

              <div className="flex items-center justify-center gap-2 text-gray-400 mt-6 text-sm">
                <FaPlayCircle className="text-red-500" />
                Choose your role and get started
              </div>

            </div>

            {/* Role Selection Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-6xl mx-auto mt-16">

              {roles.map((role, index) => (
                <div
                  key={index}
                  className="group bg-gray-900/70 backdrop-blur-xl
                border border-white/15 rounded-2xl p-7
                shadow-2xl hover:bg-gray-800/80
                hover:border-red-500/50 hover:-translate-y-2
                transition-all duration-300 flex flex-col"
                >

                  {/* Role Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br
                  ${role.color} text-white flex items-center
                  justify-center text-2xl shadow-lg mb-6
                  group-hover:scale-110 transition-transform duration-300`}
                  >
                    {role.icon}
                  </div>

                  {/* Subtitle */}
                  <p className="text-red-400 text-xs font-bold uppercase tracking-widest">
                    {role.subtitle}
                  </p>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mt-2">
                    {role.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-7 mt-4 flex-grow">
                    {role.description}
                  </p>

                  {/* Button */}
                  <button
                    onClick={() => navigate(role.path)}
                    // isdeveloped
                    className={`mt-8 w-full flex items-center justify-center
                  gap-3 bg-red-600 hover:bg-red-700
                  text-white font-semibold py-3.5 px-4 rounded-xl
                  transition-all duration-300 shadow-lg shadow-red-900/20 ${role.isdeveloped ? "cursor-pointer" : "cursor-not-allowed"}`}
                    disabled={!role.isdeveloped}
                  >
                    {role.button}

                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>

                </div>
              ))}

            </div>

            {/* Bottom Text */}
            <div className="text-center mt-12">
              <p className="text-gray-400 text-sm">
                One platform. Three experiences. Endless possibilities.
              </p>
            </div>

          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-950 px-6 py-16 border-t border-white/10">

          <div className="max-w-6xl mx-auto">

            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Everything You Need for Cinema
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">

              <div className="group">
                <FaFilm className="text-red-500 text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform" />

                <h3 className="text-white font-semibold text-lg">
                  Discover Movies
                </h3>

                <p className="text-gray-400 text-sm mt-3 leading-6">
                  Explore movies, upcoming releases and cinema experiences.
                </p>
              </div>

              <div className="group">
                <FaTicketAlt className="text-red-500 text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform" />

                <h3 className="text-white font-semibold text-lg">
                  Easy Bookings
                </h3>

                <p className="text-gray-400 text-sm mt-3 leading-6">
                  Find available shows and reserve your favourite seats.
                </p>
              </div>

              <div className="group">
                <FaBuilding className="text-red-500 text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform" />

                <h3 className="text-white font-semibold text-lg">
                  Smart Management
                </h3>

                <p className="text-gray-400 text-sm mt-3 leading-6">
                  Manage theatres, screens, movies and show schedules.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-white/10 py-7 px-5 text-center">

          <div className="flex items-center justify-center gap-2">
            <FaFilm className="text-red-500 text-xl" />
            <h2 className="text-white font-bold tracking-widest">
              CINEVO
            </h2>
          </div>

          <p className="text-gray-500 text-sm mt-3">
            Your Cinema. Your Experience.
          </p>

          <p className="text-gray-600 text-xs mt-4">
            © 2026 Cinevo. All rights reserved.
          </p>

        </footer>

      </div>

    </>
  );
}

export default WelcomePage;
