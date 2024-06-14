import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { AppBeginStack, AppMainStack, AppSettingStack } from "./navigations"

const MainStack = createStackNavigator();

const Main = () => {
    return(
        <NavigationContainer>
            <MainStack.Navigator initialRouteName="m_main" screenOptions={{ headerShown: false }}>
                <MainStack.Screen name="m_begin" component={AppBeginStack} />
                <MainStack.Screen name="m_main" component={AppMainStack} />
                <MainStack.Screen name="m_setting" component={AppSettingStack} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default Main;