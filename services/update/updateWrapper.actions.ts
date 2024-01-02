import { ExplicitVersion, StatusEnum } from "./updateWrapper.types";

export enum ActionsEnum {
    STATUS,
    VERSION,
    EXPIRES_AT,
}
type _ActionPayload<T extends ActionsEnum, P> = {
    type: T;
    payload: P;
};
type StatusActionPayload = _ActionPayload<ActionsEnum.STATUS, StatusEnum>;
type VersionActionPayload = _ActionPayload<
    ActionsEnum.VERSION,
    ExplicitVersion
>;
type ExpiresAtActionPayload = _ActionPayload<
    ActionsEnum.EXPIRES_AT,
    number | undefined
>;
export type WrapperActionPayload =
    | StatusActionPayload
    | VersionActionPayload
    | ExpiresAtActionPayload;

export const getStatusActionPayload = (
    status: StatusEnum
): WrapperActionPayload => ({
    type: ActionsEnum.STATUS,
    payload: status,
});
export const getVersionActionPayload = (
    version: ExplicitVersion
): WrapperActionPayload => ({ type: ActionsEnum.VERSION, payload: version });
export const getExpiresAtActionPayload = (
    timestamp: number | undefined
): WrapperActionPayload => ({
    type: ActionsEnum.EXPIRES_AT,
    payload: timestamp,
});
