
import {
    Clapperboard, Plus, Search, CalendarDays, Clock,
     Pencil, Eye, MoreVertical,
} from "lucide-react";
import AdminSidebar from "./AdminSidebar";
import PageReload from "../PageReload";

const shows = [
    { id: "SHW-1001", movie: "Interstellar", screen: "Screen 01", date: "09 Nov 2026", time: "10:00 AM", type: "IMAX", price: "₹350", seats: 150, booked: 112, status: "ONGOING" },
    { id: "SHW-1002", movie: "Avengers: Endgame", screen: "Screen 02", date: "09 Nov 2026", time: "01:30 PM", type: "2D", price: "₹220", seats: 180, booked: 145, status: "UPCOMING" },
    { id: "SHW-1003", movie: "KGF Chapter 2", screen: "Screen 01", date: "09 Nov 2026", time: "06:30 PM", type: "3D", price: "₹280", seats: 200, booked: 0, status: "UPCOMING" },
    { id: "SHW-1004", movie: "Spider-Man: No Way Home", screen: "Screen 02", date: "08 Nov 2026", time: "09:00 PM", type: "2D", price: "₹200", seats: 180, booked: 180, status: "COMPLETED" },
];

const styles = {
    ONGOING: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    UPCOMING: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    COMPLETED: "bg-gray-500/10 text-gray-400 border-gray-500/20",
};

const Shows = () => (
    <>
        <PageReload />
        <div className="min-h-screen bg-[#0c0c16] text-white">
            <div className="hidden lg:block w-64 fixed inset-y-0 left-0 z-30">
                <AdminSidebar />
            </div>

            <main className="lg:ml-64">
                <header className="h-16 px-5 lg:px-8 border-b border-white/[0.07] flex items-center justify-between">
                    <div>
                        <h2 className="text-sm font-semibold">Shows</h2>
                        <p className="text-[11px] text-gray-500">Cinevo Admin / Shows</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="hidden sm:block text-xs text-gray-400">Theatre Admin</span>
                        <div className="w-9 h-9 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-sm font-semibold">TA</div>
                    </div>
                </header>

                <div className="p-5 lg:p-8">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-7">
                        <div>
                            <p className="text-xs text-purple-400 mb-1">THEATRE MANAGEMENT</p>
                            <h1 className="text-2xl font-bold">Show Management</h1>
                            <p className="text-sm text-gray-500 mt-1">Schedule and manage movie shows across your screens.</p>
                        </div>
                        <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-sm">
                            <Plus size={17} /> Schedule New Show
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: "Total Shows", value: "48", icon: Clapperboard, color: "text-purple-400" },
                            { label: "Today's Shows", value: "12", icon: CalendarDays, color: "text-blue-400" },
                            { label: "Ongoing Shows", value: "03", icon: Clock, color: "text-emerald-400" },
                            { label: "Upcoming Shows", value: "18", icon: Clapperboard, color: "text-yellow-400" },
                        ].map((item) => (
                            <div key={item.label} className="bg-[#141422] border border-white/[0.07] rounded-2xl p-5">
                                <div className="flex justify-between">
                                    <p className="text-xs text-gray-400">{item.label}</p>
                                    <item.icon size={19} className={item.color} />
                                </div>
                                <h2 className="text-2xl font-bold mt-3">{item.value}</h2>
                                <p className="text-[11px] text-gray-500 mt-1">Show statistics</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#141422] border border-white/[0.07] rounded-2xl overflow-hidden">
                        <div className="p-5 border-b border-white/[0.07]">
                            <h2 className="font-semibold text-base">All Shows</h2>
                            <p className="text-xs text-gray-500 mt-1">View and manage scheduled shows.</p>
                        </div>

                        <div className="p-5 flex flex-col md:flex-row gap-3 justify-between">
                            <div className="relative w-full md:max-w-sm">
                                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                <input placeholder="Search movie or show ID..." className="w-full bg-[#0c0c16] border border-white/[0.08] rounded-xl pl-10 pr-4 py-2.5 text-xs outline-none" />
                            </div>
                            <div className="flex gap-3">
                                <select className="bg-[#0c0c16] border border-white/[0.08] rounded-xl px-3 py-2.5 text-xs text-gray-400">
                                    <option>All Screens</option><option>Screen 01</option><option>Screen 02</option>
                                </select>
                                <select className="bg-[#0c0c16] border border-white/[0.08] rounded-xl px-3 py-2.5 text-xs text-gray-400">
                                    <option>All Status</option><option>Ongoing</option><option>Upcoming</option><option>Completed</option>
                                </select>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left whitespace-nowrap">
                                <thead className="bg-white/[0.025] text-[11px] text-gray-500 uppercase">
                                    <tr>
                                        {["Show / Movie", "Screen", "Date", "Time", "Format", "Ticket Price", "Booked Seats", "Status", "Actions"].map(x => <th key={x} className="px-5 py-4 font-medium">{x}</th>)}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/[0.05]">
                                    {shows.map(show => (
                                        <tr key={show.id} className="hover:bg-white/[0.02]">
                                            <td className="px-5 py-4">
                                                <p className="text-xs font-semibold">{show.movie}</p>
                                                <p className="text-[10px] text-gray-500 mt-1">{show.id}</p>
                                            </td>
                                            <td className="px-5 py-4 text-xs text-gray-400">{show.screen}</td>
                                            <td className="px-5 py-4 text-xs text-gray-400">{show.date}</td>
                                            <td className="px-5 py-4 text-xs text-gray-400">{show.time}</td>
                                            <td className="px-5 py-4 text-xs text-gray-400">{show.type}</td>
                                            <td className="px-5 py-4 text-xs text-gray-300">{show.price}</td>
                                            <td className="px-5 py-4 text-xs text-gray-400">{show.booked}/{show.seats}</td>
                                            <td className="px-5 py-4">
                                                <span className={`px-2.5 py-1 rounded-full border text-[10px] ${styles[show.status as keyof typeof styles]}`}>{show.status}</span>
                                            </td>
                                            <td className="px-5 py-4">
                                                <div className="flex gap-2">
                                                    <button className="p-2 rounded-lg text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"><Eye size={15} /></button>
                                                    <button className="p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-500/10"><Pencil size={15} /></button>
                                                    <button className="p-2 rounded-lg text-gray-400 hover:bg-white/5"><MoreVertical size={15} /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="px-5 py-4 border-t border-white/[0.07] text-xs text-gray-500">Showing 4 of 48 shows</div>
                    </div>
                </div>
            </main>
        </div>
    </>
);

export default Shows;
