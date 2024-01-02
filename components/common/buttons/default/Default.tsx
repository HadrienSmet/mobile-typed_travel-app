import { BORDER_RADIUS } from '../../../../constants';
import { 
    CoreButton,
    IntrinsequeCoreButtonProps,
} from '../core';

export const DefaultButton = (props: IntrinsequeCoreButtonProps) => {
    return (
        <CoreButton
            {...props}
            borderRadius={BORDER_RADIUS.small}
        />
    );
};
