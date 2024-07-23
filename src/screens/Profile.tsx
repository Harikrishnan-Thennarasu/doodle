import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Input, Button, Icon } from '@rneui/base';

const Profile = ({ navigation, route }: any) => {
    const { params } = route;
    const [userName, setUserName] = useState(params?.name || '');

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Icon name="arrow-back" type="material" color="#fff" onPress={() => { navigation.navigate('Notifee') }} />
                <Avatar
                    rounded
                    size="large"
                    icon={{ name: 'user', type: 'font-awesome' }}
                    containerStyle={styles.avatar}
                />
            </View>
            <View style={styles.profileDetails}>
                <Input
                    label="Name"
                    value={userName}
                    placeholder={'Enter you name'}
                    onChangeText={setUserName}
                    leftIcon={{ type: 'font-awesome', name: 'user', color: '#a8a8a8' }}
                    disabled
                />
                <Input
                    label="Birthday"
                    placeholder="Enter your birthday"
                    leftIcon={{ type: 'font-awesome', name: 'calendar', color: '#a8a8a8' }}
                />
                <Input
                    label="Phone"
                    leftIcon={{ type: 'font-awesome', name: 'phone', color: '#a8a8a8' }}
                    keyboardType="phone-pad"
                />
                <Input
                    label="Instagram account"
                    placeholder="Enter your Instagram handle"
                    leftIcon={{ type: 'font-awesome', name: 'instagram', color: '#a8a8a8' }}
                />
                <Input
                    label="Email"
                    leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#a8a8a8' }}
                    keyboardType="email-address"
                />
                <Input
                    label="Password"
                    placeholder="Enter your password"
                    leftIcon={{ type: 'font-awesome', name: 'lock', color: '#a8a8a8' }}
                    secureTextEntry
                    rightIcon={{ type: 'font-awesome', name: 'eye', color: '#a8a8a8', onPress: () => { } }}
                />
            </View>
            <Button
                title="Edit profile"
                buttonStyle={styles.editButton}
                onPress={() => { }}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#007bff',
        padding: 20,
        borderRadius: 10,
    },
    avatar: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    profileDetails: {
        flex: 1,
    },
    editButton: {
        backgroundColor: '#007bff',
        marginTop: 20,
        borderRadius: 5,
    },
});

export default Profile;
