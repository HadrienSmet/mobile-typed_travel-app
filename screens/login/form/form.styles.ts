import { Dimensions, StyleSheet } from "react-native";
import { BORDER_RADIUS, COLORS, SHADES, SIZES, SPACING, WEIGHTS } from "../../../constants";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        gap: SPACING.xxh,
        width: width - (width / 8),
        backgroundColor: SHADES.white06,
        paddingVertical: SPACING.xxl,
        paddingHorizontal: width / 16,
        borderRadius: BORDER_RADIUS.small,
    },
    inputsContainer: {
        gap: SPACING.l,
        width: "100%",
    },
    passwordDivision: {
        width: "100%",
    },
    forgetPasswordText: {
        color: COLORS.primary,
        fontSize: SIZES.xSmall,
        fontWeight: WEIGHTS.bold,
        letterSpacing: 0.5,
        textAlign: "right",

    },
    buttonContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",

        backgroundColor: COLORS.primary,
        borderRadius: BORDER_RADIUS.small,
        padding: SPACING.s,
    },
    buttonText: {
        color: COLORS.white,
        fontWeight: WEIGHTS.bold,
    },
});

export default styles;