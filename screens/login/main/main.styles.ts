import { StyleSheet } from "react-native";

import { 
    COLORS, 
    SIZES, 
    SPACING, 
    WEIGHTS 
} from "../../../constants";

const styles =StyleSheet.create({
    container: {
        gap: SPACING.xxh,
    },
    content: {
        gap: SPACING.xh,
        width: "100%",
        
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: SIZES.medium,
        fontWeight: WEIGHTS.black,
        color: COLORS.black,
        textAlign: "center",
    },
});

export default styles;
