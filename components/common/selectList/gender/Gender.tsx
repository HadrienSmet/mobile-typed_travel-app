import { View } from "react-native";

import { 
    CoreSelectList,
    IntrinsequeSelectListProps, 
    SelectListEnum 
} from "../core";
import styles from "./gender.styles";
import { Label } from "../../label";

const GENDERS = [
    "Men",
    "Women",
    "Other",
];

export const GenderSelectList = (props: IntrinsequeSelectListProps) => {
    return (
        <View style={styles.container}>
            <Label label="Gender:" />
            <CoreSelectList
                type={SelectListEnum.GENDER}
                data={GENDERS}
                placeholder="Select a gender"
                {...props}
            />
        </View>
    )
};
