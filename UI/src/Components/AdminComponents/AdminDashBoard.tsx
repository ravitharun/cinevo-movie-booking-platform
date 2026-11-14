
import { useState } from "react";
import {
    // LayoutDashboard,
    // Building2,
    Film,
    // Clapperboard,
    Ticket,
    // Users,
    IndianRupee,
    // BarChart3,
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
import App from "../../App";
;

function AdminDashBoard() {
    const [activePage, setActivePage] = useState("Dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    // const [search, __] = useState("");
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




    const activities = [
        { title: "New booking received", detail: "Booking #CNV10245", time: "5 min ago", icon: Ticket },
        { title: "Movie added successfully", detail: "Interstellar", time: "30 min ago", icon: Film },
        { title: "New theatre screen added", detail: "PVR Screen 5", time: "1 hour ago", icon: MonitorPlay },
        { title: "Payment received", detail: "₹2,450 received", time: "2 hours ago", icon: IndianRupee },
    ];

    // const filteredBookings = recentBookings.filter((booking) =>
    //     `${booking.id} ${booking.customer} ${booking.movie}`
    //         .toLowerCase()
    //         .includes(search.toLowerCase())
    // );


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



    // jsx code 
    return (
        <>
            {/* </> */}
            <App></App>
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
