import { View } from "react-native";

import styles from "./triangle.style";

export const Triangle = () => {
    return (
        <View style={styles.triangleContainer}>
            <View style={styles.triangle}></View>
        </View>
    );
};
