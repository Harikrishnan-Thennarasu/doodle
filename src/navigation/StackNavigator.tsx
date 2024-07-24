import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notifee from '../screens/Notifee';
import Profile from '../screens/Profile';
import NotFound from '../screens/NotFound';
import Scanner from '../screens/Scanner';
import ScanResult from '../screens/ScanResult';

const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName={"Scanner"}>
            <Stack.Screen name="Notifee" component={Notifee} options={{ title: "Doodle" }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="Scanner" component={Scanner} options={{ headerShown: false }} />
            <Stack.Screen name="ScanResult" component={ScanResult} options={{ title: "Result" }} />
            <Stack.Screen name="NotFound" component={NotFound} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default StackNavigator;