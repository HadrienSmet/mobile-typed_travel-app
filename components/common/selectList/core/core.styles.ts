import { StyleSheet } from "react-native";
import { BORDER_RADIUS, SHADES } from "../../../../constants";

const styles = StyleSheet.create({
    container: {
        borderRadius: BORDER_RADIUS.none,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: SHADES.black02
    },
    dropDown: {
        borderColor: SHADES.black02,
        borderRadius: BORDER_RADIUS.small
    }
});

export default styles;
