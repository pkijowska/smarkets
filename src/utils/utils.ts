import { Categories } from "../types/types";

export const CATEGORIES:Categories = [
    { type_domain: 'football', label: 'Football', slug: 'football', emoji: '⚽️' },
    {type_domain: 'tennis', label: 'Tennis', slug: 'tennis', emoji: '🎾' },
    { type_domain: 'basketball', label: 'Basketball', slug: 'basketball', emoji: '🏀' },
    { type_domain: 'baseball', label: 'Baseball', slug: 'baseball', emoji: '⚾️' },
    { type_domain: 'rugby_union', label: 'Rugby Union', slug: 'rugby_union', emoji: '🏉' },
    { type_domain: 'boxing', label: 'Boxing', slug: 'boxing', emoji: '🥊' },
    { type_domain: 'cricket', label: 'Cricket', slug: 'cricket', emoji: '🏏' },
];

export function formatUTCDate(utcDateString: string) {
    const date = new Date(utcDateString);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    return `${day} ${month} ${year} ${hours}:${minutes} GMT`;
}