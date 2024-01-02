import { View, Text, TouchableOpacity } from "react-native";

import { FooterProps } from "./footer.types";
import { useFooter } from "./footer.hooks";
import styles from "./footer.style";

export const ConnexionFooter = (props: FooterProps) => {
    const { firstWord, link } = props;
    const { linkStyle, handlePress } = useFooter(link);
    return (
        <View style={styles.container}>
            <Text style={styles.questionText}>
                {firstWord} have an account?
            </Text>
            <TouchableOpacity onPress={handlePress}>
                <Text
                    onPress={handlePress}
                    style={{ ...styles.linkText, ...linkStyle }}
                >
                    {link}
                </Text>
            </TouchableOpacity>
        </View>
    );
};
