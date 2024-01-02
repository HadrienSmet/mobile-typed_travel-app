import { COLORS } from "../../../constants";

const { primary, secondary } = COLORS;

export type LinkStyleType = { color: typeof primary | typeof secondary };
export type LinkType = "Sign Up" | "Log In";
type FirstWordType = "Don't" | "Already";
export type FooterProps = {
    firstWord: FirstWordType;
    link: LinkType;
};
export type FooterRouteType = "/login" | "/";
