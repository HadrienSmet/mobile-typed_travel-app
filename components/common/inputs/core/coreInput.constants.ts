import { COLORS, SPACING } from "../../../../constants";

export const CORE_INPUT_DEFAULT_SIZE = "small" as const;
export const CORE_INPUT_DEFAULT_SPACING = "xxs" as const;
const HORIZONTAL_SPACING = "s" as const;

export const CORE_INPUT_DEFAULT_BACKGROUND_COLOR = COLORS.transparent;
export const CORE_INPUT_DEFAULT_PADDING_HORIZONTAL = SPACING[HORIZONTAL_SPACING];
export const CORE_INPUT_DEFAULT_PADDING_VERTICAL = SPACING[CORE_INPUT_DEFAULT_SPACING];
