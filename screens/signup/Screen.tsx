import { View } from "react-native";
import { Stack } from "expo-router";

import { 
    ConnexionFooter, 
    ConnexionHeader, 
    ConnexionLayout 
} from "../../components";
import { SHADES } from "../../constants";

import styles from "./sreen.styles";

type ScreenBackgroundColor = typeof SHADES.orange04 | typeof SHADES.orange055 | typeof SHADES.orange065;
type SignupScreenProps = { 
    readonly backgroundColor: ScreenBackgroundColor
    readonly children: JSX.Element;
    readonly stackTitle: "Sign up" | "Personals" | "Profile picture";
};

export const SignupScreen = ({ backgroundColor, children, stackTitle }: SignupScreenProps) => {
    const STACK_OPTIONS = {
        title: stackTitle,
        headerShown: true,
        header: () => <ConnexionHeader />,
    } as const;

    return (
        <View>
            <Stack.Screen
                options={STACK_OPTIONS}
            />
            <ConnexionLayout>
                <View 
                    style={[styles.container, { backgroundColor }]}
                >
                    {children}
                </View>
            </ConnexionLayout>
            <ConnexionFooter firstWord="Already" link="Log In" />
        </View>
    );
};
