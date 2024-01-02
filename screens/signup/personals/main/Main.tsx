import { ScrollView, Text } from "react-native";
import { PersonalsForm } from "../form";
import styles from "./main.styles";

export const PersonalsMain = () => {
    return (
        <ScrollView 
            contentContainerStyle={styles.content}
        >
            <Text style={styles.title}>
                Set your personals data
            </Text>
            <PersonalsForm />
        </ScrollView>
    );
};
