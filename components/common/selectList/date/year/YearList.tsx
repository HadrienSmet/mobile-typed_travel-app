import { CoreSelectList, SelectListEnum } from "../../core";

type YearListProps = {
    handleYear: (value: number) => void;
    value: number;
    data: Array<number>
}

export const YearList = (props: YearListProps) => {
    return (
        <CoreSelectList 
            type={SelectListEnum.YEAR}
            placeholder="yyyy"
            setSelected={props.handleYear}
            data={props.data}
            value={props.value}
        />
    )
};
