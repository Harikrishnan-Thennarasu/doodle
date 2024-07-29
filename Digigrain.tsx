import { ThemeProvider, createTheme } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/screens/Splash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './src/screens/Onboarding';
import Login from './src/screens/Login';
import VerifyOTP from './src/screens/VerifyOTP';
import SignUp from './src/screens/SignUp';

const theme = createTheme({
    lightColors: {
        primary: '#e7e7e8',
    },
    darkColors: {
        primary: '#000',
    },
    mode: 'light',
});

const App = () => {

    const Stack = createNativeStackNavigator();

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer fallback={<Splash />}>
                <Stack.Navigator>
                    <Stack.Group screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Onboarding" component={Onboarding} />
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
                        <Stack.Screen name="SignUp" component={SignUp} />
                    </Stack.Group>
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;