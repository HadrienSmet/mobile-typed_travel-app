import { ActionsEnum, WrapperActionPayload } from "./updateWrapper.actions";
import { WrapperState } from "./updateWrapper.types";

export const WrapperReducer = (
    state: WrapperState,
    action: WrapperActionPayload
): WrapperState => {
    switch (action.type) {
        case ActionsEnum.STATUS:
            return {
                ...state,
                status: action.payload,
            };
        case ActionsEnum.VERSION:
            return {
                ...state,
                latestVersion: action.payload,
            };
        case ActionsEnum.EXPIRES_AT:
            return {
                ...state,
                skippabilityExpiresAt: action.payload,
            };
    }
};
