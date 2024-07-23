import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Icon } from '@rneui/base';

const NotFound = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Icon
                name="error-outline"
                type="material"
                color="#d32f2f"
                size={100}
            />
            <Text h3 style={styles.title}>Page Not Found</Text>
            <Text style={styles.message}>The page you are looking for doesn't exist.</Text>
            <Button
                title="Go Back"
                buttonStyle={styles.button}
                onPress={() => navigation.replace('Notifee')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        color: '#d32f2f',
        marginVertical: 20,
    },
    message: {
        color: '#757575',
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#d32f2f',
        paddingHorizontal: 20,
        borderRadius: 5,
    },
});

export default NotFound;
