import { use, useState } from "react"
import type { TechnologyType } from "../../Types/TechnologyType"
import TechCard from "../TechCard/TechCard";
import { HiXMark } from "react-icons/hi2";

export interface ExploreSectionProps {
    technologiesPromise: Promise<TechnologyType[]>
}

export default function ExploreSection({ technologiesPromise }: ExploreSectionProps) {

    const technologies = use(technologiesPromise);

    const [selectedTechnologies, setSelectedTechnologies] = useState<TechnologyType[]>([]);

    const handleAddToStack = (technology: TechnologyType) => {
        setSelectedTechnologies([...selectedTechnologies, technology]);
    };

    return (
        <section className="w-full bg-[#F8FAFC]/50 px-6 py-6 md:px-12 lg:px-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8">
                    <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
                        Explore the{' '}
                        <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                            Technologies
                        </span>
                    </h2>
                    <p className="mt-2 text-sm text-slate-500">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    <div className="lg:col-span-3">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                technologies.map((technology) => (
                                    <TechCard
                                        key={technology.id}
                                        technology={technology}
                                        addToStack={handleAddToStack}
                                    >
                                    </TechCard>))
                            }
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                        <div className="sticky top-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-xs">

                            <h3 className="text-lg font-bold text-slate-900">
                                Your Stack
                            </h3>

                            <p className="mt-1 text-xs text-slate-400">
                                No technologies selected yet.
                            </p>

                            {
                                selectedTechnologies.length === 0 ? (
                                    <div className="mt-6 flex h-32 items-center justify-center rounded-xl border border-dashed border-slate-200 p-4 text-center">
                                        <span className="text-xs text-slate-400">
                                            Your stack is empty.
                                        </span>
                                    </div>
                                ) : (
                                    <div className="mt-6 flex flex-col gap-3">
                                        {selectedTechnologies.map((technology) => (
                                            <div
                                                key={technology.id}
                                                className="flex items-center justify-between rounded-xl border border-slate-200 p-3"
                                            >
                                                <div className="flex items-center gap-3">

                                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 p-2">
                                                        <img
                                                            src={technology.icon}
                                                            alt={technology.name}
                                                            className="h-full w-full object-contain"
                                                        />
                                                    </div>

                                                    <div>
                                                        <h4 className="text-sm font-bold text-slate-800">
                                                            {technology.name}
                                                        </h4>

                                                        <p className="text-xs text-slate-400">
                                                            {technology.category}
                                                        </p>
                                                    </div>

                                                </div>
                                                <button className="text-slate-400 hover:text-slate-600 transition-colors">
                                                    <HiXMark className="text-2xl" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}