import { Dimensions } from "react-native";
import { TRIANGLE_HEIGHT } from "../../../../constants";

const { width } = Dimensions.get("window");

const largestSide = width;
export const triangleHypotenuse = Math.hypot(TRIANGLE_HEIGHT, largestSide);

const angleInRadians = Math.atan(TRIANGLE_HEIGHT / largestSide);
export const angleInDegree = (angleInRadians * 180) / Math.PI;
