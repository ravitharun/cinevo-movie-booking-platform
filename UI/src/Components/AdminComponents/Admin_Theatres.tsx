import { ArrowUpRight, Building2, ChevronLeft, ChevronRight, FileCheck, MapPin, Menu, Receipt, ShieldCheck, UploadCloud, UserCheck } from 'lucide-react'
import SectionHeader from './SectionHeader';
import AdminSidebar from './AdminSidebar';
import React, { useState } from 'react';
import type { RootState } from '../../Store/store';
import { useSelector } from 'react-redux';
import PageReload from '../PageReload';
import toast, { Toaster } from 'react-hot-toast';
import { axiosInstance } from '../../Services/AdminServices';

import {
    // Building2,
    Mail,
    Phone,
    // MapPin,
    Map,
    MapPinned,
    Monitor,
    CircleCheck,
    X,
    Plus
} from "lucide-react";
import axios from 'axios';
import TheatreManagement from './tt';
function Admin_Theatres() {
    const theatres = [
        { name: "PVR Cinemas", location: "Bengaluru", screens: 5, status: "Active" },
        { name: "INOX Multiplex", location: "Whitefield", screens: 4, status: "Active" },
        { name: "Cinepolis", location: "Marathahalli", screens: 3, status: "Active" },
    ];



    const count = useSelector((state: RootState) => state.counter);
    const activePage: any = count.Navigation_page
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [IsAddTheater, setIsAddTheater] = useState(false)
    const [FormTab, setFormTab] = useState(" 1 Theatre Information")

    // poup form user inputs
    // Theatre Information
    const [theatreName, setTheatreName] = useState("");
    const [theatreEmail, setTheatreEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [numberOfScreens, setNumberOfScreens] = useState("");
    const [theatreStatus, setTheatreStatus] = useState("Active");
    const [fullAddress, setFullAddress] = useState("");
    const [cinemaLicense, setCinemaLicense] = useState<File | null>(null);
    const [businessRegistration, setBusinessRegistration] = useState<File | null>(null);
    const [addressProof, setAddressProof] = useState<File | null>(null);
    const [ownerAuthorization, setOwnerAuthorization] = useState<File | null>(null);
    const [gstCertificate, setGstCertificate] = useState<File | null>(null);
    const [ismouseenter, setismouseenter] = useState(false)


    const AddTheatre = async () => {
        const AddTheatre = {
            theatreName,
            theatreEmail,
            contactNumber,
            city,
            state,
            pincode,
            numberOfScreens,
            theatreStatus,
            fullAddress
        }
        console.log(AddTheatre)
        const response = await axios.post(

            "http://localhost:8085/api/admin/Add/Theater",

            AddTheatre

        );

        return response?.data;


    }
    const SaveData = async (e: any) => {

        e.preventDefault();
        console.log(AddTheatre())

        try {
            await toast.promise(AddTheatre(), {
                loading: "Adding theatre...",
                success: "Theatre added successfully!",
                error: "Failed to add theatre!"
            });
        } catch (error) {
            console.error(error);
        }



    }


    const handelclci = () => {




        setIsAddTheater((prev) => !prev)

        setFormTab(" 1 Theatre Information")
    }

    // popup form
    const closeIsAddTheater = () => {

        setIsAddTheater(false)
        setFormTab(" 1 Theatre Information")



    }


    const Tab: any[] = [{
        icon: <Building2 size={23} />,
        text: " 1 Theatre Information"
    },
    {
        icon: <FileCheck size={18} />,
        text: " 2 Document Verification"
    }]
    const ValidateInput = !theatreName.trim() ||
        !theatreEmail.trim() ||
        !contactNumber.trim() ||
        !city.trim() ||
        !state.trim() ||
        !pincode.trim() ||
        !numberOfScreens ||
        !fullAddress.trim()



    // HandelManage

    const [ManageManageTheatre, setManageTheatre] = useState(null)


    const HandelManage = (theatre: any) => {


        setManageTheatre(theatre)





    }
    return (




        <>
            <Toaster
                position="top-center"
                reverseOrder={false}

            />
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
                        button={IsAddTheater ? "close Theatre" : "Add Theater"}
                        onclik={handelclci}
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
                                    <button className="text-violet-400 text-sm flex items-center gap-1" onClick={() => HandelManage(theatre)}>
                                        Manage <ArrowUpRight size={15} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {IsAddTheater && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-2 sm:p-4 lg:p-6">

                            {/* Main Modal */}
                            <div className="w-full max-w-2xl max-h-[95dvh] sm:max-h-[90dvh] overflow-y-auto overflow-x-hidden bg-[#141422] border border-white/10 rounded-xl sm:rounded-2xl shadow-2xl">

                                {/* Header */}
                                <div className="sticky top-0 z-20 flex items-center justify-between gap-3 p-4 sm:p-6 bg-[#141422] border-b border-white/10">

                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
                                            <Building2 size={23} />
                                        </div>

                                        <div className="min-w-0">
                                            <h2 className="text-base sm:text-lg font-semibold text-white">
                                                Add New Theatre
                                            </h2>
                                            <p className="text-[11px] sm:text-xs text-gray-500">
                                                Register a new cinema location
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={closeIsAddTheater}
                                        className="shrink-0 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition"
                                    >
                                        <X size={21} />
                                    </button>
                                </div>


                                {/* Horizontal Steps */}
                                <div className="px-4 sm:px-6 py-4 sm:py-5">
                                    <div className="flex items-center w-full gap-2 sm:gap-3">

                                        {Tab.map((tb, idx) => (
                                            <React.Fragment key={idx}>

                                                <div
                                                    className={`relative flex items-center gap-1.5 sm:gap-2 shrink-0
                    ${ValidateInput && idx === 1
                                                            ? "cursor-not-allowed"
                                                            : "cursor-pointer"
                                                        }`}
                                                    onClick={() => {
                                                        if (!ValidateInput || idx === 0) {
                                                            setFormTab(tb.text);
                                                        }
                                                    }}
                                                    onMouseEnter={() => {
                                                        if (ValidateInput && idx === 1) {
                                                            setismouseenter(true);
                                                        }
                                                    }}
                                                    onMouseLeave={() => setismouseenter(false)}
                                                >
                                                    <span className={`shrink-0 ${tb.text === FormTab
                                                        ? "text-violet-400"
                                                        : "text-gray-500"
                                                        }`}>
                                                        {tb.icon}
                                                    </span>

                                                    <span className={`text-[10px] sm:text-sm font-medium whitespace-nowrap ${tb.text === FormTab
                                                        ? "text-violet-400"
                                                        : "text-gray-400"
                                                        }`}>
                                                        {tb.text.replace(/^\s*\d+\s*/, "")}
                                                    </span>

                                                    {/* Tooltip */}
                                                    {ismouseenter && ValidateInput && idx === 1 && (
                                                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50 w-48 rounded-lg border border-violet-500/30 bg-gray-900 px-3 py-2 shadow-xl">
                                                            <p className="text-xs text-gray-200 text-center">
                                                                <span className="text-violet-400 font-semibold">
                                                                    First fill Section 1
                                                                </span>
                                                                <br />
                                                                Complete Theatre Information to continue.
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>

                                                {idx !== Tab.length - 1 && (
                                                    <div className="flex-1 min-w-3 border-b-2 border-dashed border-gray-600" />
                                                )}

                                            </React.Fragment>
                                        ))}

                                    </div>
                                </div>


                                <form className="space-y-5">

                                    {/* THEATRE INfORMATION */}



                                    {FormTab === " 1 Theatre Information" && (
                                        <div className="px-4 sm:px-6 pb-5 space-y-5">

                                            {/* Section Heading */}
                                            <div className="flex items-center gap-2">
                                                <Building2 size={18} className="text-violet-400" />
                                                <h3 className="text-white font-semibold text-sm">
                                                    Basic Theatre Details
                                                </h3>
                                            </div>

                                            {/* Basic Details Grid */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                                {/* Theatre Name */}
                                                <div>
                                                    <label className="text-sm text-gray-400 mb-2 block">
                                                        Theatre Name
                                                    </label>
                                                    <div className="flex items-center gap-3 bg-[#0c0c16] border border-white/10 rounded-xl px-3 focus-within:border-violet-500 transition">
                                                        <Building2 size={18} className="text-violet-400 shrink-0" />
                                                        <input
                                                            type="text"
                                                            placeholder="Enter theatre name"
                                                            value={theatreName}
                                                            onChange={(e) => setTheatreName(e.target.value)}
                                                            className="w-full min-w-0 py-3 bg-transparent outline-none text-white text-sm placeholder:text-gray-600"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Email */}
                                                <div>
                                                    <label className="text-sm text-gray-400 mb-2 block">
                                                        Theatre Email
                                                    </label>
                                                    <div className="flex items-center gap-3 bg-[#0c0c16] border border-white/10 rounded-xl px-3 focus-within:border-violet-500 transition">
                                                        <Mail size={18} className="text-violet-400 shrink-0" />
                                                        <input
                                                            type="email"
                                                            placeholder="Enter email address"
                                                            value={theatreEmail}
                                                            onChange={(e) => setTheatreEmail(e.target.value)}
                                                            className="w-full min-w-0 py-3 bg-transparent outline-none text-white text-sm placeholder:text-gray-600"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Contact */}
                                                <div>
                                                    <label className="text-sm text-gray-400 mb-2 block">
                                                        Contact Number
                                                    </label>
                                                    <div className="flex items-center gap-3 bg-[#0c0c16] border border-white/10 rounded-xl px-3 focus-within:border-violet-500 transition">
                                                        <Phone size={18} className="text-violet-400 shrink-0" />
                                                        <input
                                                            type="tel"
                                                            placeholder="Enter contact number"
                                                            value={contactNumber}
                                                            onChange={(e) => setContactNumber(e.target.value)}
                                                            className="w-full min-w-0 py-3 bg-transparent outline-none text-white text-sm placeholder:text-gray-600"
                                                        />
                                                    </div>
                                                </div>

                                                {/* City */}
                                                <div>
                                                    <label className="text-sm text-gray-400 mb-2 block">
                                                        City
                                                    </label>
                                                    <div className="flex items-center gap-3 bg-[#0c0c16] border border-white/10 rounded-xl px-3 focus-within:border-violet-500 transition">
                                                        <MapPin size={18} className="text-violet-400 shrink-0" />
                                                        <input
                                                            type="text"
                                                            placeholder="Enter city"
                                                            value={city}
                                                            onChange={(e) => setCity(e.target.value)}
                                                            className="w-full min-w-0 py-3 bg-transparent outline-none text-white text-sm placeholder:text-gray-600"
                                                        />
                                                    </div>
                                                </div>

                                                {/* State */}
                                                <div>
                                                    <label className="text-sm text-gray-400 mb-2 block">
                                                        State
                                                    </label>
                                                    <div className="flex items-center gap-3 bg-[#0c0c16] border border-white/10 rounded-xl px-3 focus-within:border-violet-500 transition">
                                                        <Map size={18} className="text-violet-400 shrink-0" />
                                                        <input
                                                            type="text"
                                                            placeholder="Enter state"
                                                            value={state}
                                                            onChange={(e) => setState(e.target.value)}
                                                            className="w-full min-w-0 py-3 bg-transparent outline-none text-white text-sm placeholder:text-gray-600"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Pincode */}
                                                <div>
                                                    <label className="text-sm text-gray-400 mb-2 block">
                                                        Pincode
                                                    </label>
                                                    <div className="flex items-center gap-3 bg-[#0c0c16] border border-white/10 rounded-xl px-3 focus-within:border-violet-500 transition">
                                                        <MapPinned size={18} className="text-violet-400 shrink-0" />
                                                        <input
                                                            type="text"
                                                            placeholder="Enter pincode"
                                                            value={pincode}
                                                            onChange={(e) => setPincode(e.target.value)}
                                                            className="w-full min-w-0 py-3 bg-transparent outline-none text-white text-sm placeholder:text-gray-600"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Screens */}
                                                <div>
                                                    <label className="text-sm text-gray-400 mb-2 block">
                                                        Number of Screens
                                                    </label>
                                                    <div className="flex items-center gap-3 bg-[#0c0c16] border border-white/10 rounded-xl px-3 focus-within:border-violet-500 transition">
                                                        <Monitor size={18} className="text-violet-400 shrink-0" />
                                                        <input
                                                            type="number"
                                                            min="1"
                                                            placeholder="Enter screen count"
                                                            value={numberOfScreens}
                                                            onChange={(e) => setNumberOfScreens(e.target.value)}
                                                            className="w-full min-w-0 py-3 bg-transparent outline-none text-white text-sm placeholder:text-gray-600"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Status */}
                                                <div>
                                                    <label className="text-sm text-gray-400 mb-2 block">
                                                        Theatre Status
                                                    </label>
                                                    <div className="flex items-center gap-3 bg-[#0c0c16] border border-white/10 rounded-xl px-3 focus-within:border-violet-500 transition">
                                                        <CircleCheck size={18} className="text-violet-400 shrink-0" />
                                                        <select
                                                            value={theatreStatus}
                                                            onChange={(e) => setTheatreStatus(e.target.value)}
                                                            className="w-full min-w-0 py-3 bg-transparent outline-none text-white text-sm"
                                                        >
                                                            <option value="Active" className="bg-[#141422]">
                                                                Active
                                                            </option>
                                                            <option value="Inactive" className="bg-[#141422]">
                                                                Inactive
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* Full Address */}
                                            <div>
                                                <label className="text-sm text-gray-400 mb-2 block">
                                                    Full Theatre Address
                                                </label>
                                                <div className="flex items-start gap-3 bg-[#0c0c16] border border-white/10 rounded-xl px-3 focus-within:border-violet-500 transition">
                                                    <MapPinned size={18} className="text-violet-400 mt-3 shrink-0" />
                                                    <textarea
                                                        rows={3}
                                                        placeholder="Enter complete theatre address"
                                                        value={fullAddress}
                                                        onChange={(e) => setFullAddress(e.target.value)}
                                                        className="w-full min-w-0 py-3 bg-transparent outline-none text-white text-sm resize-none placeholder:text-gray-600"
                                                    />
                                                </div>
                                            </div>

                                            {/* Next Button */}
                                            <div className="flex justify-end pt-2">
                                                <button
                                                    type="button"
                                                    onClick={() => setFormTab(" 2 Document Verification")}
                                                    disabled={
                                                        ValidateInput
                                                    }
                                                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium flex items-center justify-center gap-2 transition"
                                                >
                                                    Next
                                                    <ChevronRight size={18} />
                                                </button>
                                            </div>

                                        </div>
                                    )}



                                    {/* ================================= */}
                                    {/* DOCUMENT VERIFICATION */}
                                    {/* ================================= */}


                                    {FormTab === " 2 Document Verification" && (
                                        <div className="px-4 sm:px-6 pb-5 pt-2 space-y-5 border-t border-white/10">

                                            {/* Section Heading */}
                                            <div className="flex items-center gap-2">
                                                <FileCheck size={19} className="text-violet-400" />

                                                <div>
                                                    <h3 className="text-white font-semibold text-sm">
                                                        Document Verification
                                                    </h3>
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        Upload valid theatre registration documents
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Document Upload Grid */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                                {[
                                                    {
                                                        name: "Cinema Operating License",
                                                        icon: FileCheck,
                                                        required: true,
                                                        file: cinemaLicense,
                                                        setter: setCinemaLicense
                                                    },
                                                    {
                                                        name: "Business Registration",
                                                        icon: Building2,
                                                        required: true,
                                                        file: businessRegistration,
                                                        setter: setBusinessRegistration
                                                    },
                                                    {
                                                        name: "Theatre Address Proof",
                                                        icon: MapPin,
                                                        required: true,
                                                        file: addressProof,
                                                        setter: setAddressProof
                                                    },
                                                    {
                                                        name: "Owner / Authorization Proof",
                                                        icon: UserCheck,
                                                        required: true,
                                                        file: ownerAuthorization,
                                                        setter: setOwnerAuthorization
                                                    },
                                                    {
                                                        name: "GST Certificate",
                                                        icon: Receipt,
                                                        required: false,
                                                        file: gstCertificate,
                                                        setter: setGstCertificate
                                                    }
                                                ].map((doc, index) => {

                                                    const Icon = doc.icon;

                                                    return (
                                                        <div key={index} className="min-w-0">

                                                            <label className="text-sm text-gray-300 mb-2 flex flex-wrap items-center gap-2">
                                                                <Icon size={16} className="text-violet-400 shrink-0" />

                                                                {doc.name}

                                                                {doc.required ? (
                                                                    <span className="text-red-400">*</span>
                                                                ) : (
                                                                    <span className="text-gray-500 text-xs">
                                                                        (Optional)
                                                                    </span>
                                                                )}
                                                            </label>

                                                            {/* Upload Box */}
                                                            <label className="flex flex-col items-center justify-center gap-2 p-4 sm:p-5 min-h-32 bg-[#0c0c16] border border-dashed border-white/20 rounded-xl cursor-pointer hover:border-violet-500 hover:bg-violet-500/5 transition">

                                                                <UploadCloud size={25} className="text-violet-400" />

                                                                <span className="text-xs text-gray-400 text-center break-all">
                                                                    {doc.file
                                                                        ? doc.file.name
                                                                        : "Click to upload document"}
                                                                </span>

                                                                <span className="text-[10px] text-gray-600">
                                                                    PDF, JPG, PNG
                                                                </span>

                                                                <input
                                                                    type="file"
                                                                    accept=".pdf,.jpg,.jpeg,.png"
                                                                    className="hidden"
                                                                    onChange={(e) =>
                                                                        doc.setter(e.target.files?.[0] || null)
                                                                    }
                                                                />

                                                            </label>

                                                            {/* Selected File Status */}
                                                            {doc.file && (
                                                                <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
                                                                    <CircleCheck size={13} />
                                                                    Document selected
                                                                </p>
                                                            )}

                                                        </div>
                                                    );
                                                })}

                                            </div>

                                            {/* Admin Note */}
                                            <div className="flex items-start gap-2 p-3 sm:p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                                                <ShieldCheck size={17} className="text-emerald-400 shrink-0 mt-0.5" />

                                                <p className="text-xs text-gray-400 leading-relaxed">
                                                    Documents will be reviewed by Cinevo Platform Admin.
                                                    Ensure all uploaded documents are valid and readable.
                                                </p>
                                            </div>

                                            {/* Previous and Save */}
                                            <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 pt-2">

                                                <button
                                                    type="button"
                                                    onClick={() => setFormTab(" 1 Theatre Information")}
                                                    className="w-full sm:w-auto px-5 py-3 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5 text-sm transition"
                                                >
                                                    <span className="flex items-center justify-center gap-2">
                                                        <ChevronLeft size={17} />
                                                        Previous
                                                    </span>
                                                </button>

                                                <button
                                                    type="submit"
                                                    onClick={SaveData}
                                                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium flex items-center justify-center gap-2 transition"
                                                >
                                                    <Plus size={18} />
                                                    Save Theatre
                                                </button>

                                            </div>

                                        </div>
                                    )}


                                </form>

                            </div>
                        </div>
                    )}
                </main>




            </div >

            {ManageManageTheatre &&
                <TheatreManagement ManageManageTheatre={ManageManageTheatre} set={setManageTheatre} ></TheatreManagement >
            }





        </>)
}

export default Admin_Theatres