import { StyleSheet } from "react-native";

import { 
    COLORS, 
    SIZES, 
    SPACING, 
    TRIANGLE_HEIGHT, 
    WEIGHTS 
} from "../../../../constants";

const styles = StyleSheet.create({
    content: {
        minWidth: "100%",
        gap: SPACING.xxl,
        marginTop: TRIANGLE_HEIGHT + SPACING.xxh,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: SIZES.xLarge,
        color: COLORS.white,
        fontWeight: WEIGHTS.black,
        textAlign: "center",
    },
});

export default styles;
