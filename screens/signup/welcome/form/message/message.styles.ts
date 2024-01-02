import { StyleSheet } from "react-native";

import { LINE_HEIGHTS, SIZES, WEIGHTS } from "../../../../../constants";

const styles = StyleSheet.create({
    message: {
        fontSize: SIZES.xSmall,
        fontWeight: WEIGHTS.bold,
        lineHeight: LINE_HEIGHTS.small,
        letterSpacing: 0.3
    }
});

export default styles;
