import { CoreSelectList, SelectListEnum } from "../../core";
import { DayRange } from "../date.types";

type DayListProps = {
    handleDay: (value: DayRange) => void;
    value: DayRange;
    data: Array<DayRange>
}

export const DayList = (props: DayListProps) => {
    return (
        <CoreSelectList 
            type={SelectListEnum.DAY}
            placeholder="dd"
            setSelected={props.handleDay}
            data={props.data}
            value={props.value}
        />
    )
};
