
import { useState } from "react";
import {
    FiGrid,
    FiFilm,
    FiUsers,
    FiUserCheck,
    FiMapPin,
    FiMenu,
    FiX,
    FiSearch,
    FiBell,
    FiChevronRight,
    FiEye,
    FiCalendar,
    FiDollarSign,
    FiTrendingUp,
    FiMonitor
} from "react-icons/fi";

const theatres = [
    { id: 1, name: "PVR Cinemas", location: "Bengaluru", screens: 5, admin: "Rahul Kumar", status: "Active" },
    { id: 2, name: "INOX Movies", location: "Hyderabad", screens: 4, admin: "Arun Sharma", status: "Active" },
    { id: 3, name: "Cinepolis", location: "Chennai", screens: 6, admin: "Priya Reddy", status: "Pending" },
    { id: 4, name: "Miraj Cinemas", location: "Mumbai", screens: 3, admin: "Kiran Das", status: "Inactive" }
];

const admins = [
    { id: 1, name: "Rahul Kumar", email: "rahul@gmail.com", theatre: "PVR Cinemas", status: "Active" },
    { id: 2, name: "Arun Sharma", email: "arun@gmail.com", theatre: "INOX Movies", status: "Active" },
    { id: 3, name: "Priya Reddy", email: "priya@gmail.com", theatre: "Cinepolis", status: "Pending" }
];

const users = [
    { id: 1, name: "Tharun Ravi", email: "tharun@gmail.com", joined: "24 Nov 2026", status: "Active" },
    { id: 2, name: "Sandeep Kumar", email: "sandeep@gmail.com", joined: "23 Nov 2026", status: "Active" },
    { id: 3, name: "Ananya Rao", email: "ananya@gmail.com", joined: "22 Nov 2026", status: "Inactive" },
    { id: 4, name: "Karthik R", email: "karthik@gmail.com", joined: "21 Nov 2026", status: "Active" }
];

const menuItems = [
    { name: "Dashboard", icon: FiGrid },
    { name: "All Theatres", icon: FiFilm },
    { name: "Theatre Admins", icon: FiUserCheck },
    { name: "All Users", icon: FiUsers }
];

function PlatformAdminDashboard() {
    const [activeMenu, setActiveMenu] = useState("Dashboard");
    const [search, setSearch] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const stats = [
        { title: "Total Theatres", value: "25", icon: FiFilm, color: "blue", change: "+12% this month" },
        { title: "Theatre Admins", value: "25", icon: FiUserCheck, color: "purple", change: "Across all theatres" },
        { title: "Total Customers", value: "1,250", icon: FiUsers, color: "green", change: "+18% this month" },
        { title: "Total Bookings", value: "3,450", icon: FiCalendar, color: "orange", change: "+24% this month" }
    ];

    const filteredTheatres = theatres.filter(item =>
        `${item.name} ${item.location} ${item.admin}`
            .toLowerCase().includes(search.toLowerCase())
    );

    const filteredAdmins = admins.filter(item =>
        `${item.name} ${item.email} ${item.theatre}`
            .toLowerCase().includes(search.toLowerCase())
    );

    const filteredUsers = users.filter(item =>
        `${item.name} ${item.email}`
            .toLowerCase().includes(search.toLowerCase())
    );

    const Status = ({ status }: { status: string }) => (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === "Active"
                ? "bg-green-500/10 text-green-400"
                : status === "Pending"
                ? "bg-yellow-500/10 text-yellow-400"
                : "bg-red-500/10 text-red-400"
        }`}>
            {status}
        </span>
    );

    const Table = ({ children }: { children: React.ReactNode }) => (
        <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[650px]">
                {children}
            </table>
        </div>
    );

    const heading = activeMenu === "Dashboard"
        ? "Platform Overview"
        : activeMenu;

    return (
        <div className="min-h-screen bg-[#0b1120] text-white flex">

            {/* Mobile overlay */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                />
            )}

            {/* Sidebar */}
            <aside className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-64 bg-[#111827] border-r border-gray-800 flex flex-col transition-transform ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            }`}>

                <div className="h-20 flex items-center justify-between px-6 border-b border-gray-800">
                    <h1 className="text-2xl font-bold">
                        Cine<span className="text-blue-500">vo</span>
                    </h1>
                    <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
                        <FiX size={22} />
                    </button>
                </div>

                <div className="p-5">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-4">
                        Platform Management
                    </p>

                    <div className="space-y-2">
                        {menuItems.map(item => {
                            const Icon = item.icon;
                            const selected = activeMenu === item.name;

                            return (
                                <button
                                    key={item.name}
                                    onClick={() => {
                                        setActiveMenu(item.name);
                                        setSearch("");
                                        setSidebarOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition ${
                                        selected
                                            ? "bg-blue-600 text-white"
                                            : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                    }`}
                                >
                                    <Icon size={19} />
                                    {item.name}
                                    {selected && <FiChevronRight className="ml-auto" />}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-auto p-5 border-t border-gray-800">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                            PA
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Platform Admin</p>
                            <p className="text-xs text-gray-500">Super Administrator</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0">

                {/* Topbar */}
                <header className="h-20 border-b border-gray-800 px-4 sm:px-7 flex items-center justify-between bg-[#111827]/80">

                    <div className="flex items-center gap-3">
                        <button
                            className="lg:hidden text-gray-300"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <FiMenu size={24} />
                        </button>

                        <div>
                            <h2 className="font-semibold text-lg">{heading}</h2>
                            <p className="text-xs text-gray-500 hidden sm:block">
                                Welcome back, Platform Admin
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="relative p-2 rounded-lg bg-gray-800 text-gray-300">
                            <FiBell size={19} />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                        </button>

                        <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-semibold text-sm">
                            PA
                        </div>
                    </div>
                </header>

                <div className="p-4 sm:p-7 space-y-7">

                    {/* Dashboard Overview */}
                    {activeMenu === "Dashboard" && (
                        <>
                            <div>
                                <h2 className="text-2xl font-bold">Dashboard Overview</h2>
                                <p className="text-sm text-gray-400 mt-1">
                                    Monitor and manage your entire Cinevo platform.
                                </p>
                            </div>

                            {/* Statistics */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                                {stats.map((item, index) => {
                                    const Icon = item.icon;

                                    const colors = [
                                        "bg-blue-500/10 text-blue-400",
                                        "bg-purple-500/10 text-purple-400",
                                        "bg-green-500/10 text-green-400",
                                        "bg-orange-500/10 text-orange-400"
                                    ];

                                    return (
                                        <div key={index} className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
                                            <div className="flex justify-between items-center">
                                                <p className="text-sm text-gray-400">{item.title}</p>
                                                <div className={`p-3 rounded-xl ${colors[index]}`}>
                                                    <Icon size={21} />
                                                </div>
                                            </div>

                                            <h3 className="text-3xl font-bold mt-4">{item.value}</h3>
                                            <p className="text-xs text-gray-500 mt-2">{item.change}</p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Additional Overview */}
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

                                <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
                                    <h3 className="font-semibold text-lg mb-5">Platform Summary</h3>

                                    <div className="space-y-5">
                                        {[
                                            { label: "Active Theatres", value: "18", total: "25", width: "72%", color: "bg-blue-500" },
                                            { label: "Active Customers", value: "1,120", total: "1,250", width: "90%", color: "bg-green-500" },
                                            { label: "Active Theatre Admins", value: "22", total: "25", width: "88%", color: "bg-purple-500" }
                                        ].map((item, i) => (
                                            <div key={i}>
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span className="text-gray-300">{item.label}</span>
                                                    <span className="text-gray-400">{item.value}/{item.total}</span>
                                                </div>
                                                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                                    <div className={`h-full ${item.color} rounded-full`} style={{ width: item.width }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
                                    <h3 className="font-semibold text-lg mb-5">Quick Management</h3>

                                    <div className="grid grid-cols-2 gap-3">
                                        {menuItems.slice(1).map(item => {
                                            const Icon = item.icon;
                                            return (
                                                <button
                                                    key={item.name}
                                                    onClick={() => setActiveMenu(item.name)}
                                                    className="p-4 bg-gray-800/70 hover:bg-gray-700 rounded-xl text-left transition"
                                                >
                                                    <Icon size={22} className="text-blue-400 mb-3" />
                                                    <p className="text-sm font-medium">{item.name}</p>
                                                    <p className="text-xs text-gray-500 mt-1">View details</p>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Recent Theatres */}
                            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
                                <div className="flex justify-between items-center mb-5">
                                    <h3 className="font-semibold text-lg">Recently Registered Theatres</h3>
                                    <button
                                        onClick={() => setActiveMenu("All Theatres")}
                                        className="text-sm text-blue-400 hover:text-blue-300"
                                    >
                                        View All
                                    </button>
                                </div>

                                <Table>
                                    <thead className="text-gray-500 text-xs border-b border-gray-800">
                                        <tr>
                                            <th className="py-3">Theatre</th>
                                            <th>Location</th>
                                            <th>Screens</th>
                                            <th>Admin</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {theatres.slice(0, 3).map(item => (
                                            <tr key={item.id} className="border-b border-gray-800/70 text-sm">
                                                <td className="py-4 font-medium">{item.name}</td>
                                                <td className="text-gray-400">{item.location}</td>
                                                <td>{item.screens}</td>
                                                <td className="text-gray-400">{item.admin}</td>
                                                <td><Status status={item.status} /></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </>
                    )}

                    {/* Search */}
                    {activeMenu !== "Dashboard" && (
                        <>
                            <div>
                                <h2 className="text-2xl font-bold">{activeMenu}</h2>
                                <p className="text-sm text-gray-400 mt-1">
                                    View and manage all {activeMenu.toLowerCase()} across Cinevo.
                                </p>
                            </div>

                            <div className="relative max-w-md">
                                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                <input
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    placeholder={`Search ${activeMenu}...`}
                                    className="w-full bg-[#111827] border border-gray-800 rounded-xl pl-11 pr-4 py-3 outline-none focus:border-blue-500 text-sm"
                                />
                            </div>
                        </>
                    )}

                    {/* All Theatres */}
                    {activeMenu === "All Theatres" && (
                        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="font-semibold">Theatre Directory</h3>
                                <span className="text-xs text-gray-500">{filteredTheatres.length} records</span>
                            </div>

                            <Table>
                                <thead className="text-gray-500 text-xs border-b border-gray-800">
                                    <tr>
                                        <th className="py-3">Theatre Name</th>
                                        <th>Location</th>
                                        <th>Screens</th>
                                        <th>Theatre Admin</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredTheatres.map(item => (
                                        <tr key={item.id} className="border-b border-gray-800/70 text-sm">
                                            <td className="py-4 font-medium">{item.name}</td>
                                            <td className="text-gray-400">{item.location}</td>
                                            <td>{item.screens}</td>
                                            <td>{item.admin}</td>
                                            <td><Status status={item.status} /></td>
                                            <td><button className="text-blue-400 hover:text-blue-300"><FiEye size={18} /></button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    )}

                    {/* Theatre Admins */}
                    {activeMenu === "Theatre Admins" && (
                        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="font-semibold">Theatre Admin Directory</h3>
                                <span className="text-xs text-gray-500">{filteredAdmins.length} records</span>
                            </div>

                            <Table>
                                <thead className="text-gray-500 text-xs border-b border-gray-800">
                                    <tr>
                                        <th className="py-3">Admin Name</th>
                                        <th>Email</th>
                                        <th>Assigned Theatre</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredAdmins.map(item => (
                                        <tr key={item.id} className="border-b border-gray-800/70 text-sm">
                                            <td className="py-4 font-medium">{item.name}</td>
                                            <td className="text-gray-400">{item.email}</td>
                                            <td>{item.theatre}</td>
                                            <td><Status status={item.status} /></td>
                                            <td><button className="text-blue-400 hover:text-blue-300"><FiEye size={18} /></button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    )}

                    {/* All Users */}
                    {activeMenu === "All Users" && (
                        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5">
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="font-semibold">Customer Directory</h3>
                                <span className="text-xs text-gray-500">{filteredUsers.length} records</span>
                            </div>

                            <Table>
                                <thead className="text-gray-500 text-xs border-b border-gray-800">
                                    <tr>
                                        <th className="py-3">Customer Name</th>
                                        <th>Email Address</th>
                                        <th>Joined Date</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.map(item => (
                                        <tr key={item.id} className="border-b border-gray-800/70 text-sm">
                                            <td className="py-4 font-medium">{item.name}</td>
                                            <td className="text-gray-400">{item.email}</td>
                                            <td>{item.joined}</td>
                                            <td><Status status={item.status} /></td>
                                            <td><button className="text-blue-400 hover:text-blue-300"><FiEye size={18} /></button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    )}

                </div>
            </main>
        </div>
    );
}

export default PlatformAdminDashboard;
