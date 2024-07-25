import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notifee from '../screens/Notifee';
import Profile from '../screens/Profile';
import NotFound from '../screens/NotFound';
import Scanner from '../screens/Scanner';
import ScanResult from '../screens/ScanResult';
import { Icon, Text, ListItem } from '@rneui/base';
import { Drawer } from 'react-native-drawer-layout';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function StackNavigator() {
    const navigation: any = useNavigation();
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const onNavigateByName = (name: string) => {
        navigation.navigate(name);
        setIsDrawerOpen(false);
    }
    const renderDrawerContent = () => {
        return (
            <View style={styles.drawerContent}>
                <ListItem
                    onPress={() => { onNavigateByName('Profile') }}
                    bottomDivider
                >
                    <Icon style={styles.listIconStyle} name="user" type="font-awesome" />
                    <ListItem.Content>
                        <ListItem.Title>Profile</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <ListItem
                    bottomDivider
                    onPress={() => { onNavigateByName('Notifee') }}
                >
                    <Icon style={styles.listIconStyle} name="bell" type="font-awesome" />
                    <ListItem.Content>
                        <ListItem.Title>Notifee</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <ListItem
                    bottomDivider
                    onPress={() => { onNavigateByName('Scanner') }}
                >
                    <Icon style={styles.listIconStyle} name="qrcode" type="font-awesome" />
                    <ListItem.Content>
                        <ListItem.Title>QR/Bar Scanner</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </View>
        );
    };

    return (
        <Drawer
            open={isDrawerOpen}
            onOpen={() => setIsDrawerOpen(true)}
            onClose={() => setIsDrawerOpen(false)}
            swipeEnabled={true}
            drawerType={"slide"}
            renderDrawerContent={renderDrawerContent}
        >
            <Stack.Navigator
                screenOptions={({ navigation, route }) => {
                    return {
                        headerLeft: () => (
                            <TouchableOpacity
                                style={{
                                    height: 50,
                                    width: 50,
                                    justifyContent: "center",
                                    alignItems: "flex-start"
                                }}
                                onPress={() => { setIsDrawerOpen(true) }}
                            >
                                <Icon
                                    name="menu"
                                    type="material"
                                    color="#010101"
                                />
                            </TouchableOpacity>
                        )
                    }
                }}
                initialRouteName={"Notifee"}
            >
                <Stack.Screen name="Notifee" component={Notifee} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Scanner" component={Scanner} options={{ title: "QR/Bar Scanner" }} />
                <Stack.Screen name="ScanResult" component={ScanResult} options={{ title: "Result" }} />
                <Stack.Screen name="NotFound" component={NotFound} />
            </Stack.Navigator>
        </Drawer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawerContent: {
        flex: 1,
    },
    listIconStyle: {
        width: 25
    }
});


export default StackNavigator;