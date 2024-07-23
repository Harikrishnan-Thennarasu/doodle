import React, { useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Card, Button, Text } from '@rneui/base';
import { notifeePermission, onDisplayHighPriorityNotifee, onDisplayNotification, onDisplayStyledNotifee } from '../functions/notifee-services';

const actions = [
    { id: 'BASIC', title: 'Basic Notification', description: 'Click and see the basic notifcation with icons' },
    { id: 'TEXT_STYLED', title: 'Test Styled Notification', description: 'Click and see styled notification with user actions' },
    { id: 'HIGH_PRIORITY', title: 'Important Notification', description: 'See important notication on-top of applications, allowing direct interaction without pulling down the notification shade' },
];

const onDoAction = (type: string) => {
    notifeePermission(() => {
        if (type === 'BASIC') {
            onDisplayNotification();
        } else if (type === 'TEXT_STYLED') {
            onDisplayStyledNotifee()
        } else if (type === 'HIGH_PRIORITY') {
            onDisplayHighPriorityNotifee();
        }
    })

}

const Notifee = () => {
    const renderItem = ({ item }: any) => (
        <Card containerStyle={styles.card}>
            <Card.Title style={{ textAlign: "left" }}>{item.title}</Card.Title>
            <Card.Divider />
            <Text style={styles.description}>{item.description}</Text>
            <Button
                title="Do Action"
                onPress={() => onDoAction(item.id)}
                buttonStyle={styles.button}
            />
        </Card>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={actions}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
        justifyContent: "center"
    },
    card: {
        marginVertical: 8,
    },
    description: {
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#007bff',
    },
});

export default Notifee;
