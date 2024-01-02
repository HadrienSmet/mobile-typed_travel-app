import { StyleSheet } from "react-native";
import { SPACING } from "../../../../constants";

const styles = StyleSheet.create({
    container: {
        gap: SPACING.xs,
    },
    inputButton: {
        position: "absolute",
    },
    inputShape: {
        flexDirection: "row",
        alignItems: "center",
    },
});

export default styles;
