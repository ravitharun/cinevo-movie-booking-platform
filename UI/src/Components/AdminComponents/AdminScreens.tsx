
import { useMemo, useState } from "react";
import {
    MonitorPlay,
    Plus,
    Search,
    Filter,
    // LayoutDashboard,
    Building2,
    Armchair,
    CheckCircle2,
    XCircle,
    MoreVertical,
    // Eye,
    Pencil,
    // Trash2,
    X,
    MapPin,
    Users,
    Film,
    CalendarDays,
    Menu,
    Layers,
    // Clapperboard,
} from "lucide-react";

import AdminSidebar from "./AdminSidebar";
import PageReload from "../PageReload";

type ScreenStatus = "ACTIVE" | "INACTIVE";
type ScreenType = "2D" | "3D" | "IMAX" | "4DX";

interface Screen {
    id: number;
    screenName: string;
    theatreName: string;
    location: string;
    screenType: ScreenType;
    totalSeats: number;
    status: ScreenStatus;
    createdDate: string;
}

const initialScreens: Screen[] = [
    {
        id: 1,
        screenName: "Screen 01",
        theatreName: "PVR Cinemas",
        location: "Bengaluru",
        screenType: "IMAX",
        totalSeats: 250,
        status: "ACTIVE",
        createdDate: "08 Nov 2026",
    },
    {
        id: 2,
        screenName: "Screen 02",
        theatreName: "PVR Cinemas",
        location: "Bengaluru",
        screenType: "2D",
        totalSeats: 180,
        status: "ACTIVE",
        createdDate: "08 Nov 2026",
    },
    {
        id: 3,
        screenName: "Screen 01",
        theatreName: "INOX Multiplex",
        location: "Hyderabad",
        screenType: "3D",
        totalSeats: 200,
        status: "INACTIVE",
        createdDate: "05 Nov 2026",
    },
    {
        id: 4,
        screenName: "Screen 02",
        theatreName: "INOX Multiplex",
        location: "Hyderabad",
        screenType: "4DX",
        totalSeats: 160,
        status: "ACTIVE",
        createdDate: "05 Nov 2026",
    },
];

const emptyForm = {
    screenName: "",
    theatreName: "PVR Cinemas",
    location: "Bengaluru",
    screenType: "2D" as ScreenType,
    totalSeats: 150,
    status: "ACTIVE" as ScreenStatus,
};

const statusStyles: Record<ScreenStatus, string> = {
    ACTIVE: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    INACTIVE: "bg-red-500/10 text-red-400 border-red-500/20",
};

export default function Screens() {
    const [screens, setScreens] = useState<Screen[]>(initialScreens);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [activeFilter, setActiveFilter] = useState("ALL");
    const [theatreFilter, setTheatreFilter] = useState("ALL");
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedScreen, setSelectedScreen] = useState<Screen | null>(null);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [form, setForm] = useState(emptyForm);
    // const [____, setMenuId] = useState<number | null>(null);

    const activeCount = screens.filter((s) => s.status === "ACTIVE").length;
    const inactiveCount = screens.filter((s) => s.status === "INACTIVE").length;
    const totalSeats = screens.reduce((sum, s) => sum + s.totalSeats, 0);

    const filteredScreens = useMemo(() => {
        return screens.filter((screen) => {
            const searchText = search.toLowerCase();

            const matchesSearch =
                screen.screenName.toLowerCase().includes(searchText) ||
                screen.theatreName.toLowerCase().includes(searchText) ||
                screen.location.toLowerCase().includes(searchText);

            const matchesStatus =
                activeFilter === "ALL" || screen.status === activeFilter;

            const matchesTheatre =
                theatreFilter === "ALL" || screen.theatreName === theatreFilter;

            return matchesSearch && matchesStatus && matchesTheatre;
        });
    }, [screens, search, activeFilter, theatreFilter]);

    const openAddModal = () => {
        setEditingId(null);
        setForm(emptyForm);
        setModalOpen(true);
    };

    // const openEditModal = (screen: Screen) => {
    //     setEditingId(screen.id);
    //     setForm({
    //         screenName: screen.screenName,
    //         theatreName: screen.theatreName,
    //         location: screen.location,
    //         screenType: screen.screenType,
    //         totalSeats: screen.totalSeats,
    //         status: screen.status,
    //     });
    //     setMenuId(null);
    //     setModalOpen(true);
    // };

    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.screenName.trim() || form.totalSeats < 1) return;

        if (editingId !== null) {
            setScreens((prev) =>
                prev.map((screen) =>
                    screen.id === editingId ? { ...screen, ...form } : screen
                )
            );
        } else {
            const newScreen: Screen = {
                id: Math.max(0, ...screens.map((s) => s.id)) + 1,
                ...form,
                createdDate: new Date().toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                }),
            };

            setScreens((prev) => [newScreen, ...prev]);
        }

        setModalOpen(false);
        setEditingId(null);
        setForm(emptyForm);
    };

    // const toggleStatus = (id: number) => {
    //     setScreens((prev) =>
    //         prev.map((screen) =>
    //             screen.id === id
    //                 ? {
    //                     ...screen,
    //                     status: screen.status === "ACTIVE" ? "INACTIVE" : "ACTIVE",
    //                 }
    //                 : screen
    //         )
    //     );
    //     setMenuId(null);
    // };

    // const deleteScreen = (id: number) => {
    //     const confirmed = window.confirm("Are you sure you want to delete this screen?");
    //     if (!confirmed) return;

    //     setScreens((prev) => prev.filter((screen) => screen.id !== id));
    //     setMenuId(null);
    // };

    return (
        <>
            <PageReload />

            <div className="min-h-screen bg-[#0c0c16] text-white">
                {/* Desktop Sidebar */}
                <div className="hidden lg:block w-64 shrink-0 fixed inset-y-0 left-0 z-30">
                    <AdminSidebar />
                </div>

                {/* Mobile Sidebar */}
                {sidebarOpen && (
                    <div className="fixed inset-0 z-50 lg:hidden">
                        <div
                            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
                            onClick={() => setSidebarOpen(false)}
                        />
                        <div className="relative w-64 h-full">
                            <AdminSidebar />
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <main className="lg:ml-64 min-h-screen">
                    {/* Topbar */}
                    <header className="sticky top-0 z-20 h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between bg-[#0c0c16]/90 backdrop-blur-xl border-b border-white/[0.07]">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden p-2 rounded-lg hover:bg-white/5 text-gray-400"
                            >
                                <Menu size={20} />
                            </button>

                            <div>
                                <h1 className="text-sm font-semibold text-white">Screens</h1>
                                <p className="text-[10px] text-gray-500">
                                    Cinevo Admin / Screens
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="hidden sm:block text-right">
                                <p className="text-xs font-medium text-gray-200">
                                    Theatre Admin
                                </p>
                                <p className="text-[10px] text-gray-500">Business Account</p>
                            </div>
                            <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold">
                                TA
                            </div>
                        </div>
                    </header>

                    <div className="p-4 sm:p-6 lg:p-8 max-w-[1600px] mx-auto">
                        {/* Page Heading */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                                        <MonitorPlay size={18} className="text-purple-400" />
                                    </div>
                                    <span className="text-[11px] text-purple-400 font-semibold uppercase tracking-wider">
                                        Theatre Management
                                    </span>
                                </div>

                                <h2 className="text-xl sm:text-2xl font-bold text-white">
                                    Screen Management
                                </h2>
                                <p className="text-xs text-gray-500 mt-1">
                                    Manage your theatre screens, seating capacity and screen types.
                                </p>
                            </div>

                            <button
                                onClick={openAddModal}
                                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-lg shadow-purple-900/20 transition"
                            >
                                <Plus size={16} />
                                Add New Screen
                            </button>
                        </div>

                        {/* Summary Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-7">
                            <SummaryCard
                                title="Total Screens"
                                value={screens.length}
                                subtitle="Registered screens"
                                icon={<MonitorPlay size={19} />}
                                iconColor="text-purple-400"
                                iconBg="bg-purple-500/10"
                            />

                            <SummaryCard
                                title="Active Screens"
                                value={activeCount}
                                subtitle="Currently available"
                                icon={<CheckCircle2 size={19} />}
                                iconColor="text-emerald-400"
                                iconBg="bg-emerald-500/10"
                            />

                            <SummaryCard
                                title="Inactive Screens"
                                value={inactiveCount}
                                subtitle="Currently disabled"
                                icon={<XCircle size={19} />}
                                iconColor="text-red-400"
                                iconBg="bg-red-500/10"
                            />

                            <SummaryCard
                                title="Total Seats"
                                value={totalSeats.toLocaleString("en-IN")}
                                subtitle="Across all screens"
                                icon={<Armchair size={19} />}
                                iconColor="text-cyan-400"
                                iconBg="bg-cyan-500/10"
                            />
                        </div>

                        {/* Screens Section */}
                        <section className="bg-[#141421] border border-white/[0.07] rounded-2xl overflow-hidden">
                            {/* Section Header */}
                            <div className="p-4 sm:p-5 border-b border-white/[0.07]">
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-sm font-semibold text-white">
                                            All Screens
                                        </h3>
                                        <p className="text-[11px] text-gray-500 mt-1">
                                            View and manage screens registered under your theatres.
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-2">
                                        {/* Search */}
                                        <div className="relative">
                                            <Search
                                                size={15}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                                            />
                                            <input
                                                value={search}
                                                onChange={(e) => setSearch(e.target.value)}
                                                placeholder="Search screens..."
                                                className="w-full sm:w-52 pl-9 pr-3 py-2.5 bg-[#0c0c16] border border-white/10 rounded-lg text-xs text-white placeholder:text-gray-600 outline-none focus:border-purple-500/50"
                                            />
                                        </div>

                                        {/* Theatre Filter */}
                                        <select
                                            value={theatreFilter}
                                            onChange={(e) => setTheatreFilter(e.target.value)}
                                            className="px-3 py-2.5 bg-[#0c0c16] border border-white/10 rounded-lg text-xs text-gray-300 outline-none focus:border-purple-500/50"
                                        >
                                            <option value="ALL">All Theatres</option>
                                            {[...new Set(screens.map((s) => s.theatreName))].map(
                                                (theatre) => (
                                                    <option key={theatre} value={theatre}>
                                                        {theatre}
                                                    </option>
                                                )
                                            )}
                                        </select>

                                        {/* Status Filter */}
                                        <div className="relative">
                                            <Filter
                                                size={14}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                                            />
                                            <select
                                                value={activeFilter}
                                                onChange={(e) => setActiveFilter(e.target.value)}
                                                className="w-full pl-8 pr-3 py-2.5 bg-[#0c0c16] border border-white/10 rounded-lg text-xs text-gray-300 outline-none focus:border-purple-500/50"
                                            >
                                                <option value="ALL">All Status</option>
                                                <option value="ACTIVE">Active</option>
                                                <option value="INACTIVE">Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[850px] text-left">
                                    <thead>
                                        <tr className="bg-[#191927] text-[10px] uppercase tracking-wider text-gray-500">
                                            <th className="px-5 py-4 font-semibold">Screen</th>
                                            <th className="px-5 py-4 font-semibold">Theatre</th>
                                            <th className="px-5 py-4 font-semibold">Screen Type</th>
                                            <th className="px-5 py-4 font-semibold">Total Seats</th>
                                            <th className="px-5 py-4 font-semibold">Created Date</th>
                                            <th className="px-5 py-4 font-semibold">Status</th>
                                            <th className="px-5 py-4 font-semibold text-right">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-white/[0.05]">
                                        {filteredScreens.map((screen) => (
                                            <tr
                                                key={screen.id}
                                                className="hover:bg-white/[0.025] transition"
                                            >
                                                <td className="px-5 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/10 flex items-center justify-center">
                                                            <MonitorPlay
                                                                size={16}
                                                                className="text-purple-400"
                                                            />
                                                        </div>
                                                        <div>
                                                            <p className="text-xs font-semibold text-gray-200">
                                                                {screen.screenName}
                                                            </p>
                                                            <p className="text-[10px] text-gray-500">
                                                                SCR-{String(screen.id).padStart(4, "0")}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="px-5 py-4">
                                                    <p className="text-xs text-gray-300">
                                                        {screen.theatreName}
                                                    </p>
                                                    <p className="flex items-center gap-1 text-[10px] text-gray-500 mt-1">
                                                        <MapPin size={10} />
                                                        {screen.location}
                                                    </p>
                                                </td>

                                                <td className="px-5 py-4">
                                                    <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-semibold">
                                                        {screen.screenType}
                                                    </span>
                                                </td>

                                                <td className="px-5 py-4">
                                                    <div className="flex items-center gap-2 text-xs text-gray-300">
                                                        <Users size={14} className="text-gray-500" />
                                                        {screen.totalSeats}
                                                    </div>
                                                </td>

                                                <td className="px-5 py-4 text-xs text-gray-400">
                                                    {screen.createdDate}
                                                </td>

                                                <td className="px-5 py-4">
                                                    <span
                                                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-semibold ${statusStyles[screen.status]}`}
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                                        {screen.status}
                                                    </span>
                                                </td>

                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            className="flex items-center gap-2 px-3 py-2
      rounded-lg bg-purple-500/10 text-purple-400
      hover:bg-purple-500/20 text-xs font-medium"
                                                            title="View Seats"
                                                        >
                                                            <Armchair size={15} />
                                                        </button>

                                                        <button className="p-2 rounded-lg hover:bg-white/5 text-gray-400">
                                                            <Pencil size={15} />
                                                        </button>

                                                        <button className="p-2 rounded-lg hover:bg-white/5 text-gray-400">
                                                            <MoreVertical size={15} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}

                                        {filteredScreens.length === 0 && (
                                            <tr>
                                                <td colSpan={7} className="py-16 text-center">
                                                    <div className="flex flex-col items-center">
                                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-3">
                                                            <MonitorPlay
                                                                size={22}
                                                                className="text-gray-500"
                                                            />
                                                        </div>
                                                        <p className="text-sm text-gray-300 font-medium">
                                                            No screens found
                                                        </p>
                                                        <p className="text-xs text-gray-500 mt-1">
                                                            Try changing your search or filters.
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Table Footer */}
                            <div className="px-5 py-4 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-2">
                                <p className="text-[11px] text-gray-500">
                                    Showing{" "}
                                    <span className="text-gray-300 font-medium">
                                        {filteredScreens.length}
                                    </span>{" "}
                                    of{" "}
                                    <span className="text-gray-300 font-medium">
                                        {screens.length}
                                    </span>{" "}
                                    screens
                                </p>
                                <p className="text-[10px] text-gray-600">
                                    Cinevo Theatre Management
                                </p>
                            </div>
                        </section>
                    </div>
                </main>

                {/* Add / Edit Screen Modal */}
                {modalOpen && (
                    <div
                        className="fixed inset-0 z-[60] bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
                        onClick={() => setModalOpen(false)}
                    >
                        <div
                            className="bg-[#151522] border border-white/10 rounded-2xl w-full max-w-lg max-h-[88vh] overflow-y-auto shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="sticky top-0 z-10 bg-[#151522] px-5 py-4 border-b border-white/[0.07] flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center">
                                        <MonitorPlay size={17} className="text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-white">
                                            {editingId ? "Edit Screen" : "Add New Screen"}
                                        </h3>
                                        <p className="text-[10px] text-gray-500 mt-0.5">
                                            Enter your screen information below
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setModalOpen(false)}
                                    className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5"
                                >
                                    <X size={17} />
                                </button>
                            </div>

                            <form onSubmit={handleSave} className="p-5 space-y-4">
                                <div>
                                    <label className="block text-[11px] font-medium text-gray-400 mb-2">
                                        Screen Name
                                    </label>
                                    <input
                                        required
                                        value={form.screenName}
                                        onChange={(e) =>
                                            setForm({ ...form, screenName: e.target.value })
                                        }
                                        placeholder="Example: Screen 01"
                                        className="w-full px-3 py-2.5 rounded-lg bg-[#0c0c16] border border-white/10 text-xs text-white placeholder:text-gray-600 outline-none focus:border-purple-500/50"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[11px] font-medium text-gray-400 mb-2">
                                            Theatre
                                        </label>
                                        <select
                                            value={form.theatreName}
                                            onChange={(e) => {
                                                const location =
                                                    e.target.value === "PVR Cinemas"
                                                        ? "Bengaluru"
                                                        : "Hyderabad";
                                                setForm({
                                                    ...form,
                                                    theatreName: e.target.value,
                                                    location,
                                                });
                                            }}
                                            className="w-full px-3 py-2.5 rounded-lg bg-[#0c0c16] border border-white/10 text-xs text-white outline-none focus:border-purple-500/50"
                                        >
                                            <option value="PVR Cinemas">PVR Cinemas</option>
                                            <option value="INOX Multiplex">INOX Multiplex</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-[11px] font-medium text-gray-400 mb-2">
                                            Location
                                        </label>
                                        <input
                                            value={form.location}
                                            readOnly
                                            className="w-full px-3 py-2.5 rounded-lg bg-[#0c0c16] border border-white/10 text-xs text-gray-400 outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[11px] font-medium text-gray-400 mb-2">
                                            Screen Type
                                        </label>
                                        <select
                                            value={form.screenType}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    screenType: e.target.value as ScreenType,
                                                })
                                            }
                                            className="w-full px-3 py-2.5 rounded-lg bg-[#0c0c16] border border-white/10 text-xs text-white outline-none focus:border-purple-500/50"
                                        >
                                            <option value="2D">2D</option>
                                            <option value="3D">3D</option>
                                            <option value="IMAX">IMAX</option>
                                            <option value="4DX">4DX</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-[11px] font-medium text-gray-400 mb-2">
                                            Total Seats
                                        </label>
                                        <input
                                            required
                                            type="number"
                                            min={1}
                                            value={form.totalSeats}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    totalSeats: Number(e.target.value),
                                                })
                                            }
                                            className="w-full px-3 py-2.5 rounded-lg bg-[#0c0c16] border border-white/10 text-xs text-white outline-none focus:border-purple-500/50"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[11px] font-medium text-gray-400 mb-2">
                                        Screen Status
                                    </label>
                                    <select
                                        value={form.status}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                status: e.target.value as ScreenStatus,
                                            })
                                        }
                                        className="w-full px-3 py-2.5 rounded-lg bg-[#0c0c16] border border-white/10 text-xs text-white outline-none focus:border-purple-500/50"
                                    >
                                        <option value="ACTIVE">Active</option>
                                        <option value="INACTIVE">Inactive</option>
                                    </select>
                                </div>

                                <div className="flex justify-end gap-2 pt-3 border-t border-white/[0.07]">
                                    <button
                                        type="button"
                                        onClick={() => setModalOpen(false)}
                                        className="px-4 py-2.5 rounded-lg border border-white/10 text-xs text-gray-400 hover:bg-white/5"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white transition"
                                    >
                                        {editingId ? "Save Changes" : "Add Screen"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* View Screen Modal */}
                {selectedScreen && (
                    <div
                        className="fixed inset-0 z-[60] bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
                        onClick={() => setSelectedScreen(null)}
                    >
                        <div
                            className="bg-[#151522] border border-white/10 rounded-2xl w-full max-w-md shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="px-5 py-4 border-b border-white/[0.07] flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center">
                                        <MonitorPlay size={17} className="text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-white">
                                            Screen Details
                                        </h3>
                                        <p className="text-[10px] text-gray-500">
                                            SCR-{String(selectedScreen.id).padStart(4, "0")}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedScreen(null)}
                                    className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5"
                                >
                                    <X size={17} />
                                </button>
                            </div>

                            <div className="p-5 space-y-4">
                                <div>
                                    <p className="text-[10px] text-gray-500 mb-1">Screen Name</p>
                                    <p className="text-sm font-semibold text-white">
                                        {selectedScreen.screenName}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <DetailItem
                                        icon={<Building2 size={14} />}
                                        label="Theatre"
                                        value={selectedScreen.theatreName}
                                    />
                                    <DetailItem
                                        icon={<MapPin size={14} />}
                                        label="Location"
                                        value={selectedScreen.location}
                                    />
                                    <DetailItem
                                        icon={<Film size={14} />}
                                        label="Screen Type"
                                        value={selectedScreen.screenType}
                                    />
                                    <DetailItem
                                        icon={<Users size={14} />}
                                        label="Total Seats"
                                        value={String(selectedScreen.totalSeats)}
                                    />
                                    <DetailItem
                                        icon={<CalendarDays size={14} />}
                                        label="Created Date"
                                        value={selectedScreen.createdDate}
                                    />
                                    <DetailItem
                                        icon={<Layers size={14} />}
                                        label="Status"
                                        value={selectedScreen.status}
                                    />
                                </div>

                                <div className="pt-3 border-t border-white/[0.07] flex justify-end">
                                    <button
                                        onClick={() => setSelectedScreen(null)}
                                        className="px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

function SummaryCard({
    title,
    value,
    subtitle,
    icon,
    iconColor,
    iconBg,
}: {
    title: string;
    value: string | number;
    subtitle: string;
    icon: React.ReactNode;
    iconColor: string;
    iconBg: string;
}) {
    return (
        <div className="bg-[#141421] border border-white/[0.07] rounded-2xl p-4 sm:p-5 hover:border-white/10 transition">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-[11px] text-gray-500 font-medium">{title}</p>
                    <h3 className="text-2xl font-bold text-white mt-2">{value}</h3>
                    <p className="text-[10px] text-gray-600 mt-1">{subtitle}</p>
                </div>
                <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg} ${iconColor}`}
                >
                    {icon}
                </div>
            </div>
        </div>
    );
}

function DetailItem({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) {
    return (
        <div className="bg-[#0c0c16] border border-white/[0.06] rounded-xl p-3">
            <div className="flex items-center gap-2 text-purple-400 mb-2">
                {icon}
                <span className="text-[10px] text-gray-500">{label}</span>
            </div>
            <p className="text-xs text-gray-200 font-medium break-words">{value}</p>
        </div>
    );
}
