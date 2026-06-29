import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import RootStack from '@/navigation/root/RootStack';
import { store, persistor } from '@/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootStack />
      </PersistGate>
    </Provider>
  );
};

export default App;
