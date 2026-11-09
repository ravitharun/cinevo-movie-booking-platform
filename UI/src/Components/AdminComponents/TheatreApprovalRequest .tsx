
import {
    ClipboardCheck, Clock, CheckCircle2, XCircle,
    Building2, MapPin, Eye,
    FileText, RefreshCw, Search, Filter, Menu,
    CalendarDays, X,
    Users,
    MonitorPlay
} from "lucide-react";
import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import PageReload from "../PageReload";

const TheatreApprovalRequest = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [search, setSearch] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedTheatre, setSelectedTheatre] = useState<any>(null);

    const activePage = "Theatre Approval Status";

    const theatres = [
        {
            id: 1,
            name: "PVR Cinemas",
            location: "Bengaluru, Karnataka",
            registrationId: "THE-1001",
            submittedDate: "08 Nov 2026",
            status: "UNDER_REVIEW",
            screens: 6,
            owner: "Ravi Kumar",
            remarks: "Your theatre documents are currently being verified by our platform team.",
            reviewedDate: "09 Nov 2026"
        },
        {
            id: 2,
            name: "INOX Multiplex",
            location: "Hyderabad, Telangana",
            registrationId: "THE-1002",
            submittedDate: "05 Nov 2026",
            status: "APPROVED",
            screens: 4,
            owner: "Ravi Kumar",
            remarks: "Congratulations! Your theatre registration has been approved. You can now manage your movies and shows.",
            reviewedDate: "08 Nov 2026"
        }
    ];

    const statusConfig: any = {
        PENDING: {
            label: "Pending",
            color: "text-yellow-400",
            bg: "bg-yellow-500/10",
            border: "border-yellow-500/20"
        },
        UNDER_REVIEW: {
            label: "Under Review",
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
        APPROVED: {
            label: "Approved",
            color: "text-green-400",
            bg: "bg-green-500/10",
            border: "border-green-500/20"
        },
        REJECTED: {
            label: "Rejected",
            color: "text-red-400",
            bg: "bg-red-500/10",
            border: "border-red-500/20"
        },
        SUSPENDED: {
            label: "Suspended",
            color: "text-orange-400",
            bg: "bg-orange-500/10",
            border: "border-orange-500/20"
        }
    };

    const filteredTheatres = theatres.filter((theatre) => {
        const matchesSearch =
            theatre.name.toLowerCase().includes(search.toLowerCase()) ||
            theatre.registrationId.toLowerCase().includes(search.toLowerCase());

        const matchesTab =
            activeTab === "All" ||
            theatre.status === activeTab;

        return matchesSearch && matchesTab;
    });

    const total = theatres.length;
    const approved = theatres.filter(t => t.status === "APPROVED").length;
    const pending = theatres.filter(
        t => t.status === "PENDING" || t.status === "UNDER_REVIEW"
    ).length;
    const rejected = theatres.filter(
        t => t.status === "REJECTED" || t.status === "SUSPENDED"
    ).length;

    return (
        <>
            <PageReload />

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
                                <h2 className="font-semibold text-lg">
                                    {activePage}
                                </h2>
                                <p className="hidden sm:block text-xs text-gray-500">
                                    Cinevo Admin / {activePage}
                                </p>
                            </div>
                        </div>
                    </header>

                    <div className="p-5 sm:p-8 space-y-7">

                        {/* Page Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <h2 className="text-2xl font-bold">
                                    Theatre Approval Requests
                                </h2>
                                <p className="text-gray-500 text-sm mt-2">
                                    Track approval requests for all your registered theatres.
                                </p>
                            </div>

                            <button
                                onClick={() => window.location.reload()}
                                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-sm transition"
                            >
                                <RefreshCw size={16} />
                                Refresh Status
                            </button>
                        </div>

                        {/* Summary Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

                            {[
                                {
                                    label: "Total Theatres",
                                    value: total,
                                    icon: Building2,
                                    color: "text-purple-400"
                                },
                                {
                                    label: "Approved",
                                    value: approved,
                                    icon: CheckCircle2,
                                    color: "text-green-400"
                                },
                                {
                                    label: "Pending Review",
                                    value: pending,
                                    icon: Clock,
                                    color: "text-yellow-400"
                                },
                                {
                                    label: "Rejected / Suspended",
                                    value: rejected,
                                    icon: XCircle,
                                    color: "text-red-400"
                                }
                            ].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-[#141421] border border-white/[0.07] rounded-2xl p-5"
                                    >
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-gray-400">
                                                {item.label}
                                            </p>
                                            <Icon size={21} className={item.color} />
                                        </div>
                                        <h3 className="text-3xl font-bold mt-4">
                                            {item.value}
                                        </h3>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Search and Filter */}
                        <div className="bg-[#141421] border border-white/[0.07] rounded-2xl p-5">

                            <div className="flex flex-col lg:flex-row gap-4 justify-between">

                                <div className="relative flex-1">
                                    <Search
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                    />
                                    <input
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder="Search theatre name or registration ID..."
                                        className="w-full bg-[#0c0c16] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm outline-none focus:border-purple-500"
                                    />
                                </div>

                                <div className="flex items-center gap-2">
                                    <Filter size={18} className="text-gray-500" />
                                    <select
                                        value={activeTab}
                                        onChange={(e) => setActiveTab(e.target.value)}
                                        className="bg-[#0c0c16] border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 outline-none"
                                    >
                                        <option value="All">All Status</option>
                                        <option value="PENDING">Pending</option>
                                        <option value="UNDER_REVIEW">Under Review</option>
                                        <option value="APPROVED">Approved</option>
                                        <option value="REJECTED">Rejected</option>
                                        <option value="SUSPENDED">Suspended</option>
                                    </select>
                                </div>

                            </div>

                            {/* Theatre List */}
                            <div className="mt-6 space-y-4">

                                {filteredTheatres.map((theatre) => {
                                    const status = statusConfig[theatre.status];

                                    return (
                                        <div
                                            key={theatre.id}
                                            className="border border-white/[0.07] rounded-xl p-5 hover:border-purple-500/30 transition"
                                        >

                                            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5">

                                                {/* Theatre Details */}
                                                <div className="flex gap-4">

                                                    <div className="w-14 h-14 shrink-0 rounded-xl bg-purple-500/10 flex items-center justify-center">
                                                        <Building2
                                                            size={26}
                                                            className="text-purple-400"
                                                        />
                                                    </div>

                                                    <div>
                                                        <h3 className="font-semibold text-lg">
                                                            {theatre.name}
                                                        </h3>

                                                        <p className="text-xs text-gray-500 mt-1">
                                                            {theatre.registrationId}
                                                        </p>

                                                        <p className="flex items-center gap-1.5 text-xs text-gray-400 mt-2">
                                                            <MapPin size={14} />
                                                            {theatre.location}
                                                        </p>
                                                    </div>

                                                </div>

                                                {/* Status */}
                                                <div>
                                                    <p className="text-xs text-gray-500 mb-2">
                                                        Approval Status
                                                    </p>
                                                    <span className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-semibold ${status.bg} ${status.color} ${status.border}`}>
                                                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                                        {status.label}
                                                    </span>
                                                </div>

                                                {/* Date */}
                                                <div>
                                                    <p className="text-xs text-gray-500 mb-2">
                                                        Submitted Date
                                                    </p>
                                                    <p className="text-sm text-gray-300 flex items-center gap-2">
                                                        <CalendarDays size={15} className="text-gray-500" />
                                                        {theatre.submittedDate}
                                                    </p>
                                                </div>

                                                {/* Screens */}
                                                <div>
                                                    <p className="text-xs text-gray-500 mb-2">
                                                        Total Screens
                                                    </p>
                                                    <p className="text-sm font-semibold">
                                                        {theatre.screens} Screens
                                                    </p>
                                                </div>

                                                {/* Action */}
                                                <button
                                                    onClick={() => setSelectedTheatre(theatre)}
                                                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 hover:bg-purple-500/10 hover:border-purple-500/30 text-sm transition"
                                                >
                                                    <Eye size={16} />
                                                    View Details
                                                </button>

                                            </div>

                                            {/* Admin Remarks */}
                                            <div className="mt-5 pt-4 border-t border-white/[0.07] flex gap-3">
                                                <FileText size={17} className="text-gray-500 shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="text-xs text-gray-400 font-medium">
                                                        Platform Admin Remarks
                                                    </p>
                                                    <p className="text-xs text-gray-500 mt-1 leading-5">
                                                        {theatre.remarks}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    );
                                })}

                                {filteredTheatres.length === 0 && (
                                    <div className="text-center py-12">
                                        <Building2 size={35} className="mx-auto text-gray-600 mb-3" />
                                        <p className="text-gray-400 font-medium">
                                            No theatres found
                                        </p>
                                        <p className="text-gray-600 text-sm mt-1">
                                            Try changing your search or filter.
                                        </p>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Theatre Details Modal */}

            {/* Theatre Details Modal */}
            {selectedTheatre && (
                <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">

                    <div className="bg-[#151522] border border-white/[0.09] rounded-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl shadow-black/40">

                        {/* Header */}
                        <div className="px-5 py-4 border-b border-white/[0.07] flex justify-between items-center">

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                                    <Building2 size={20} className="text-purple-400" />
                                </div>

                                <div>
                                    <h3 className="text-base font-semibold text-white">
                                        Theatre Details
                                    </h3>
                                    <p className="text-[11px] text-gray-500 mt-0.5">
                                        Registration ID: {selectedTheatre.registrationId}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => setSelectedTheatre(null)}
                                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.07] transition"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-5 space-y-5">

                            {/* Theatre Name */}
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                    <Building2 size={17} className="text-blue-400" />
                                </div>

                                <div>
                                    <p className="text-[11px] text-gray-500 mb-1">
                                        Theatre Name
                                    </p>
                                    <p className="text-sm font-semibold text-white">
                                        {selectedTheatre.name}
                                    </p>
                                </div>
                            </div>

                            {/* Information Grid */}
                            <div className="grid grid-cols-2 gap-3">

                                <div className="bg-[#1c1c2b] border border-white/[0.05] rounded-xl p-3">
                                    <div className="flex items-center gap-2 mb-2">
                                        <MapPin size={14} className="text-purple-400" />
                                        <p className="text-[11px] text-gray-500">Location</p>
                                    </div>
                                    <p className="text-xs font-medium text-gray-200">
                                        {selectedTheatre.location}
                                    </p>
                                </div>

                                <div className="bg-[#1c1c2b] border border-white/[0.05] rounded-xl p-3">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Users size={14} className="text-cyan-400" />
                                        <p className="text-[11px] text-gray-500">Owner</p>
                                    </div>
                                    <p className="text-xs font-medium text-gray-200">
                                        {selectedTheatre.owner}
                                    </p>
                                </div>

                                <div className="bg-[#1c1c2b] border border-white/[0.05] rounded-xl p-3">
                                    <div className="flex items-center gap-2 mb-2">
                                        <MonitorPlay size={14} className="text-indigo-400" />
                                        <p className="text-[11px] text-gray-500">Total Screens</p>
                                    </div>
                                    <p className="text-xs font-semibold text-white">
                                        {selectedTheatre.screens} Screens
                                    </p>
                                </div>

                                <div className="bg-[#1c1c2b] border border-white/[0.05] rounded-xl p-3">
                                    <div className="flex items-center gap-2 mb-2">
                                        <CalendarDays size={14} className="text-orange-400" />
                                        <p className="text-[11px] text-gray-500">Submitted Date</p>
                                    </div>
                                    <p className="text-xs font-medium text-gray-200">
                                        {selectedTheatre.submittedDate}
                                    </p>
                                </div>

                            </div>

                            {/* Approval Status */}
                            <div className={`rounded-xl border p-4 ${statusConfig[selectedTheatre.status].bg} ${statusConfig[selectedTheatre.status].border}`}>

                                <div className="flex items-center justify-between">

                                    <div className="flex items-center gap-2">
                                        <ClipboardCheck size={17} className={statusConfig[selectedTheatre.status].color} />

                                        <p className="text-xs font-semibold text-gray-300">
                                            Approval Status
                                        </p>
                                    </div>

                                    <span className={`text-xs font-semibold ${statusConfig[selectedTheatre.status].color}`}>
                                        {statusConfig[selectedTheatre.status].label}
                                    </span>

                                </div>

                            </div>

                            {/* Admin Remarks */}
                            <div className="bg-[#1c1c2b] border border-white/[0.06] rounded-xl p-4">

                                <div className="flex items-center gap-2">
                                    <FileText size={16} className="text-purple-400" />

                                    <h4 className="text-xs font-semibold text-white">
                                        Platform Admin Remarks
                                    </h4>
                                </div>

                                <p className="text-xs text-gray-400 mt-3 leading-5">
                                    {selectedTheatre.remarks}
                                </p>

                                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/[0.06]">
                                    <Clock size={13} className="text-gray-500" />
                                    <p className="text-[10px] text-gray-500">
                                        Last reviewed: {selectedTheatre.reviewedDate}
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* Footer */}
                        <div className="px-5 py-4 border-t border-white/[0.07] flex justify-end">

                            <button
                                onClick={() => setSelectedTheatre(null)}
                                className="px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold transition"
                            >
                                Close
                            </button>

                        </div>

                    </div>
                </div>
            )}

        </>
    );
};

export default TheatreApprovalRequest;
