import { Plus } from "lucide-react";

const SectionHeader = ({ title, description, button }: {
    title: string;
    description: string;
    button?: string;
}) => (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
        <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-sm text-gray-400 mt-2">{description}</p>
        </div>
        {button && (
            <button className="flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 px-5 py-3 rounded-xl text-sm font-medium transition">
                <Plus size={18} />
                {button}
            </button>
        )}
    </div>
);
export default SectionHeader