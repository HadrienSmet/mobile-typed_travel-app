import { StyleSheet } from "react-native";
import { 
    COLORS, 
    SIZES, 
    WEIGHTS 
} from "../../../../constants";

const styles = StyleSheet.create({
    mainTitle: {
        fontSize: SIZES.xLarge,
        color: COLORS.white,
        fontWeight: WEIGHTS.black,
        textAlign: "center",
    },
    secondaryTitle: {
        color: COLORS.white,
        textAlign: "center",
    },
});

export default styles;
