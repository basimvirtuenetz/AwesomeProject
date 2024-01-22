import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './HomeStack'

const RouteNavigator = () => {
    return (
        <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    )
}

export default RouteNavigator