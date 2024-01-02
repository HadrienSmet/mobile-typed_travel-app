import { Dimensions, StyleSheet } from "react-native";
import { SPACING } from "../../constants";

const { width } = Dimensions.get("window");
const PADDING_HORIZONTAL = width / 12;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: SPACING.xxh,
        paddingHorizontal: PADDING_HORIZONTAL,
    },
});

export default styles