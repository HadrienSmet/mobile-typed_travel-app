import { Text } from 'react-native';

import { LabelProps } from './label.types';
import styles from './label.style';

export const Label = ({ label }: LabelProps) => {
    return (
        <Text style={styles.label}>{label}</Text>
    );
};
