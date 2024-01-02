import { StyleSheet } from "react-native";

import { 
    COLORS, 
    SHADOWS, 
    SIZES, 
    TRIANGLE_HEIGHT 
} from "../../../../constants";
import { 
    angleInDegree, 
    triangleHypotenuse 
} from "./triangle.constants";

const styles = StyleSheet.create({
    triangle: {
        backgroundColor: COLORS.white,
        width: triangleHypotenuse + SIZES.small,
        height: TRIANGLE_HEIGHT,
        transform: [
            { translateX: -(triangleHypotenuse / 2) },
            { translateY: -TRIANGLE_HEIGHT },
            { rotate: `${angleInDegree}deg` },
            { translateX: triangleHypotenuse / 2 },
        ],
        ...SHADOWS.large,
    },
    triangleContainer: {
        backgroundColor: COLORS.transparent,
        width: "100%",
        height: TRIANGLE_HEIGHT,
        zIndex: 10,
        position: "absolute",
        top: 0
    },
});

export default styles;
