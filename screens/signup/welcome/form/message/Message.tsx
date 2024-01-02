import { Text } from "react-native";

import { COLORS } from "../../../../../constants";

import { MessageProps } from "./message.types";
import styles from "./message.styles";

export const Message = ({ message, isValid }: MessageProps) => {
    const color = isValid ? COLORS.primary : COLORS.warning;

    return <Text style={[styles.message, { color }]}>{message}</Text>
};
