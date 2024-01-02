import { View } from "react-native";
import { nationalitiesArray } from "../../../../data";
import { Label } from "../../label";
import { CoreSelectList, SelectListEnum } from "../core";
import styles from "./nationalityList.styles";

type NationalityListProps = {
    readonly nationality: string;
    readonly handleNationality: (value: string) => void;
}

export const NationalitySelectList = (props: NationalityListProps) => {
    return (
        <View style={styles.container}>
            <Label label="Country:" />
            <CoreSelectList
                placeholder="Select a country"
                type={SelectListEnum.NATIONALITY}
                data={nationalitiesArray}
                value={props.nationality}
                setSelected={props.handleNationality}
            />
        </View>
    )
};
