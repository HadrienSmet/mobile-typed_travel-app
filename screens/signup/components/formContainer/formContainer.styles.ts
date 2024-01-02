import { 
    Dimensions, 
    StyleSheet 
} from "react-native";

import { 
    BORDER_RADIUS,
    SHADES, 
    SPACING 
} from "../../../../constants";

const { width } = Dimensions.get("window");

const PADDING_HORIZONTAL = width / 16;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: SPACING.xh,
        backgroundColor: SHADES.white08,
        paddingVertical: SPACING.xxh,
        paddingHorizontal: PADDING_HORIZONTAL,
        borderRadius: BORDER_RADIUS.small
    },
});

export default styles;