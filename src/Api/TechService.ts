import type { TechnologyType } from "../Types/TechnologyType";

export const getTechnologyData = async (): Promise<TechnologyType[]> => {
    const res = await fetch('/technologies.json');
    const data = await res.json();
    return data;
}