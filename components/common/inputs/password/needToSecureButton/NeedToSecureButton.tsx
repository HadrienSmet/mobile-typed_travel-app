import { FontAwesome } from '@expo/vector-icons';

import { NeedToSecureButtonProps } from './needToSecureButton.types';
import { ICON_DEFAULT_COLOR } from './needToSecureButton.constants';

export const NeedToSecureButton = ({ iconColor, needToSecure, size }: NeedToSecureButtonProps): JSX.Element => {
    const color = iconColor ?? ICON_DEFAULT_COLOR;
    
    if (needToSecure) return (
        <FontAwesome 
            name="eye-slash" 
            size={size} 
            color={color}
        />
    )
    return (
        <FontAwesome 
            name="eye" 
            size={size} 
            color={color}
        />
    )
};
