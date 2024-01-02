import { FontSizesKeys, SpacingValues } from "../../../../types";

export enum SelectListEnum {
    DAY,
    MONTH,
    YEAR,
    GENDER,
    COUNTRY,
    NATIONALITY
}

export type IntrinsequeSelectListProps = {
    readonly setSelected: (value: string | number) => void;
    readonly value: string | number;
    
    readonly arrowIcon? : JSX.Element;
    readonly search?: boolean;
    readonly letterSize?: FontSizesKeys;
    readonly paddingVertical?: SpacingValues;
    readonly paddingHorizontal?: SpacingValues;
};
type CoreSelectListExtension = {
    readonly data: Array<string> | Array<number>;
    readonly type: SelectListEnum;
    readonly placeholder: string;
}
export type CoreSelectListProps = IntrinsequeSelectListProps & CoreSelectListExtension;
