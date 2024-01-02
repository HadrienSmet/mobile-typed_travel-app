import { useWindowDimensions } from "react-native";

import { useHeaderContext } from "../../../contexts";
import { FOOTER_HEIGHT } from "../../../constants";

type ConnexionLayoutHookOutput = { readonly height: number }

export const useConnexionLayout = (): ConnexionLayoutHookOutput => {
    const { headerHeight } = useHeaderContext();
    const { height: windowHeight } = useWindowDimensions();

    const height: number = windowHeight - (headerHeight + FOOTER_HEIGHT);

    return { height }
};
