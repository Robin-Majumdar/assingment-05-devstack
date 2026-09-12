import { use } from "react"
import type { TechnologyType } from "../../Types/TechnologyType"

export interface ExploreSectionProps {
    technologiesPromise: Promise<TechnologyType[]>
}

export default function ExploreSection({ technologiesPromise }: ExploreSectionProps) {

    const technologies = use(technologiesPromise);

    console.log(technologies);

    return (
        <div>
            <h1>Explore Technology</h1>

        </div>
    )
}