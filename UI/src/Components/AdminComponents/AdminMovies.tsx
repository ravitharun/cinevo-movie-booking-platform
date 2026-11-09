
import {
    Film,
    Plus,
    Search,
    // Filter,
    Eye,
    Pencil,
    MoreVertical,
    CalendarDays,
    Clock,
    Star,
    Clapperboard,
    PlayCircle,
    Menu,
} from "lucide-react";

import AdminSidebar from "./AdminSidebar";
import PageReload from "../PageReload";

const movies = [
    {
        id: "MOV-1001",
        title: "Interstellar",
        genre: "Sci-Fi / Adventure",
        language: "English",
        duration: "2h 49m",
        releaseDate: "07 Nov 2026",
        rating: 8.7,
        theatres: 5,
        status: "ACTIVE",
        image:
            "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
        id: "MOV-1002",
        title: "Avengers: Endgame",
        genre: "Action / Adventure",
        language: "English",
        duration: "3h 01m",
        releaseDate: "12 Nov 2026",
        rating: 8.4,
        theatres: 4,
        status: "ACTIVE",
        image:
            "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    },
    {
        id: "MOV-1003",
        title: "KGF Chapter 2",
        genre: "Action / Drama",
        language: "Kannada",
        duration: "2h 48m",
        releaseDate: "15 Nov 2026",
        rating: 8.2,
        theatres: 3,
        status: "UPCOMING",
        image:
            "https://image.tmdb.org/t/p/w500/khNVygolU0TxLIDWff5tQlAhZ23.jpg",
    },
    {
        id: "MOV-1004",
        title: "Spider-Man: No Way Home",
        genre: "Action / Fantasy",
        language: "English",
        duration: "2h 28m",
        releaseDate: "02 Nov 2026",
        rating: 8.3,
        theatres: 2,
        status: "INACTIVE",
        image:
            "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    },
];

const statusStyles = {
    ACTIVE: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    UPCOMING: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    INACTIVE: "bg-red-500/10 text-red-400 border-red-500/20",
};

const AdminMovies = () => {
    return (
        <>
            <PageReload />

            <div className="min-h-screen bg-[#0c0c16] text-white flex">
                {/* Sidebar */}
                <div className="hidden lg:block w-64 shrink-0 fixed inset-y-0 left-0 z-30">
                    <AdminSidebar />
                </div>

                {/* Main Content */}
                <main className="flex-1 min-w-0 lg:ml-64">

                    {/* Topbar */}
                    <header className="h-16 border-b border-white/[0.07] px-5 lg:px-8 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <button className="lg:hidden p-2 rounded-lg bg-white/5">
                                <Menu size={19} />
                            </button>

                            <div>
                                <h2 className="text-sm font-semibold">Movies</h2>
                                <p className="text-[11px] text-gray-500">
                                    Cinevo Admin / Movies
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="hidden sm:block text-xs text-gray-400">
                                Theatre Admin
                            </span>
                            <div className="w-9 h-9 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 text-sm font-semibold">
                                TA
                            </div>
                        </div>
                    </header>

                    <div className="p-5 lg:p-8">

                        {/* Page Heading */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
                            <div>
                                <p className="text-xs text-purple-400 font-medium mb-1">
                                    THEATRE MANAGEMENT
                                </p>
                                <h1 className="text-2xl font-bold">Movie Management</h1>
                                <p className="text-sm text-gray-500 mt-1">
                                    Manage movies available in your theatres.
                                </p>
                            </div>

                            <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-sm font-medium transition">
                                <Plus size={17} />
                                Add New Movie
                            </button>
                        </div>

                        {/* Summary Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">

                            <div className="bg-[#141422] border border-white/[0.07] rounded-2xl p-5">
                                <div className="flex justify-between items-center">
                                    <p className="text-xs text-gray-400">Total Movies</p>
                                    <Film size={19} className="text-purple-400" />
                                </div>
                                <h2 className="text-2xl font-bold mt-3">24</h2>
                                <p className="text-[11px] text-gray-500 mt-1">
                                    Movies registered
                                </p>
                            </div>

                            <div className="bg-[#141422] border border-white/[0.07] rounded-2xl p-5">
                                <div className="flex justify-between items-center">
                                    <p className="text-xs text-gray-400">Active Movies</p>
                                    <PlayCircle size={19} className="text-emerald-400" />
                                </div>
                                <h2 className="text-2xl font-bold mt-3">16</h2>
                                <p className="text-[11px] text-gray-500 mt-1">
                                    Currently available
                                </p>
                            </div>

                            <div className="bg-[#141422] border border-white/[0.07] rounded-2xl p-5">
                                <div className="flex justify-between items-center">
                                    <p className="text-xs text-gray-400">Upcoming Movies</p>
                                    <CalendarDays size={19} className="text-blue-400" />
                                </div>
                                <h2 className="text-2xl font-bold mt-3">05</h2>
                                <p className="text-[11px] text-gray-500 mt-1">
                                    Scheduled releases
                                </p>
                            </div>

                            <div className="bg-[#141422] border border-white/[0.07] rounded-2xl p-5">
                                <div className="flex justify-between items-center">
                                    <p className="text-xs text-gray-400">Inactive Movies</p>
                                    <Clapperboard size={19} className="text-red-400" />
                                </div>
                                <h2 className="text-2xl font-bold mt-3">03</h2>
                                <p className="text-[11px] text-gray-500 mt-1">
                                    Not currently available
                                </p>
                            </div>

                        </div>

                        {/* Movies Table */}
                        <div className="bg-[#141422] border border-white/[0.07] rounded-2xl overflow-hidden">

                            <div className="p-5 border-b border-white/[0.07]">
                                <h2 className="text-base font-semibold">All Movies</h2>
                                <p className="text-xs text-gray-500 mt-1">
                                    View and manage your registered movies.
                                </p>
                            </div>

                            {/* Search and Filters */}
                            <div className="p-5 flex flex-col md:flex-row gap-3 justify-between">
                                <div className="relative w-full md:max-w-sm">
                                    <Search
                                        size={17}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Search movie name or ID..."
                                        className="w-full bg-[#0c0c16] border border-white/[0.08] rounded-xl pl-10 pr-4 py-2.5 text-xs outline-none focus:border-purple-500/50"
                                    />
                                </div>

                                <div className="flex gap-3">
                                    <select className="bg-[#0c0c16] border border-white/[0.08] rounded-xl px-3 py-2.5 text-xs text-gray-400 outline-none">
                                        <option>All Languages</option>
                                        <option>English</option>
                                        <option>Kannada</option>
                                        <option>Hindi</option>
                                        <option>Telugu</option>
                                    </select>

                                    <select className="bg-[#0c0c16] border border-white/[0.08] rounded-xl px-3 py-2.5 text-xs text-gray-400 outline-none">
                                        <option>All Status</option>
                                        <option>Active</option>
                                        <option>Upcoming</option>
                                        <option>Inactive</option>
                                    </select>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full text-left whitespace-nowrap">

                                    <thead className="bg-white/[0.025] text-[11px] text-gray-500 uppercase">
                                        <tr>
                                            <th className="px-5 py-4 font-medium">Movie</th>
                                            <th className="px-5 py-4 font-medium">Genre</th>
                                            <th className="px-5 py-4 font-medium">Language</th>
                                            <th className="px-5 py-4 font-medium">Duration</th>
                                            <th className="px-5 py-4 font-medium">Rating</th>
                                            <th className="px-5 py-4 font-medium">Theatres</th>
                                            <th className="px-5 py-4 font-medium">Status</th>
                                            <th className="px-5 py-4 font-medium">Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-white/[0.05]">
                                        {movies.map((movie) => (
                                            <tr
                                                key={movie.id}
                                                className="hover:bg-white/[0.02] transition"
                                            >
                                                <td className="px-5 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <img
                                                            src={movie.image}
                                                            alt={movie.title}
                                                            className="w-11 h-14 rounded-lg object-cover bg-white/5"
                                                        />
                                                        <div>
                                                            <p className="text-xs font-semibold text-gray-200">
                                                                {movie.title}
                                                            </p>
                                                            <p className="text-[10px] text-gray-500 mt-1">
                                                                {movie.id}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="px-5 py-4 text-xs text-gray-400">
                                                    {movie.genre}
                                                </td>

                                                <td className="px-5 py-4 text-xs text-gray-400">
                                                    {movie.language}
                                                </td>

                                                <td className="px-5 py-4 text-xs text-gray-400">
                                                    <div className="flex items-center gap-1.5">
                                                        <Clock size={13} />
                                                        {movie.duration}
                                                    </div>
                                                </td>

                                                <td className="px-5 py-4">
                                                    <div className="flex items-center gap-1 text-xs text-yellow-400">
                                                        <Star size={13} fill="currentColor" />
                                                        {movie.rating}
                                                    </div>
                                                </td>

                                                <td className="px-5 py-4 text-xs text-gray-400">
                                                    {movie.theatres}
                                                </td>

                                                <td className="px-5 py-4">
                                                    <span
                                                        className={`inline-flex px-2.5 py-1 rounded-full border text-[10px] font-medium ${statusStyles[
                                                            movie.status as keyof typeof statusStyles
                                                            ]
                                                            }`}
                                                    >
                                                        {movie.status}
                                                    </span>
                                                </td>

                                                <td className="px-5 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <button className="p-2 rounded-lg text-gray-400 hover:text-purple-400 hover:bg-purple-500/10">
                                                            <Eye size={15} />
                                                        </button>
                                                        <button className="p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-500/10">
                                                            <Pencil size={15} />
                                                        </button>
                                                        <button className="p-2 rounded-lg text-gray-400 hover:bg-white/5">
                                                            <MoreVertical size={15} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>

                            {/* Footer */}
                            <div className="px-5 py-4 border-t border-white/[0.07] flex flex-col sm:flex-row justify-between gap-3">
                                <p className="text-xs text-gray-500">
                                    Showing 4 of 24 movies
                                </p>

                                <div className="flex items-center gap-2">
                                    <button className="px-3 py-1.5 rounded-lg border border-white/10 text-xs text-gray-400">
                                        Previous
                                    </button>
                                    <button className="px-3 py-1.5 rounded-lg bg-purple-600 text-xs">
                                        1
                                    </button>
                                    <button className="px-3 py-1.5 rounded-lg border border-white/10 text-xs text-gray-400">
                                        2
                                    </button>
                                    <button className="px-3 py-1.5 rounded-lg border border-white/10 text-xs text-gray-400">
                                        Next
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default AdminMovies;
