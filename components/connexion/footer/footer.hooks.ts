import { Router } from "expo-router/build/types";
import { useRouter } from "expo-router";

import { COLORS } from "../../../constants";
import { 
    FooterRouteType, 
    LinkStyleType, 
    LinkType 
} from "./footer.types";

const { primary, secondary } = COLORS;

export const useFooter = (link: LinkType) => {
    const router: Router = useRouter();
    const linkStyle: LinkStyleType = {
        color: link === "Sign Up" ? primary : secondary,
    };

    const handlePress = (): void => {
        const route: FooterRouteType =
            link === "Log In" ? "/login" : "/";
        router.push(route);
    };

    return { linkStyle, handlePress };
};
