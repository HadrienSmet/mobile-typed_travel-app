import { 
    BORDER_RADIUS,
    BORDER_SIZES, 
    LINE_HEIGHTS, 
    SIZES, 
    SPACING 
} from "../constants";

export type BorderRadiusKeys = keyof typeof BORDER_RADIUS;
export type BorderRadiusValues =  typeof BORDER_RADIUS[BorderRadiusKeys];

export type BorderSizesKeys = keyof typeof BORDER_SIZES;
export type BorderSizesType = typeof BORDER_SIZES;
export type BorderSizesValues = typeof BORDER_SIZES[BorderSizesKeys];
export type BorderSizeGenericValue<K extends BorderSizesKeys> = BorderSizesType[K]; 

export type FontSizesKeys = keyof typeof SIZES;
export type FontSizesType = typeof SIZES;
export type FontSizesValues = typeof SIZES[FontSizesKeys];
export type FontSizesGenericValue<K extends FontSizesKeys> = FontSizesType[K];

export type LineHeightsKeys = keyof typeof LINE_HEIGHTS;
export type LineHeightType = typeof LINE_HEIGHTS;
export type LineHeightValues = typeof LINE_HEIGHTS[LineHeightsKeys];
export type LineHeightGenericValue<K extends LineHeightsKeys> = LineHeightType[K];

export type SpacingKeys = keyof typeof SPACING;
export type SpacingType = typeof SPACING;
export type SpacingValues = typeof SPACING[SpacingKeys];
export type SpacingGenericValue<K extends SpacingKeys> = SpacingType[K];

export type SizesType = FontSizesType & LineHeightType;
