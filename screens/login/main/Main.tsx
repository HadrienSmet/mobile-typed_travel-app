import { Text, View } from 'react-native';

import { LoginForm } from '../form';
import styles from './main.styles';

export const LoginMain = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                The perfect tool for every traveller
            </Text>
            <View style={styles.content}>
                <LoginForm />
            </View>
        </View>
    );
};
