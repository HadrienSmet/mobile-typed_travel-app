// export const daysArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

import { DateState } from "./date.types";

export const MONTH_ARRAY = [
    { month: 1, days: 31 },
    { month: 2, days: 28 },
    { month: 3, days: 31 },
    { month: 4, days: 30 },
    { month: 5, days: 31 },
    { month: 6, days: 30 },
    { month: 7, days: 31 },
    { month: 8, days: 31 },
    { month: 9, days: 30 },
    { month: 10, days: 31 },
    { month: 11, days: 30 },
    { month: 12, days: 31 },
] as const;

export const DATE_DEFAULT_STATE: DateState = {
    day: 0,
    month: 0,
    year: 0
}