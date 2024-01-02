import { useEffect } from "react";
import { View } from "react-native";

import { Label } from "../../label";

import { useDateData, useDateList } from "./hooks";
import { MONTH_ARRAY } from "./date.constants";
import { DateListProps } from "./date.types";
import styles from "./date.styles";

import { DayList } from "./day";
import { MonthList } from "./month";
import { YearList } from "./year";
import { dateToTimestamp } from "../../../../functions/dateToTimestamp";

export const DateSelectList = (props: DateListProps) => {
    const {
        dateState,
        handleDay,
        handleMonth,
        handleYear
    } = useDateList();
    const {
        dayData,
        monthData,
        yearData
    } = useDateData(props.context);
    const { day, month, year } = dateState;

    useEffect(() => {
        const checkDay = () => {
            const maxDays = MONTH_ARRAY[month - 1].days;

            if (day > maxDays) handleDay(maxDays);
            if (day !== 0 && month !== 0) checkDay();

            if (
                day !== 0 &&
                month !== 0 &&
                year !== 0
            ) {
                const timestamp = dateToTimestamp(day, month, year);
                props.handleDate(timestamp);
            }
        }
    }, [dateState]);

    return (
        <View style={styles.container}>
            <Label label={props.label} />
            <View style={styles.row}>
                <View style={styles.smallInput}>
                    <DayList
                        data={dayData}
                        value={day}
                        handleDay={handleDay}
                    />
                </View>
                <View style={styles.smallInput}>
                    <MonthList
                        data={monthData}
                        value={month}
                        handleMonth={handleMonth}
                    />
                </View>
                <View style={styles.bigInput}>
                    <YearList
                        data={yearData}
                        value={year}
                        handleYear={handleYear}
                    />
                </View>
            </View>
        </View>
    )
};
