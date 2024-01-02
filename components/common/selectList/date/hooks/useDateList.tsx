import { useReducer } from "react";

import { dateReducer } from "../date.reducer";
import { DATE_DEFAULT_STATE } from "../date.constants";
import { DayRange, MonthRange } from "../date.types";
import { getDayAction, getMonthAction, getYearAction } from "../date.actions";

export const useDateList = () => {
    const [dateState, dispatchDateState] = useReducer(dateReducer, DATE_DEFAULT_STATE);

    const handleDay = (day: DayRange) => dispatchDateState(getDayAction(day));
    const handleMonth = (month: MonthRange) => dispatchDateState(getMonthAction(month));
    const handleYear = (year: number) => dispatchDateState(getYearAction(year));

    return {
        dateState,
        handleDay,
        handleMonth,
        handleYear
    }
};
