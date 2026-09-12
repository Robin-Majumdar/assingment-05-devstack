import { FaStar } from "react-icons/fa";
import type { TechnologyType } from "../../Types/TechnologyType"

export interface TechCardProps {
    technology: TechnologyType;
}

export default function TechCard({ technology }: TechCardProps) {

    return (
        <section>
            <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-xs transition-all duration-200 hover:shadow-md">
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
                            <FaStar className="text-yellow-400 text-sm" />
                            {technology.rating}
                        </span>

                    </div>

                    <button
                        className="mt-4 w-full cursor-pointer rounded-xl bg-slate-900 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-slate-800">
                        Add to Stack
                    </button>
                </div>
            </div>
        </section>
    )
}