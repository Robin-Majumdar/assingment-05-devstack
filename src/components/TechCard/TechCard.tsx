import { FaStar } from "react-icons/fa";
import type { TechnologyType } from "../../Types/TechnologyType"
import { HiCheck } from "react-icons/hi";

export interface TechCardProps {
    technology: TechnologyType;
    addToStack: (technology: TechnologyType) => void;
    selectedTechnologies: TechnologyType[];

}

export default function TechCard({ technology, addToStack, selectedTechnologies }: TechCardProps) {

    const isAdded = selectedTechnologies.some((item) => item.id === technology.id)

    return (
        <div className={`flex h-full flex-col justify-between rounded-2xl border bg-white p-6 shadow-xs transition-all duration-200 hover:shadow-md ${isAdded
                ? "border-red-200"
                : "border-slate-100"
            }`}>
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 p-2">
                        <img src={technology.icon} alt={technology.name} className="h-full w-full object-contain" />
                    </div>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                        {technology.badge}
                    </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">{technology.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{technology.description}</p>
            </div>

            <div>
                <div className="mt-6 flex items-center justify-between text-xs font-medium text-slate-500">
                    <span className="rounded-md bg-slate-100 px-2.5 py-1">{technology.category}</span>
                    <span>{technology.difficulty}</span>

                    <span className="flex items-center gap-1 font-semibold text-slate-700">
                        <FaStar className="text-sm text-yellow-400" />
                        {technology.rating}
                    </span>

                </div>

                <button
                    onClick={() => addToStack(technology)}
                    disabled={isAdded}
                    className={`mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-semibold transition-all duration-200 ${isAdded
                        ? "cursor-not-allowed bg-red-50 text-red-600 ring-1 ring-red-100"
                        : "cursor-pointer bg-slate-900 text-white hover:bg-slate-800"
                        }`}
                >
                    {isAdded ? (
                        <>
                            <HiCheck className="text-base" />
                            <span>Added to Stack</span>
                        </>
                    ) : (
                        "Add to Stack"
                    )}
                </button>
            </div>
        </div>
    )
}