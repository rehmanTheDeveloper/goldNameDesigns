import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { PrivacyPolicy, Profile, SettingsLang } from '../../Layouts'

const Stack = createStackNavigator();
const AppSettingStack = () => {
    return (
        <Stack.Navigator initialRouteName='as_profile' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='as_profile' component={Profile} />
            <Stack.Screen name='as_privacypolicy' component={PrivacyPolicy} />
            <Stack.Screen name='as_language' component={SettingsLang} />
        </Stack.Navigator>
    )
}

export default AppSettingStack