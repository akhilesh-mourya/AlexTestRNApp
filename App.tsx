import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from 'styled-components';
import Store from './src/redux/store';

import StackNavigator from './src/navigation';
import {persistStore} from 'redux-persist';

import theme from './src/theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const persistor = persistStore(Store);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <StatusBar
            barStyle={'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <StackNavigator />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
