import * as React from 'react';
import RouteNavigator from './src/Routes/RouteNavigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persister} from './src/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <RouteNavigator />
      </PersistGate>
    </Provider>
  );
};
export default App;
