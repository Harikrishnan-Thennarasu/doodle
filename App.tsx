import { ThemeProvider, createTheme } from '@rneui/themed';
import Notifee from './src/screens/Notifee';
import notifee, { EventType } from '@notifee/react-native';
import { useEffect } from 'react';
import { notifeeHandler } from './src/functions/notifee-services';

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
  useEffect(() => {
    return notifee.onForegroundEvent(notifeeHandler
    );
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Notifee />
    </ThemeProvider>
  );
};

export default App;