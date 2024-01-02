import { SelectList } from "react-native-dropdown-select-list";

import { CoreSelectListProps } from "./core.types";
import { getSelectListStyles } from "./core.functions";
import styles from "./core.styles";

export const CoreSelectList = (props: CoreSelectListProps) => {
    const search = props.search ?? false;
    const arrowIcon = props.arrowIcon ?? undefined;
    const {
        boxStyle,
        inputStyle,
        textStyle
    } = getSelectListStyles(props)

    return (
        <SelectList
            data={props.data}
            placeholder={props.placeholder}
            setSelected={props.setSelected}
            search={search}
            arrowicon={arrowIcon}

            boxStyles={{
                ...styles.container, 
                ...boxStyle 
            }}
            dropdownStyles={styles.dropDown}
            dropdownTextStyles={textStyle}
            inputStyles={{ ...textStyle, ...inputStyle}}

        />
    )
};
