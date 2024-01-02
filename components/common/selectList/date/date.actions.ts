import { 
    DateAction, 
    DateEnum, 
    DayRange, 
    MonthRange 
} from "./date.types";

export const getDayAction = (day: DayRange): DateAction => ({ type: DateEnum.DAY, payload: day });
export const getMonthAction = (month: MonthRange): DateAction => ({ type: DateEnum.MONTH, payload: month });
export const getYearAction = (year: number): DateAction => ({ type: DateEnum.YEAR, payload: year });
