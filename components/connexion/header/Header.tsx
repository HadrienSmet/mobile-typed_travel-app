import { SafeAreaView } from "react-native-safe-area-context";

import { useHeaderContext } from "../../../contexts";
import { Logo } from "../../../assets";

import styles from "./header.style";

export const ConnexionHeader = () => {
    const { setHeaderHeight } = useHeaderContext();

    return (
        <SafeAreaView 
            onLayout={({ nativeEvent }) => {
                setHeaderHeight(nativeEvent.layout.height)
            }} 
            style={styles.header}
        >
            <Logo />
        </SafeAreaView>
    );
};
