import React from 'react'
import {
    View,
    Text
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Language, Login, OnBoarding } from '../../Layouts'

const Stack = createStackNavigator();
const AppBeginStack = () => {
    return (
        <Stack.Navigator initialRouteName='ab_lang' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='ab_lang' component={Language} />
            <Stack.Screen name='ab_onboard' component={OnBoarding} />
            <Stack.Screen name='ab_login' component={Login} />
        </Stack.Navigator>
    )
}

export default AppBeginStack