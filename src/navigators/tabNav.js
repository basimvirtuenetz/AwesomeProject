import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TopNav from './topNav';
import Drawer from './drawer';
import Icon from 'react-native-vector-icons/AntDesign'
import { Colors } from '../colors/colors';
import { ActiveBack, Lable } from '../components/styledComp';
import Contact from '../screens/contact';
import Search from '../screens/search';
import Post from '../screens/post';

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused }) => {
                let iconName;
                let bg;

                if (route.name === 'Home') {
                    iconName = 'home';
                    bg = "#fab402";
                } else if (route.name === 'Prof') {
                    iconName = 'user';
                    bg = "#f75605";
                } else if (route.name === 'Msg') {
                    iconName = 'customerservice';
                    bg = "#2ead0e";
                } else if (route.name === 'Search') {
                    iconName = 'search1';
                    bg = "#942fe0";
                } else if (route.name === 'Post') {
                    iconName = 'plus';
                    bg = "#f7052d";
                }
                return (
                    <View style={styles.iconview}>
                        {focused ?
                            <>
                                <View>
                                    <ActiveBack style={{ backgroundColor: bg }}>
                                        <Icon name={iconName} size={22} color={Colors.white} />
                                    </ActiveBack>
                                    <Lable>{route.name}</Lable>
                                </View>
                            </>
                            :
                            <>
                                <Icon name={iconName} size={18} color={Colors.white} />
                            </>}
                    </View>
                )
            },
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: Colors.Dblue,
                borderWidth: 1,
                borderColor: Colors.Dblue,
                position: 'absolute',
                marginHorizontal: 10,
                marginVertical: 4,
                height: 50,
                borderRadius: 26,
                paddingHorizontal: 16,
                elevation: 7
            },
        })}>
            <Tab.Screen name='Home' component={TopNav} />
            <Tab.Screen name='Msg' component={Contact} />
            <Tab.Screen name='Post' component={Post} />
            <Tab.Screen name='Search' component={Search} />
            <Tab.Screen name='Prof' component={Drawer} />
        </Tab.Navigator>
    )
}

export default TabNav

const styles = StyleSheet.create({

    iconview: {
        justifyContent: 'center',
        alignItems: 'center'
    },

})