import { BORDER_RADIUS } from "../../../../constants";
import { 
    CoreButton,
    IntrinsequeCoreButtonProps,
} from "../core";

export const RoundButton = (props: IntrinsequeCoreButtonProps) => {

    return (
        <CoreButton 
            {...props} 
            borderRadius={BORDER_RADIUS.circle} 
        />
    );
};
