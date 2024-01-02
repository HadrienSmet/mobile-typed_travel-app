import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import { PseudoElementProps } from './pseudoElement.types';
import { usePseudoElement } from './pseudoElement.hooks';
import styles from './pseudoElement.styles';

export const PseudoElement = (props: PseudoElementProps): JSX.Element => {
    const {
        defaultStyle,
        focusStyle,
        setWidth,
    } = usePseudoElement(props);

    return (
        <View 
            onLayout={({ nativeEvent }) => setWidth(nativeEvent.layout.width)} 
            style={styles.container}
        >
            <Animated.View style={[...defaultStyle, { position: "absolute" }]} />
            <Animated.View style={[...focusStyle, { position: "absolute" }]} />
        </View>
    );
};
