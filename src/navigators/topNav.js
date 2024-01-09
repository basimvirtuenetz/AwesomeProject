import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Feed from '../screens/feed';
import Main from '../screens/main';
import { Colors } from '../colors/colors';
import Videos from '../screens/videos';
import Content from '../screens/content';
import { Header, Title } from '../components/styledComp';

const Top = createMaterialTopTabNavigator();
const TopNav = () => {
    return (
        <View style={styles.container}>
            <Header>
                <Title>Welcome!</Title>
            </Header>
            <Top.Navigator screenOptions={{
                swipeEnabled: false,
                tabBarPressColor: Colors.Dblue,
                tabBarStyle: {
                    width: '100%',
                    alignSelf: 'center',
                },
                tabBarIndicatorStyle: {
                    width: 75,
                    height: 30,
                    position: 'absolute',
                    bottom: 10,
                    left: 8,
                    borderRadius: 18,
                    backgroundColor: Colors.Dblue
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                },
                tabBarActiveTintColor: Colors.white,
                tabBarInactiveTintColor: Colors.grey
            }}>
                <Top.Screen name='Types' component={Main} />
                <Top.Screen name='Images' component={Feed} />
                <Top.Screen name='Videos' component={Videos} />
                <Top.Screen name='Content' component={Content} />
            </Top.Navigator>
        </View>
    )
}

export default TopNav

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})