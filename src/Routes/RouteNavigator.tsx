import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './HomeStack';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import Splash from '../screens/splash';
import AuthStack from './AuthStack';

const RouteNavigator = () => {
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState(null);

  GoogleSignin.configure({
    webClientId:
      '896614962578-j2314ci65bacagr2ra0ujlejve6brpjn.apps.googleusercontent.com',
  });

  const onAuthChange = (user: any) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthChange);
    return subscriber;
  }, []);
  if (initializing) return <Splash />;
  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RouteNavigator;
