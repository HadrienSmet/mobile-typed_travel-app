import { Stack } from "expo-router";
import HeaderContext from "../contexts/HeaderContext";
import { Provider } from "react-redux";
import store from "../store";

export default function Layout() {
    return (
        <Provider store={store}>
            <HeaderContext>
                <Stack />
            </HeaderContext>
        </Provider>
    );
}
