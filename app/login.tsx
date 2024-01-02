import { View } from "react-native";
import { Stack } from "expo-router";

import { 
    ConnexionFooter, 
    ConnexionLayout, 
    ConnexionHeader 
} from "../components";
import { LoginMain } from "../screens";

const STACK_OPTIONS = {
    title: "Login",
    headerShown: true,
    header: () => <ConnexionHeader />,
} as const;

const login = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Screen
                options={STACK_OPTIONS}
            />
            <ConnexionLayout>
                <LoginMain />
            </ConnexionLayout>
            <ConnexionFooter firstWord="Don't" link="Sign Up" />
        </View>
    );
};

export default login;
