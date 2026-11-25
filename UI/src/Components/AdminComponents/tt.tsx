
import {
    FiMapPin,
    FiMonitor,
    FiX,
    FiCheckCircle,
    FiFilm
} from "react-icons/fi";

interface Theatre {
    location: string;
    name: string;
    screens: number;
    status: string;
}

interface Props {
    ManageManageTheatre: Theatre | null;
}

function TheatreManagement({
    ManageManageTheatre,
    set
}: any) {

    if (!ManageManageTheatre) return null;

    const fields = [
        {
            label: "Theatre Name",
            data: ManageManageTheatre.name,
            Icon: FiFilm
        },
        {
            label: "Location",
            data: ManageManageTheatre.location,
            Icon: FiMapPin
        },
        {
            label: "Total Screens",
            data: ManageManageTheatre.screens,
            Icon: FiMonitor
        },
        {
            label: "Status",
            data: ManageManageTheatre.status,
            Icon: FiCheckCircle
        }
    ];

    const isActive = ManageManageTheatre.status === "Active";

    return (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">

            <div className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-800">

                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                            <FiFilm size={24} />
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-white">
                                Theatre Details
                            </h2>
                            <p className="text-sm text-gray-400 mt-1">
                                Theatre information overview
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() => set(null)}
                        className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
                        aria-label="Close theatre details"
                    >
                        <FiX size={22} />
                    </button>
                </div>

                {/* Theatre Summary */}
                <div className="p-5 sm:p-6">

                    <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-4 mb-5">
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                                <FiFilm size={26} />
                            </div>

                            <div className="min-w-0">
                                <h3 className="text-lg font-semibold text-white break-words">
                                    {ManageManageTheatre.name}
                                </h3>
                                <p className="text-sm text-gray-400 flex items-center gap-1 mt-1">
                                    <FiMapPin size={14} />
                                    {ManageManageTheatre.location}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {fields.map(({ label, data, Icon }) => (
                            <div
                                key={label}
                                className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:border-gray-600 transition"
                            >
                                <div className="flex items-center gap-2 text-gray-400 mb-3">
                                    <Icon className="text-blue-400" size={18} />
                                    <span className="text-sm">{label}</span>
                                </div>

                                {label === "Status" ? (
                                    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${isActive
                                        ? "bg-green-500/10 text-green-400"
                                        : "bg-red-500/10 text-red-400"
                                        }`}>
                                        <span className={`w-2 h-2 rounded-full ${isActive ? "bg-green-400" : "bg-red-400"
                                            }`} />
                                        {data}
                                    </span>
                                ) : (
                                    <p className="text-white font-semibold text-base break-words">
                                        {data}
                                    </p>
                                )}
                            </div>
                        ))}

                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-800 p-5 sm:px-6 flex flex-col-reverse sm:flex-row justify-end gap-3">
                    <button
                        type="button"
                        onClick={() => set(null)}
                        className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
                    >
                        Edit
                    </button>

                    <button
                        type="button"
                        onClick={() => set(null)}
                        className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-medium transition"
                    >
                        Close
                    </button>
                </div>

            </div>
        </div>
    );
}

export default TheatreManagement;
