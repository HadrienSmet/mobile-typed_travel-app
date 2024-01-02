import { StyleSheet } from "react-native";

import { 
    COLORS, 
    HEADER_PADDING_BOTTOM, 
    HEADER_PADDING_TOP, 
    SPACING 
} from "../../../constants";

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.white,
        justifyContent: "center",
        paddingTop: HEADER_PADDING_TOP,
        paddingBottom: HEADER_PADDING_BOTTOM,
        paddingHorizontal: SPACING.s,
    },
});

export default styles;
