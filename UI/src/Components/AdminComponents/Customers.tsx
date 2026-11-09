
import {
  Users, Search, UserCheck, UserX, Ticket,
  Eye, MoreVertical, Menu
} from "lucide-react";
import AdminSidebar from "./AdminSidebar";
import PageReload from "../PageReload";

const customers = [
  {id:"CUS-1001",name:"Rahul Sharma",email:"rahul@gmail.com",phone:"+91 98765 43210",bookings:18,spent:"₹6,450",joined:"12 Oct 2026",status:"ACTIVE",initials:"RS"},
  {id:"CUS-1002",name:"Priya Kumar",email:"priya@gmail.com",phone:"+91 98765 12340",bookings:12,spent:"₹4,200",joined:"18 Oct 2026",status:"ACTIVE",initials:"PK"},
  {id:"CUS-1003",name:"Arjun Reddy",email:"arjun@gmail.com",phone:"+91 98765 67890",bookings:5,spent:"₹1,850",joined:"25 Oct 2026",status:"ACTIVE",initials:"AR"},
  {id:"CUS-1004",name:"Sneha Rao",email:"sneha@gmail.com",phone:"+91 98765 09876",bookings:0,spent:"₹0",joined:"01 Nov 2026",status:"INACTIVE",initials:"SR"},
];

const Customers = () => (
  <>
    <PageReload/>
    <div className="min-h-screen bg-[#0c0c16] text-white">
      <div className="hidden lg:block w-64 fixed inset-y-0 left-0 z-30"><AdminSidebar/></div>
      <main className="lg:ml-64">
        <header className="h-16 px-5 lg:px-8 border-b border-white/[0.07] flex items-center justify-between">
          <div><h2 className="text-sm font-semibold">Customers</h2><p className="text-[11px] text-gray-500">Cinevo Admin / Customers</p></div>
          <div className="flex items-center gap-3"><span className="hidden sm:block text-xs text-gray-400">Theatre Admin</span><div className="w-9 h-9 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-sm font-semibold">TA</div></div>
        </header>

        <div className="p-5 lg:p-8">
          <div className="mb-7"><p className="text-xs text-purple-400 mb-1">THEATRE MANAGEMENT</p><h1 className="text-2xl font-bold">Customer Management</h1><p className="text-sm text-gray-500 mt-1">View customers who have booked tickets in your theatres.</p></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
            {[
              {label:"Total Customers",value:"2,450",icon:Users,color:"text-purple-400"},
              {label:"Active Customers",value:"2,180",icon:UserCheck,color:"text-emerald-400"},
              {label:"Inactive Customers",value:"270",icon:UserX,color:"text-red-400"},
              {label:"Total Bookings",value:"8,620",icon:Ticket,color:"text-blue-400"},
            ].map(x=><div key={x.label} className="bg-[#141422] border border-white/[0.07] rounded-2xl p-5"><div className="flex justify-between"><p className="text-xs text-gray-400">{x.label}</p><x.icon size={19} className={x.color}/></div><h2 className="text-2xl font-bold mt-3">{x.value}</h2><p className="text-[11px] text-gray-500 mt-1">Customer statistics</p></div>)}
          </div>

          <div className="bg-[#141422] border border-white/[0.07] rounded-2xl overflow-hidden">
            <div className="p-5 border-b border-white/[0.07]"><h2 className="font-semibold">All Customers</h2><p className="text-xs text-gray-500 mt-1">Customer booking and account information.</p></div>
            <div className="p-5 flex flex-col md:flex-row gap-3 justify-between">
              <div className="relative w-full md:max-w-sm"><Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"/><input placeholder="Search customer name, email or ID..." className="w-full bg-[#0c0c16] border border-white/[0.08] rounded-xl pl-10 pr-4 py-2.5 text-xs outline-none"/></div>
              <select className="bg-[#0c0c16] border border-white/[0.08] rounded-xl px-3 py-2.5 text-xs text-gray-400"><option>All Customers</option><option>Active</option><option>Inactive</option></select>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left whitespace-nowrap">
                <thead className="bg-white/[0.025] text-[11px] text-gray-500 uppercase"><tr>{["Customer","Contact","Total Bookings","Total Spent","Joined Date","Status","Actions"].map(x=><th key={x} className="px-5 py-4 font-medium">{x}</th>)}</tr></thead>
                <tbody className="divide-y divide-white/[0.05]">
                  {customers.map(c=><tr key={c.id} className="hover:bg-white/[0.02]">
                    <td className="px-5 py-4"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-purple-500/15 border border-purple-500/20 flex items-center justify-center text-xs font-semibold text-purple-300">{c.initials}</div><div><p className="text-xs font-semibold">{c.name}</p><p className="text-[10px] text-gray-500 mt-1">{c.id}</p></div></div></td>
                    <td className="px-5 py-4"><p className="text-xs text-gray-300">{c.email}</p><p className="text-[10px] text-gray-500 mt-1">{c.phone}</p></td>
                    <td className="px-5 py-4 text-xs text-gray-300">{c.bookings}</td>
                    <td className="px-5 py-4 text-xs font-semibold text-gray-200">{c.spent}</td>
                    <td className="px-5 py-4 text-xs text-gray-400">{c.joined}</td>
                    <td className="px-5 py-4"><span className={`px-2.5 py-1 rounded-full border text-[10px] ${c.status==="ACTIVE"?"bg-emerald-500/10 text-emerald-400 border-emerald-500/20":"bg-red-500/10 text-red-400 border-red-500/20"}`}>{c.status}</span></td>
                    <td className="px-5 py-4"><div className="flex gap-2"><button className="p-2 rounded-lg text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"><Eye size={15}/></button><button className="p-2 rounded-lg text-gray-400 hover:bg-white/5"><MoreVertical size={15}/></button></div></td>
                  </tr>)}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-4 border-t border-white/[0.07] text-xs text-gray-500">Showing 4 of 2,450 customers</div>
          </div>
        </div>
      </main>
    </div>
  </>
);

export default Customers;
