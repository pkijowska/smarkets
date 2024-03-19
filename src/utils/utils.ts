import { Categories } from "../types/types";

export const CATEGORIES:Categories = [
    {  label: 'Football', slug: 'football', emoji: '⚽️' },
    { label: 'Tennis', slug: 'tennis', emoji: '🎾' },
    {  label: 'Basketball', slug: 'basketball', emoji: '🏀' },
    { label: 'Baseball', slug: 'baseball', emoji: '⚾️' },
    {  label: 'Rugby Union', slug: 'rugby_union', emoji: '🏉' },
    {  label: 'Boxing', slug: 'boxing', emoji: '🥊' },
    {  label: 'Cricket', slug: 'cricket', emoji: '🏏' },
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