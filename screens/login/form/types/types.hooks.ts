import { AuthenticationHookOutput } from "../../../../hooks";

type UseFormExtension = { handlePress: () => void; }
export type UseFormOutput = AuthenticationHookOutput & UseFormExtension;
