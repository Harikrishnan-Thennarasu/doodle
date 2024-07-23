import { ThemeProvider, createTheme } from '@rneui/themed';
import notifee, { EventType } from '@notifee/react-native';
import { useEffect } from 'react';
import { notifeeHandler } from './src/functions/notifee-services';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { Linking, Text } from 'react-native';

const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'light',
});


const config = {
  screens: {
    Notifee: 'notifee/:type',
    Profile: 'profile/:name',
    NotFound: '*',
  },
};

const linking = {
  prefixes: ['https://doodle.com'],
  config
};

const App = () => {
  useEffect(() => {

    Linking.addEventListener('url', (url) => {
      console.log('EventListener : ', url)
    });

    Linking.getInitialURL().then((url) => {
      console.log('getInitialURL : ', url)
    });

    return notifee.onForegroundEvent(notifeeHandler
    );
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <StackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;