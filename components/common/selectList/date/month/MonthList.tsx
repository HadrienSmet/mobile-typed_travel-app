import { CoreSelectList, SelectListEnum } from "../../core";
import { MonthRange } from "../date.types";

type MonthListProps = {
    handleMonth: (value: MonthRange) => void;
    value: MonthRange;
    data: Array<MonthRange>
}

export const MonthList = (props: MonthListProps) => {
    return (
        <CoreSelectList 
            type={SelectListEnum.MONTH}
            placeholder="mm"
            setSelected={props.handleMonth}
            data={props.data}
            value={props.value}
        />
    )
};
