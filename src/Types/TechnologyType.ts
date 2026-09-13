export interface BadgeColor {
    bg: string;
    text: string;
}

export interface TechnologyType {
    id: number;
    name: string;
    description: string;
    category: string;
    badge: string;
    badgeColor: BadgeColor;
    difficulty: string;
    rating: number;
    icon: string;
}