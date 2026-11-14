import { BarChart3, Building2, Clapperboard, ClipboardCheck, Film, LayoutDashboard, LogOut, MonitorPlay, Settings, Ticket, Users, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../Store/store';
import type { AppDispatch } from 'recharts/types/state/store';
import { Setnavigation } from '../../Store/Navigation';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { logout } from '../../Services/AuthService';



function AdminSidebar() {
    const [, setSidebarOpen] = useState(false);
    const navigate = useNavigate()


    const count = useSelector((state: RootState) => state.counter);
    const activePage: any = count.Navigation_page
    const menuItems = [
        {
            name: "Dashboard",
            icon: LayoutDashboard,
            path_n: "",
            path: "/admin/Dashboard"
        },
        {
            name: "Theatres",
            icon: Building2,
            path_n: "",

            path: "/admin/Theatres"
        },
        {
            name: "TheatreApprovalStatus",
            path_n: "TheatreApprovalStatus",
            icon: ClipboardCheck,
            path: "/admin/TheatreApprovalStatus"
        },
        {
            name: "Screens",
            icon: MonitorPlay,
            path_n: "",
            path: "/admin/Screens"
        },
        {
            name: "Movies",
            icon: Film, path_n: "",
            path: "/admin/Movies"
        },
        {
            name: "Shows",
            icon: Clapperboard,
            path_n: "",
            path: "/admin/Shows"
        },
        {
            name: "Bookings",
            icon: Ticket,
            path_n: "",
            path: "/admin/Bookings"
        },
        {
            name: "Customers",
            icon: Users,
            path_n: "",
            path: "/admin/Customers"
        },
        {
            name: "Revenue",
            icon: BarChart3,
            path_n: "",
            path: "/admin/Revenue"
        },

    ];


    const dispatch = useDispatch<AppDispatch>();
    return (
        <>

            <aside className="h-full flex flex-col bg-[#10101d] border-r border-white/10">
                {/* <PageReoloadpath></PageReoloadpath> */}
                {/* Logo */}
                <div className="h-20 px-6 flex items-center justify-between border-b border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center">
                            <Clapperboard size={23} />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">
                                Cinevo<span className="text-violet-400">.</span>
                            </h1>
                            <p className="text-[9px] text-gray-500 uppercase tracking-[2px]">
                                Admin Portal
                            </p>
                        </div>
                    </div>

                    <button
                        className="lg:hidden text-gray-400"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <X size={22} />
                    </button>
                </div>

                <div className="h-screen flex">
                    <div className="flex-1 px-4 py-6 overflow-y-auto">
                        <p className="text-[10px] font-semibold uppercase tracking-[2px] text-gray-500 px-3 mb-4">
                            Main Menu
                        </p>

                        <nav className="space-y-1">
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                const active: any = activePage == item.name

                                return (
                                    <>

                                        <Link to={`${item.path}`}>

                                            <button
                                                key={item.name}
                                                onClick={() => {

                                                    dispatch(Setnavigation(item));

                                                }}
                                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition ${active
                                                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
                                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                                    }`}
                                            >
                                                <Icon size={19} />
                                                {item.name == "TheatreApprovalStatus" ? item.name.split(" ") : item.name}

                                                {active && (
                                                    <span className="ml-auto w-1.5 h-1.5 bg-white rounded-full" />
                                                )}
                                            </button>
                                        </Link>
                                    </>

                                );
                            })}
                            <button onClick={() => logout(navigate)}>Logout</button>
                        </nav>

                        <p className="text-[10px] font-semibold uppercase tracking-[2px] text-gray-500 px-3 mt-9 mb-4">
                            Preferences
                        </p>

                        <button
                            // onClick={() => setActivePage("Settings")}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm ${activePage === "Settings"
                                ? "bg-violet-600 text-white"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <Settings size={19} />
                            Settings
                        </button>
                    </div>
                </div>
                {/* Profile */}
                <div className="p-4 border-t border-white/10">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.04]">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center font-bold">
                            RA
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold truncate">Ravi Admin</p>
                            <p className="text-xs text-gray-500">Theatre Admin</p>
                        </div>
                        <button title="Logout" className="text-gray-500 hover:text-red-400">
                            <LogOut size={18} />
                        </button>
                    </div>
                </div>
            </aside>
            {/* Navigation */}

        </>
    )
}

export default AdminSidebar