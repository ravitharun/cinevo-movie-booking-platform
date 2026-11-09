
import { useState } from "react";
import {
    LayoutDashboard,
    Building2,
    Film,
    Clapperboard,
    Ticket,
    Users,
    IndianRupee,
    BarChart3,
    Bell,
    Search,
    Menu,

    ChevronDown,

    ArrowUpRight,

    MonitorPlay,

} from "lucide-react";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import AdminSidebar from "./AdminSidebar";
import type { RootState } from "../../Store/store";
import { useSelector } from "react-redux";
;

function AdminDashBoard() {
    const [activePage, setActivePage] = useState("Dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [search, setSearch] = useState("");
    const count = useSelector((state: RootState) => state.counter);
    const activePage_Redux: any = count.Navigation_page
    console.log(activePage_Redux + "activePage_Redux")
    // Dummy Dashboard Data
    const stats = [
        {
            title: "Total Revenue",
            value: "₹4,85,600",
            change: "+12.8%",
            positive: true,
            icon: IndianRupee,
        },
        {
            title: "Total Bookings",
            value: "2,450",
            change: "+8.2%",
            positive: true,
            icon: Ticket,
        },
        {
            title: "Total Movies",
            value: "24",
            change: "+4.5%",
            positive: true,
            icon: Film,
        },
        {
            title: "Total Screens",
            value: "12",
            change: "2 theatres",
            positive: true,
            icon: MonitorPlay,
        },
    ];

    const menuItems = [
        { name: "Dashboard", icon: LayoutDashboard },
        { name: "Theatres", icon: Building2 },
        { name: "Screens", icon: MonitorPlay },
        { name: "Movies", icon: Film },
        { name: "Shows", icon: Clapperboard },
        { name: "Bookings", icon: Ticket },
        { name: "Customers", icon: Users },
        { name: "Revenue", icon: BarChart3 },
    ];
    const revenueData: any = [
        { month: "May", revenue: 210000 },
        { month: "Jun", revenue: 320000 },
        { month: "Jul", revenue: 270000 },
        { month: "Aug", revenue: 380000 },
        { month: "Sep", revenue: 300000 },
        { month: "Oct", revenue: 420000 },
        { month: "Nov", revenue: 480000 },
    ];
    const recentBookings = [
        {
            id: "#CNV10245",
            customer: "Rahul Sharma",
            movie: "Avengers: Endgame",
            seats: "A1, A2",
            amount: "₹450",
            status: "Confirmed",
        },
        {
            id: "#CNV10244",
            customer: "Priya Kumar",
            movie: "Interstellar",
            seats: "B4, B5",
            amount: "₹600",
            status: "Confirmed",
        },
        {
            id: "#CNV10243",
            customer: "Arjun Reddy",
            movie: "Inception",
            seats: "C2",
            amount: "₹250",
            status: "Pending",
        },
        {
            id: "#CNV10242",
            customer: "Sneha Rao",
            movie: "Jawan",
            seats: "D1, D2",
            amount: "₹500",
            status: "Cancelled",
        },
    ];



    const movies = [
        {
            name: "Avengers: Endgame",
            genre: "Action / Sci-Fi",
            duration: "3h 02m",
            status: "Now Showing",
            image: "https://image.tmdb.org/t/p/w200/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        },
        {
            name: "Interstellar",
            genre: "Sci-Fi / Drama",
            duration: "2h 49m",
            status: "Now Showing",
            image: "https://image.tmdb.org/t/p/w200/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        },
        {
            name: "Inception",
            genre: "Action / Thriller",
            duration: "2h 28m",
            status: "Now Showing",
            image: "https://image.tmdb.org/t/p/w200/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        },
    ];

    const activities = [
        { title: "New booking received", detail: "Booking #CNV10245", time: "5 min ago", icon: Ticket },
        { title: "Movie added successfully", detail: "Interstellar", time: "30 min ago", icon: Film },
        { title: "New theatre screen added", detail: "PVR Screen 5", time: "1 hour ago", icon: MonitorPlay },
        { title: "Payment received", detail: "₹2,450 received", time: "2 hours ago", icon: IndianRupee },
    ];

    const filteredBookings = recentBookings.filter((booking) =>
        `${booking.id} ${booking.customer} ${booking.movie}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );


    const StatCard = ({ stat }: { stat: (typeof stats)[number] }) => {
        const Icon = stat.icon;

        return (
            <div className="bg-[#141422] border border-white/[0.07] rounded-2xl p-5 hover:border-violet-500/30 transition">
                <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
                        <Icon size={21} />
                    </div>
                    <span className="text-xs text-emerald-400 flex items-center gap-1">
                        <ArrowUpRight size={14} />
                        {stat.change}
                    </span>
                </div>

                <p className="text-gray-400 text-sm mt-5">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
            </div>
        );
    };

    const renderDashboard = () => (
        <>
            {/* Welcome */}
            <div className="mb-8">
                <p className="text-violet-400 text-sm font-medium">
                    Sunday, November 8, 2026
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                    Welcome back, Ravi! 👋
                </h2>
                <p className="text-gray-400 text-sm mt-2">
                    Here's what's happening with your cinema business today.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
                {stats.map((stat) => (
                    <StatCard key={stat.title} stat={stat} />
                ))}
            </div>

            {/* Charts and Occupancy */}



            <div className="xl:col-span-2 bg-[#141422] border border-white/[0.07] rounded-2xl p-5 sm:p-6">
                <div className="flex items-center justify-between mb-7">
                    <div>
                        <h3 className="font-semibold text-lg">Revenue Overview</h3>
                        <p className="text-xs text-gray-500 mt-1">
                            Monthly revenue performance
                        </p>
                    </div>

                    <select className="bg-[#202032] border border-white/10 rounded-lg px-3 py-2 text-xs outline-none text-gray-300">
                        <option>Last 7 months</option>
                        <option>Last 30 days</option>
                        <option>This year</option>
                    </select>
                </div>

                <div className="w-full h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={revenueData}
                            margin={{ top: 15, right: 10, left: 0, bottom: 0 }}
                        >
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="#ffffff12"
                                vertical={false}
                            />

                            <XAxis
                                dataKey="month"
                                stroke="#6b7280"
                                tick={{ fill: "#9ca3af", fontSize: 12 }}
                                axisLine={false}
                                tickLine={false}
                            />

                            <YAxis
                                stroke="#6b7280"
                                tick={{ fill: "#9ca3af", fontSize: 11 }}
                                axisLine={false}
                                tickLine={false}
                                tickFormatter={(value) => `₹${value / 100000}L`}
                            />

                            <Tooltip
                                cursor={{ fill: "#ffffff08" }}
                                contentStyle={{
                                    backgroundColor: "#202032",
                                    border: "1px solid #ffffff20",
                                    borderRadius: "10px",
                                    color: "#fff",
                                }}
                                formatter={(value) => [
                                    `₹${Number(value).toLocaleString("en-IN")}`,
                                    "Revenue",
                                ]}
                            />

                            <Bar
                                dataKey="revenue"
                                fill="#8b5cf6"
                                radius={[6, 6, 0, 0]}
                                maxBarSize={45}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Recent Bookings and Activities */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

                <div className="xl:col-span-2 bg-[#141422] border border-white/[0.07] rounded-2xl overflow-hidden">
                    <div className="p-5 flex items-center justify-between">
                        <div>
                            <h3 className="font-semibold text-lg">Recent Bookings</h3>
                            <p className="text-xs text-gray-500 mt-1">Latest customer transactions</p>
                        </div>
                        <button
                            onClick={() => setActivePage("Bookings")}
                            className="text-violet-400 text-xs hover:text-violet-300"
                        >
                            View All
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left min-w-[650px]">
                            <thead>
                                <tr className="border-y border-white/[0.07] text-xs text-gray-500">
                                    <th className="px-5 py-4">Booking ID</th>
                                    <th className="px-5 py-4">Customer</th>
                                    <th className="px-5 py-4">Movie</th>
                                    <th className="px-5 py-4">Amount</th>
                                    <th className="px-5 py-4">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentBookings.map((booking) => (
                                    <tr key={booking.id} className="border-b border-white/[0.05] text-sm hover:bg-white/[0.02]">
                                        <td className="px-5 py-4 text-violet-400">{booking.id}</td>
                                        <td className="px-5 py-4">{booking.customer}</td>
                                        <td className="px-5 py-4 text-gray-400">{booking.movie}</td>
                                        <td className="px-5 py-4">{booking.amount}</td>
                                        <td className="px-5 py-4">
                                            <span className={`px-2.5 py-1 rounded-full text-[10px] ${booking.status === "Confirmed"
                                                ? "bg-emerald-500/10 text-emerald-400"
                                                : booking.status === "Pending"
                                                    ? "bg-yellow-500/10 text-yellow-400"
                                                    : "bg-red-500/10 text-red-400"
                                                }`}>
                                                {booking.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Activity */}
                <div className="bg-[#141422] border border-white/[0.07] rounded-2xl p-5">
                    <h3 className="font-semibold text-lg">Recent Activity</h3>
                    <p className="text-xs text-gray-500 mt-1 mb-6">Latest updates</p>

                    <div className="space-y-6">
                        {activities.map((activity, index) => {
                            const Icon = activity.icon;
                            return (
                                <div key={index} className="flex gap-3">
                                    <div className="w-9 h-9 shrink-0 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
                                        <Icon size={17} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm font-medium">{activity.title}</p>
                                        <p className="text-xs text-gray-500 mt-1">{activity.detail}</p>
                                        <p className="text-[10px] text-gray-600 mt-2">{activity.time}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );



    // const renderMovies = () => (
    //     <>
    //         <SectionHeader
    //             title="Movie Management"
    //             description="Manage your cinema movie catalogue."
    //             button="Add Movie"
    //         />

    //         <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
    //             {movies.map((movie) => (
    //                 <div key={movie.name} className="bg-[#141422] border border-white/10 rounded-2xl overflow-hidden">
    //                     <div className="h-64 bg-black flex justify-center">
    //                         <img src={movie.image} alt={movie.name} className="h-full object-contain" />
    //                     </div>
    //                     <div className="p-5">
    //                         <span className="text-xs text-emerald-400">{movie.status}</span>
    //                         <h3 className="font-semibold text-lg mt-2">{movie.name}</h3>
    //                         <p className="text-sm text-gray-500 mt-2">{movie.genre}</p>
    //                         <p className="text-xs text-gray-500 mt-2 flex items-center gap-2">
    //                             <Clock size={14} /> {movie.duration}
    //                         </p>
    //                         <div className="flex gap-2 mt-5">
    //                             <button className="flex-1 py-2 rounded-lg bg-violet-600 text-sm">Edit Movie</button>
    //                             <button className="px-3 rounded-lg border border-white/10 text-gray-400">
    //                                 <MoreVertical size={18} />
    //                             </button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             ))}
    //         </div>
    //     </>
    // );

    // const renderBookings = () => (
    //     <>
    //         <SectionHeader
    //             title="Booking Management"
    //             description="View and manage customer ticket bookings."
    //         />

    //         <div className="bg-[#141422] rounded-2xl border border-white/10 overflow-hidden">
    //             <div className="p-5 border-b border-white/10">
    //                 <div className="relative max-w-sm">
    //                     <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
    //                     <input
    //                         value={search}
    //                         onChange={(e) => setSearch(e.target.value)}
    //                         placeholder="Search booking, customer or movie..."
    //                         className="w-full h-11 pl-11 pr-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-violet-500 text-sm"
    //                     />
    //                 </div>
    //             </div>
    //             <div className="overflow-x-auto">
    //                 <table className="w-full min-w-[700px] text-sm text-left">
    //                     <thead className="text-gray-500 border-b border-white/10">
    //                         <tr>
    //                             <th className="p-5">Booking ID</th>
    //                             <th className="p-5">Customer</th>
    //                             <th className="p-5">Movie</th>
    //                             <th className="p-5">Seats</th>
    //                             <th className="p-5">Amount</th>
    //                             <th className="p-5">Status</th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         {filteredBookings.map((booking) => (
    //                             <tr key={booking.id} className="border-b border-white/5 hover:bg-white/[0.02]">
    //                                 <td className="p-5 text-violet-400">{booking.id}</td>
    //                                 <td className="p-5">{booking.customer}</td>
    //                                 <td className="p-5 text-gray-400">{booking.movie}</td>
    //                                 <td className="p-5">{booking.seats}</td>
    //                                 <td className="p-5">{booking.amount}</td>
    //                                 <td className="p-5">
    //                                     <span className="text-xs text-gray-300">{booking.status}</span>
    //                                 </td>
    //                             </tr>
    //                         ))}
    //                         {filteredBookings.length === 0 && (
    //                             <tr>
    //                                 <td colSpan={6} className="p-8 text-center text-gray-500">
    //                                     No bookings found.
    //                                 </td>
    //                             </tr>
    //                         )}
    //                     </tbody>
    //                 </table>
    //             </div>
    //         </div>
    //     </>
    // );

    // const renderShows = () => (
    //     <>
    //         <SectionHeader title="Show Management" description="Manage screening schedules and show timings." button="Add Show" />
    //         <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
    //             {[
    //                 { movie: "Avengers: Endgame", screen: "Screen 1", time: "10:00 AM", date: "Nov 08, 2026" },
    //                 { movie: "Interstellar", screen: "Screen 2", time: "01:30 PM", date: "Nov 08, 2026" },
    //                 { movie: "Inception", screen: "Screen 3", time: "06:00 PM", date: "Nov 08, 2026" },
    //             ].map((show) => (
    //                 <div key={show.movie} className="bg-[#141422] border border-white/10 rounded-2xl p-6">
    //                     <div className="w-11 h-11 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
    //                         <CalendarDays size={22} />
    //                     </div>
    //                     <h3 className="font-semibold text-lg mt-5">{show.movie}</h3>
    //                     <p className="text-sm text-gray-400 mt-3">{show.screen}</p>
    //                     <p className="text-sm text-violet-400 mt-2">{show.time}</p>
    //                     <p className="text-xs text-gray-500 mt-2">{show.date}</p>
    //                 </div>
    //             ))}
    //         </div>
    //     </>
    // );

    // const renderScreens = () => (
    //     <>
    //         <SectionHeader title="Screen Management" description="Manage screens and seating capacity." button="Add Screen" />
    //         <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
    //             {[1, 2, 3, 4, 5, 6].map((screen) => (
    //                 <div key={screen} className="bg-[#141422] border border-white/10 rounded-2xl p-6">
    //                     <div className="flex items-center justify-between">
    //                         <MonitorPlay className="text-violet-400" size={25} />
    //                         <span className="text-xs text-emerald-400">Active</span>
    //                     </div>
    //                     <h3 className="text-xl font-semibold mt-5">Screen {screen}</h3>
    //                     <p className="text-sm text-gray-500 mt-2">PVR Cinemas</p>
    //                     <div className="flex items-center gap-2 text-sm text-gray-400 mt-5">
    //                         <Armchair size={17} /> 120 Seats
    //                     </div>
    //                 </div>
    //             ))}
    //         </div>
    //     </>
    // );

    // const renderCustomers = () => (
    //     <>
    //         <SectionHeader title="Customers" description="View your registered cinema customers." />
    //         <div className="bg-[#141422] border border-white/10 rounded-2xl p-6">
    //             <div className="grid sm:grid-cols-3 gap-5">
    //                 {[
    //                     { name: "Total Customers", value: "1,840", icon: Users },
    //                     { name: "Active Customers", value: "1,620", icon: CircleCheck },
    //                     { name: "New This Month", value: "240", icon: TrendingUp },
    //                 ].map((item) => (
    //                     <div key={item.name} className="p-5 bg-white/[0.03] rounded-xl">
    //                         <item.icon className="text-violet-400" size={23} />
    //                         <p className="text-gray-400 text-sm mt-4">{item.name}</p>
    //                         <h3 className="text-2xl font-bold mt-1">{item.value}</h3>
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //     </>
    // );

    // const renderRevenue = () => (
    //     <>
    //         <SectionHeader title="Revenue & Reports" description="Track your cinema business performance." />
    //         <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
    //             {[
    //                 { title: "Today's Revenue", value: "₹24,500" },
    //                 { title: "This Month", value: "₹4,85,600" },
    //                 { title: "Total Revenue", value: "₹28,45,000" },
    //             ].map((item) => (
    //                 <div key={item.title} className="bg-[#141422] border border-white/10 rounded-2xl p-6">
    //                     <IndianRupee className="text-violet-400" size={24} />
    //                     <p className="text-sm text-gray-400 mt-5">{item.title}</p>
    //                     <h3 className="text-2xl font-bold mt-2">{item.value}</h3>
    //                 </div>
    //             ))}
    //         </div>
    //     </>
    // );

    // const renderSettings = () => (
    //     <>
    //         <SectionHeader title="Settings" description="Manage your admin account preferences." />
    //         <div className="max-w-2xl bg-[#141422] border border-white/10 rounded-2xl p-6 space-y-5">
    //             <div>
    //                 <label className="text-sm text-gray-400">Admin Name</label>
    //                 <input defaultValue="Ravi Admin" className="mt-2 w-full p-3 bg-white/5 rounded-xl border border-white/10 outline-none" />
    //             </div>
    //             <div>
    //                 <label className="text-sm text-gray-400">Email Address</label>
    //                 <input defaultValue="admin@cinevo.com" className="mt-2 w-full p-3 bg-white/5 rounded-xl border border-white/10 outline-none" />
    //             </div>
    //             <div>
    //                 <label className="text-sm text-gray-400">Theatre Business</label>
    //                 <input defaultValue="PVR Cinemas" className="mt-2 w-full p-3 bg-white/5 rounded-xl border border-white/10 outline-none" />
    //             </div>
    //             <button className="bg-violet-600 hover:bg-violet-500 px-6 py-3 rounded-xl text-sm">
    //                 Save Changes
    //             </button>
    //         </div>
    //     </>
    // );

    // const pageContent: any = () => {
    //     switch (activePage_Redux) {
    //         case "Dashboard": return renderDashboard();
    //         case "Theatres": return renderThAdmin();
    //         case "Screens": return renderScreens();
    //         case "Movies": return renderMovies();
    //         case "Shows": return renderShows();
    //         case "Bookings": return renderBookings();
    //         case "Customers": return renderCustomers();
    //         case "Revenue": return renderRevenue();
    //         case "Settings": return renderSettings();
    //         default: return renderDashboard();
    //     }
    // };

    // jsx code 
    return (
        <>
            {/* </> */}
            <div className="min-h-screen bg-[#0c0c16] text-white flex">

                {/* Desktop Sidebar */}
                <div className="hidden lg:block w-64 shrink-0 fixed inset-y-0 left-0 z-30">
                    <AdminSidebar />
                </div>

                {/* Mobile Sidebar */}
                {sidebarOpen && (
                    <div className="fixed inset-0 z-50 lg:hidden">
                        <div
                            className="absolute inset-0 bg-black/70"
                            onClick={() => setSidebarOpen(false)}
                        />
                        <div className="relative w-72 h-full">
                            <AdminSidebar />
                        </div>
                    </div>
                )}

                {/* Main */}
                <main className="flex-1 min-w-0 lg:ml-64">

                    {/* Topbar */}
                    <header className="h-20 sticky top-0 z-20 bg-[#0c0c16]/90 backdrop-blur-xl border-b border-white/[0.07] px-5 sm:px-8 flex items-center justify-between">

                        <div className="flex items-center gap-4">
                            <button
                                className="lg:hidden text-gray-400"
                                onClick={() => setSidebarOpen(true)}
                            >
                                <Menu size={23} />
                            </button>

                            <div>
                                <h2 className="font-semibold text-lg">{activePage}</h2>
                                <p className="hidden sm:block text-xs text-gray-500">
                                    Cinevo Admin / {activePage}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 sm:gap-5">

                            <div className="hidden md:flex relative">
                                <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                <input
                                    placeholder="Search anything..."
                                    className="w-52 h-10 pl-10 pr-4 rounded-xl bg-white/[0.04] border border-white/10 outline-none text-sm focus:border-violet-500"
                                />
                            </div>

                            <div className="relative">
                                <button
                                    onClick={() => setShowNotifications(!showNotifications)}
                                    className="relative w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white"
                                >
                                    <Bell size={19} />
                                    <span className="absolute top-2 right-2 w-2 h-2 bg-violet-500 rounded-full" />
                                </button>

                                {showNotifications && (
                                    <div className="absolute right-0 top-14 w-72 bg-[#191929] border border-white/10 rounded-xl shadow-2xl p-4">
                                        <h3 className="font-semibold mb-4">Notifications</h3>
                                        <div className="space-y-4 text-sm">
                                            <p className="text-gray-300">New booking received <span className="block text-xs text-gray-500 mt-1">5 minutes ago</span></p>
                                            <p className="text-gray-300">New movie added <span className="block text-xs text-gray-500 mt-1">30 minutes ago</span></p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center font-bold text-sm">
                                    RA
                                </div>
                                <div className="hidden sm:block">
                                    <p className="text-sm font-semibold">Ravi Admin</p>
                                    <p className="text-[10px] text-gray-500">Theatre Admin</p>
                                </div>
                                <ChevronDown size={15} className="hidden sm:block text-gray-500" />
                            </div>
                        </div>
                    </header>

                    {/* Page Content */}
                    <div className="p-5 sm:p-8 max-w-[1600px] mx-auto">
                        {renderDashboard()}
                    </div>

                    {/* Footer */}
                    <footer className="px-8 py-6 border-t border-white/[0.07] text-center text-xs text-gray-600">
                        © 2026 Cinevo. All rights reserved.
                        <span className="mx-2">•</span>
                        <span className="text-violet-400">Cinema Management Portal</span>
                    </footer>

                </main>
            </div>
        </>
    );
}

export default AdminDashBoard;
