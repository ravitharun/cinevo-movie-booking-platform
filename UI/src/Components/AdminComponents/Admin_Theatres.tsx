import { ArrowUpRight, Building2, MapPin, Menu } from 'lucide-react'
import SectionHeader from './SectionHeader';
import AdminSidebar from './AdminSidebar';
import { useState } from 'react';
import type { RootState } from '../../Store/store';
import { useSelector } from 'react-redux';
import PageReload from '../PageReload';
// import AdminSidebar from './AdminSidebar';

function Admin_Theatres() {
    const theatres = [
        { name: "PVR Cinemas", location: "Bengaluru", screens: 5, status: "Active" },
        { name: "INOX Multiplex", location: "Whitefield", screens: 4, status: "Active" },
        { name: "Cinepolis", location: "Marathahalli", screens: 3, status: "Active" },
    ];
    // const activePage = 
    const count = useSelector((state: RootState) => state.counter);
    const activePage: any = count.Navigation_page
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (




        <>
        <PageReload></PageReload>
            {/* Desktop Sidebar */}

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
                <main className="flex-1 min-w-0 lg:ml-70">
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
                    </header>
                    <SectionHeader
                        title="Theatre Management"
                        description="Manage your registered cinema locations."
                        button="Add Theatre"
                    />
                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">

                        {theatres.map((theatre) => (
                            <div key={theatre.name} className="bg-[#141422] border border-white/10 rounded-2xl p-6">
                                <div className="flex justify-between">
                                    <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center text-violet-400">
                                        <Building2 size={24} />
                                    </div>
                                    <span className="text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full h-fit">
                                        {theatre.status}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold mt-5">{theatre.name}</h3>
                                <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
                                    <MapPin size={15} /> {theatre.location}
                                </p>
                                <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                                    <span className="text-sm text-gray-400">{theatre.screens} Screens</span>
                                    <button className="text-violet-400 text-sm flex items-center gap-1">
                                        Manage <ArrowUpRight size={15} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>

            </div>






        </>)
}

export default Admin_Theatres