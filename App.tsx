import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import Store from './src/redux/store';
import StackNavigator from './src/navigation';

import theme from './src/theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <StackNavigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
