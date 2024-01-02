import { DayRange, MonthRange } from "../components";

// @Function(DayRange, MonthRange, Number) => return Number
export const dateToTimestamp = (day: DayRange, month: MonthRange, year: number): number => {
    const dayString = day < 10 ? `0${day}` : day;
    const monthString = month < 10 ? `0${month}` : month;
    const dateString = `${year}-${monthString}-${dayString}T00:00:00`;
    const date = new Date(dateString);
    const dateTimeStamp = date.getTime();
    return dateTimeStamp;
};
