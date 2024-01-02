import { Range } from "../../../../types";

export enum DateEnum {
    DAY,
    MONTH,
    YEAR
}

export type DayRange = Range<0, 32>;
export type MonthRange = Range<0, 13>;

export type DateState = {
    readonly day: DayRange;
    readonly month: MonthRange;
    readonly year: number;
};
type _DateAction<T extends DateEnum, P> = {
    readonly type: T;
    readonly payload: P;
};
type DayAction = _DateAction<DateEnum.DAY, DayRange>;
type MonthAction = _DateAction<DateEnum.MONTH, MonthRange>;
type YearAction = _DateAction<DateEnum.YEAR, number>;
export type DateAction =
    | DayAction
    | MonthAction
    | YearAction;

export type DateContext = "signup" | "trip" | "album";
export type DateListProps = {
    readonly context: DateContext;
    readonly label: string;
    readonly handleDate: (value: number) => void;
}