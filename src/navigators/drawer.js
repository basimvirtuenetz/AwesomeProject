import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Profile from '../screens/profile';
import Info from '../screens/info';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors } from '../colors/colors';
import { Fonts } from '../fonts/fonts';

const DrawerNav = createDrawerNavigator();
const Drawer = () => {
    return (
        <DrawerNav.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                drawerIcon: ({ focused }) => {
                    let iconName;

                    if (route.name === 'Profile') {
                        iconName = 'home';
                    } else if (route.name === 'Info') {
                        iconName = 'user';
                    }
                    return (
                        <View
                            style={styles.iconView}>
                            {focused ?
                                <Icon
                                    name={iconName}
                                    size={28}
                                    color={Colors.Dblue}
                                />
                                :
                                <Icon
                                    name={iconName}
                                    size={20}
                                    color={Colors.white}
                                />}
                        </View>
                    );
                },
                drawerPosition: 'right',
                drawerActiveBackgroundColor: Colors.white,
                drawerActiveTintColor: Colors.Dblue,
                drawerInactiveTintColor: Colors.white,
                drawerItemStyle: {
                    width: 220,
                    borderRadius: 30,
                    paddingLeft: 10,
                    marginVertical: 10,
                },
                drawerStyle: {
                    paddingVertical: 30,
                    paddingHorizontal: 10,
                    backgroundColor: Colors.Lblue,
                    borderTopLeftRadius: 40,
                    borderBottomLeftRadius: 40
                },
                drawerLabelStyle: {
                    fontSize: 20,
                    textAlign: 'center',
                    fontFamily: Fonts.bold
                },
                overlayColor: Colors.white,
            })}>
            <DrawerNav.Screen name='Profile' component={Profile} />
            <DrawerNav.Screen name='Info' component={Info} />
        </DrawerNav.Navigator>
    )
}

export default Drawer

const styles = StyleSheet.create({
    iconView: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})