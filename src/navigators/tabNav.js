import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TopNav from './topNav';
import Drawer from './drawer';
import Icon from 'react-native-vector-icons/AntDesign'
import { Colors } from '../colors/colors';
import { Active, ActiveBack } from '../components/styledComp';
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

                if (route.name === 'Home') {
                    iconName = 'home';
                } else if (route.name === 'Prof') {
                    iconName = 'user';
                } else if (route.name === 'Msg') {
                    iconName = 'customerservice';
                } else if (route.name === 'Search') {
                    iconName = 'search1';
                } else if (route.name === 'Post') {
                    iconName = 'plus'
                }
                return (
                    <View style={styles.iconview}>
                        {focused ?
                            <>
                                <ActiveBack>
                                    <Active>
                                        <Icon name={iconName} size={20} color={Colors.black} />
                                    </Active>
                                </ActiveBack>
                            </>
                            :
                            <>
                                <Icon name={iconName} size={20} color={Colors.white} />
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
                marginVertical: 10,
                height: 60,
                borderRadius: 35,
                elevation: 7,
                paddingHorizontal: 12
            },
        })}>
            <Tab.Screen name='Home' component={TopNav} />
            <Tab.Screen name='Msg' component={Contact} />
            <Tab.Screen name='Search' component={Search} />
            <Tab.Screen name='Post' component={Post} />
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