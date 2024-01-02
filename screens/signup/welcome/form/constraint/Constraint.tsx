import { Text } from 'react-native';

import { ConstraintProps } from './constraint.types';
import styles from './constraint.styles';

export const Constraint = ({ constraint }: ConstraintProps) => {
    return <Text style={styles.constraint}>{constraint}</Text>
};
