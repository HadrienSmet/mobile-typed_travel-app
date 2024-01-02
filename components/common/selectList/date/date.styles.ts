import { StyleSheet } from "react-native";
import { SPACING } from "../../../../constants";

const styles = StyleSheet.create({
    container: { gap: SPACING.xxs },
    row: { flexDirection: "row", gap: SPACING.m },
    smallInput: { flex: 1 },
    bigInput: { flex: 2 }
});

export default styles;
