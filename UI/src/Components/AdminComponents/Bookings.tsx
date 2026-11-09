
import {
  Ticket, Search, CheckCircle2,
  Clock, XCircle, Eye, MoreVertical, 
} from "lucide-react";
import AdminSidebar from "./AdminSidebar";
import PageReload from "../PageReload";

const bookings = [
  {id:"BKG-1001",customer:"Rahul Sharma",email:"rahul@gmail.com",movie:"Interstellar",show:"09 Nov • 10:00 AM",seats:"A1, A2",amount:"₹700",payment:"PAID",status:"CONFIRMED"},
  {id:"BKG-1002",customer:"Priya Kumar",email:"priya@gmail.com",movie:"Avengers: Endgame",show:"09 Nov • 01:30 PM",seats:"B4, B5",amount:"₹440",payment:"PAID",status:"CONFIRMED"},
  {id:"BKG-1003",customer:"Arjun Reddy",email:"arjun@gmail.com",movie:"KGF Chapter 2",show:"09 Nov • 06:30 PM",seats:"C3",amount:"₹280",payment:"PENDING",status:"PENDING"},
  {id:"BKG-1004",customer:"Sneha Rao",email:"sneha@gmail.com",movie:"Spider-Man",show:"08 Nov • 09:00 PM",seats:"D1, D2",amount:"₹400",payment:"REFUNDED",status:"CANCELLED"},
];

const Bookings = () => (
  <>
    <PageReload/>
    <div className="min-h-screen bg-[#0c0c16] text-white">
      <div className="hidden lg:block w-64 fixed inset-y-0 left-0 z-30"><AdminSidebar/></div>
      <main className="lg:ml-64">
        <header className="h-16 px-5 lg:px-8 border-b border-white/[0.07] flex items-center justify-between">
          <div><h2 className="text-sm font-semibold">Bookings</h2><p className="text-[11px] text-gray-500">Cinevo Admin / Bookings</p></div>
          <div className="flex items-center gap-3"><span className="hidden sm:block text-xs text-gray-400">Theatre Admin</span><div className="w-9 h-9 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-sm font-semibold">TA</div></div>
        </header>

        <div className="p-5 lg:p-8">
          <div className="mb-7"><p className="text-xs text-purple-400 mb-1">THEATRE MANAGEMENT</p><h1 className="text-2xl font-bold">Booking Management</h1><p className="text-sm text-gray-500 mt-1">Track customer bookings and payment details.</p></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
            {[
              {label:"Total Bookings",value:"1,248",icon:Ticket,color:"text-purple-400"},
              {label:"Confirmed",value:"1,102",icon:CheckCircle2,color:"text-emerald-400"},
              {label:"Pending",value:"86",icon:Clock,color:"text-yellow-400"},
              {label:"Cancelled",value:"60",icon:XCircle,color:"text-red-400"},
            ].map(x=><div key={x.label} className="bg-[#141422] border border-white/[0.07] rounded-2xl p-5"><div className="flex justify-between"><p className="text-xs text-gray-400">{x.label}</p><x.icon size={19} className={x.color}/></div><h2 className="text-2xl font-bold mt-3">{x.value}</h2><p className="text-[11px] text-gray-500 mt-1">Booking statistics</p></div>)}
          </div>

          <div className="bg-[#141422] border border-white/[0.07] rounded-2xl overflow-hidden">
            <div className="p-5 border-b border-white/[0.07]"><h2 className="font-semibold">All Bookings</h2><p className="text-xs text-gray-500 mt-1">Customer ticket booking records.</p></div>
            <div className="p-5 flex flex-col md:flex-row gap-3 justify-between">
              <div className="relative w-full md:max-w-sm"><Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"/><input placeholder="Search booking ID or customer..." className="w-full bg-[#0c0c16] border border-white/[0.08] rounded-xl pl-10 pr-4 py-2.5 text-xs outline-none"/></div>
              <div className="flex gap-3"><select className="bg-[#0c0c16] border border-white/[0.08] rounded-xl px-3 py-2.5 text-xs text-gray-400"><option>All Payment Status</option><option>Paid</option><option>Pending</option><option>Refunded</option></select><select className="bg-[#0c0c16] border border-white/[0.08] rounded-xl px-3 py-2.5 text-xs text-gray-400"><option>All Bookings</option><option>Confirmed</option><option>Cancelled</option></select></div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left whitespace-nowrap">
                <thead className="bg-white/[0.025] text-[11px] text-gray-500 uppercase"><tr>{["Booking ID","Customer","Movie","Show Date & Time","Seats","Amount","Payment","Status","Actions"].map(x=><th key={x} className="px-5 py-4 font-medium">{x}</th>)}</tr></thead>
                <tbody className="divide-y divide-white/[0.05]">
                  {bookings.map(b=><tr key={b.id} className="hover:bg-white/[0.02]">
                    <td className="px-5 py-4 text-xs font-semibold text-purple-300">{b.id}</td>
                    <td className="px-5 py-4"><p className="text-xs font-medium">{b.customer}</p><p className="text-[10px] text-gray-500 mt-1">{b.email}</p></td>
                    <td className="px-5 py-4 text-xs text-gray-300">{b.movie}</td>
                    <td className="px-5 py-4 text-xs text-gray-400">{b.show}</td>
                    <td className="px-5 py-4 text-xs text-gray-400">{b.seats}</td>
                    <td className="px-5 py-4 text-xs font-semibold">{b.amount}</td>
                    <td className="px-5 py-4"><span className={`text-[10px] font-medium ${b.payment==="PAID"?"text-emerald-400":b.payment==="PENDING"?"text-yellow-400":"text-gray-400"}`}>{b.payment}</span></td>
                    <td className="px-5 py-4"><span className={`px-2.5 py-1 rounded-full text-[10px] border ${b.status==="CONFIRMED"?"bg-emerald-500/10 text-emerald-400 border-emerald-500/20":b.status==="PENDING"?"bg-yellow-500/10 text-yellow-400 border-yellow-500/20":"bg-red-500/10 text-red-400 border-red-500/20"}`}>{b.status}</span></td>
                    <td className="px-5 py-4"><div className="flex gap-2"><button className="p-2 rounded-lg text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"><Eye size={15}/></button><button className="p-2 rounded-lg text-gray-400 hover:bg-white/5"><MoreVertical size={15}/></button></div></td>
                  </tr>)}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-4 border-t border-white/[0.07] text-xs text-gray-500">Showing 4 of 1,248 bookings</div>
          </div>
        </div>
      </main>
    </div>
  </>
);

export default Bookings;
