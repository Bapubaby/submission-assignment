import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import LanguageProvider from '@atoms/LanguageProvider';
import createStore from 'app/rootReducer';
import AppNavigator from './navigators/AppNavigator';
import { translationMessages } from './i18n';

const { store, persistor } = createStore();

const App = () => (
  <Provider store={store}>
    <LanguageProvider messages={translationMessages}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </LanguageProvider>
  </Provider>
);

export default App;
