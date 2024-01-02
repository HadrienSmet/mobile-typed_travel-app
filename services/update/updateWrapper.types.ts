export enum StatusEnum {
    UP_TO_DATE,
    LOW_BUILD,
}
type VersionType = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
export type ExplicitVersion = {
    major: VersionType;
    minor: VersionType;
    patch: VersionType;
};
export type WrapperState = {
    status: StatusEnum;
    latestVersion: ExplicitVersion | undefined;
    skippabilityExpiresAt: number | undefined;
};
