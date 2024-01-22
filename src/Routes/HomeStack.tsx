import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dummy from '../screens/Dummy';
import Details from '../screens/Details';
import Header from '../components/reuseablecomps/Header';
import About from '../screens/about';
import Cart from '../screens/cart';
import Setting from '../screens/setting';
import Info from '../screens/info';
import TopNav from '../navigators/topNav';
import TabNav from '../navigators/tabNav';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({route}) => ({
        statusBarTranslucent: true,
        statusBarColor: 'transparent',
        header: () =>
          route.name == 'Home' ? (
            <Header
              title={true}
              backbtn={true}
              profile={false}
              titleTxt={'Basim'}
            />
          ) : route.name == 'Details' ? (
            <Header
              title={true}
              backbtn={true}
              profile={true}
              titleTxt="Profile"
            />
          ) : route.name == 'About' ||
            route.name == 'Cart' ||
            route.name == 'Settings' ||
            route.name == 'Personal-Info' ? (
            <Header
              title={true}
              backbtn={true}
              profile={false}
              titleTxt={route.name}
            />
          ) : null,
      })}>
      <Stack.Screen name="Home" component={TabNav} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Settings" component={Setting} />
      <Stack.Screen name="Personal-Info" component={Info} />
    </Stack.Navigator>
  );
};

export default HomeStack;
