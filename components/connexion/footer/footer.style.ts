import { StyleSheet } from "react-native";

import { 
    COLORS, 
    FOOTER_FONT_SIZE, 
    FOOTER_LINE_HEIGHT, 
    FOOTER_PADDING_VERTICAL, 
    SPACING, 
    WEIGHTS 
} from "../../../constants";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        width: "100%",
        paddingVertical: FOOTER_PADDING_VERTICAL,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        gap: SPACING.xs,
    },
    questionText: {
        fontSize: FOOTER_FONT_SIZE,
        lineHeight: FOOTER_LINE_HEIGHT,
        color: COLORS.gray,
    },
    linkText: {
        zIndex: 10,
        fontSize: FOOTER_FONT_SIZE,
        fontWeight: WEIGHTS.bold,
        lineHeight: FOOTER_LINE_HEIGHT,
    },
});

export default styles;
