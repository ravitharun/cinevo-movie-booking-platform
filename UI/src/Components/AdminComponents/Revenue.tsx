
import {
    IndianRupee, TrendingUp, Ticket,
    Download, CreditCard, Wallet, Banknote,
} from "lucide-react";
import AdminSidebar from "./AdminSidebar";
import PageReload from "../PageReload";

const transactions = [
    { id: "TXN-1001", customer: "Rahul Sharma", movie: "Interstellar", date: "09 Nov 2026", method: "UPI", amount: "₹700", status: "SUCCESS" },
    { id: "TXN-1002", customer: "Priya Kumar", movie: "Avengers: Endgame", date: "09 Nov 2026", method: "Credit Card", amount: "₹440", status: "SUCCESS" },
    { id: "TXN-1003", customer: "Arjun Reddy", movie: "KGF Chapter 2", date: "09 Nov 2026", method: "UPI", amount: "₹280", status: "PENDING" },
    { id: "TXN-1004", customer: "Sneha Rao", movie: "Spider-Man", date: "08 Nov 2026", method: "Debit Card", amount: "₹400", status: "REFUNDED" },
];

const monthlyRevenue = [
    { month: "Jan", value: 42 },
    { month: "Feb", value: 55 },
    { month: "Mar", value: 48 },
    { month: "Apr", value: 68 },
    { month: "May", value: 60 },
    { month: "Jun", value: 82 },
    { month: "Jul", value: 70 },
    { month: "Aug", value: 90 },
    { month: "Sep", value: 76 },
    { month: "Oct", value: 100 },
    { month: "Nov", value: 88 },
    { month: "Dec", value: 65 },
];

const Revenue = () => (
    <>
        <PageReload />
        <div className="min-h-screen bg-[#0c0c16] text-white">
            <div className="hidden lg:block w-64 fixed inset-y-0 left-0 z-30"><AdminSidebar /></div>
            <main className="lg:ml-64">
                <header className="h-16 px-5 lg:px-8 border-b border-white/[0.07] flex items-center justify-between">
                    <div><h2 className="text-sm font-semibold">Revenue</h2><p className="text-[11px] text-gray-500">Cinevo Admin / Revenue</p></div>
                    <div className="flex items-center gap-3"><span className="hidden sm:block text-xs text-gray-400">Theatre Admin</span><div className="w-9 h-9 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-sm font-semibold">TA</div></div>
                </header>

                <div className="p-5 lg:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">
                        <div><p className="text-xs text-purple-400 mb-1">THEATRE ANALYTICS</p><h1 className="text-2xl font-bold">Revenue Overview</h1><p className="text-sm text-gray-500 mt-1">Track ticket sales and theatre earnings.</p></div>
                        <div className="flex gap-3">
                            <select className="bg-[#141422] border border-white/[0.08] rounded-xl px-3 py-2.5 text-xs text-gray-400"><option>Last 12 Months</option><option>This Month</option><option>This Week</option></select>
                            <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 rounded-xl px-4 py-2.5 text-xs font-medium"><Download size={15} /> Export</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: "Total Revenue", value: "₹12,45,800", change: "+18.5%", icon: IndianRupee, color: "text-purple-400" },
                            { label: "Today's Revenue", value: "₹24,500", change: "+12.2%", icon: TrendingUp, color: "text-emerald-400" },
                            { label: "Total Ticket Sales", value: "8,620", change: "+8.4%", icon: Ticket, color: "text-blue-400" },
                            { label: "Average Ticket Price", value: "₹245", change: "+4.2%", icon: Wallet, color: "text-yellow-400" },
                        ].map(x => <div key={x.label} className="bg-[#141422] border border-white/[0.07] rounded-2xl p-5"><div className="flex justify-between"><p className="text-xs text-gray-400">{x.label}</p><x.icon size={19} className={x.color} /></div><h2 className="text-2xl font-bold mt-3">{x.value}</h2><p className="text-[11px] text-emerald-400 mt-2">{x.change} <span className="text-gray-500">vs previous period</span></p></div>)}
                    </div>

                    {/* Revenue Chart */}
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-8">
                        <div className="xl:col-span-2 bg-[#141422] border border-white/[0.07] rounded-2xl p-5 sm:p-6">
                            <div className="flex justify-between items-center mb-7">
                                <div><h2 className="font-semibold text-base">Revenue Analytics</h2><p className="text-xs text-gray-500 mt-1">Monthly revenue overview</p></div>
                                <span className="text-xs text-emerald-400">+18.5% this year</span>
                            </div>
                            <div className="h-52 flex items-end gap-2 sm:gap-4">
                                {monthlyRevenue.map(x => (
                                    <div key={x.month} className="flex-1 h-full flex flex-col justify-end items-center gap-2">
                                        <div className="w-full rounded-t-md bg-purple-500/80 hover:bg-purple-400 transition" style={{ height: `${x.value}%` }}></div>
                                        <span className="text-[9px] sm:text-[10px] text-gray-500">{x.month}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-5 pt-4 border-t border-white/[0.07] flex justify-between">
                                <div><p className="text-[11px] text-gray-500">Total earnings</p><p className="text-lg font-bold mt-1">₹12,45,800</p></div>
                                <div className="text-right"><p className="text-[11px] text-gray-500">Best month</p><p className="text-lg font-bold mt-1">October</p></div>
                            </div>
                        </div>

                        {/* Payment Methods */}
                        <div className="bg-[#141422] border border-white/[0.07] rounded-2xl p-5 sm:p-6">
                            <h2 className="font-semibold text-base">Payment Methods</h2>
                            <p className="text-xs text-gray-500 mt-1 mb-6">Revenue by payment type</p>
                            {[
                                { name: "UPI", amount: "₹6,20,000", percent: 50, color: "bg-purple-500", icon: Wallet },
                                { name: "Credit Card", amount: "₹3,10,000", percent: 25, color: "bg-blue-500", icon: CreditCard },
                                { name: "Debit Card", amount: "₹1,86,000", percent: 15, color: "bg-emerald-500", icon: Banknote },
                                { name: "Net Banking", amount: "₹1,29,800", percent: 10, color: "bg-yellow-500", icon: IndianRupee },
                            ].map(x => (
                                <div key={x.name} className="mb-5">
                                    <div className="flex justify-between items-center mb-2"><div className="flex items-center gap-2"><x.icon size={14} className="text-gray-400" /><span className="text-xs text-gray-300">{x.name}</span></div><span className="text-xs font-medium">{x.percent}%</span></div>
                                    <div className="h-1.5 rounded-full bg-white/[0.07] overflow-hidden"><div className={`h-full rounded-full ${x.color}`} style={{ width: `${x.percent}%` }}></div></div>
                                    <p className="text-[10px] text-gray-500 mt-1">{x.amount}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Transactions */}
                    <div className="bg-[#141422] border border-white/[0.07] rounded-2xl overflow-hidden">
                        <div className="p-5 border-b border-white/[0.07]"><h2 className="font-semibold">Recent Transactions</h2><p className="text-xs text-gray-500 mt-1">Latest customer payments and refunds.</p></div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left whitespace-nowrap">
                                <thead className="bg-white/[0.025] text-[11px] text-gray-500 uppercase"><tr>{["Transaction ID", "Customer", "Movie", "Date", "Payment Method", "Amount", "Status"].map(x => <th key={x} className="px-5 py-4 font-medium">{x}</th>)}</tr></thead>
                                <tbody className="divide-y divide-white/[0.05]">
                                    {transactions.map(t => <tr key={t.id} className="hover:bg-white/[0.02]">
                                        <td className="px-5 py-4 text-xs font-semibold text-purple-300">{t.id}</td>
                                        <td className="px-5 py-4 text-xs text-gray-300">{t.customer}</td>
                                        <td className="px-5 py-4 text-xs text-gray-300">{t.movie}</td>
                                        <td className="px-5 py-4 text-xs text-gray-400">{t.date}</td>
                                        <td className="px-5 py-4 text-xs text-gray-400">{t.method}</td>
                                        <td className="px-5 py-4 text-xs font-semibold">{t.amount}</td>
                                        <td className="px-5 py-4"><span className={`px-2.5 py-1 rounded-full border text-[10px] ${t.status === "SUCCESS" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : t.status === "PENDING" ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" : "bg-red-500/10 text-red-400 border-red-500/20"}`}>{t.status}</span></td>
                                    </tr>)}
                                </tbody>
                            </table>
                        </div>
                        <div className="px-5 py-4 border-t border-white/[0.07] text-xs text-gray-500">Showing 4 recent transactions</div>
                    </div>
                </div>
            </main>
        </div>
    </>
);

export default Revenue;
