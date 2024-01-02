import { Pressable } from 'react-native';

import { CoreButtonProps } from './types';

import { 
    getButtonStyle, 
    getElement 
} from './core.functions';
import styles from './core.styles';

export const CoreButton = (props: CoreButtonProps): JSX.Element => {
    const { buttonStyle, textStyle } = getButtonStyle(props);

    return (
        <Pressable
            onPress={props.handlePress}
            style={[styles.button, buttonStyle]}
        >
            {getElement(props, textStyle)}
        </Pressable>
    );
};
