import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabs from '../tabs/BottomTabs'
import { Categories, Item, Items, Variants } from '../../Layouts'

const Stack = createStackNavigator();
const AppMainStack = () => {
    return (
        <Stack.Navigator initialRouteName='am_bottomtabs' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='am_bottomtabs' component={BottomTabs} />
            {/* <Stack.Screen name='am_search' component={Search} /> */}
            <Stack.Screen name='am_variants' component={Variants} />
            <Stack.Screen name='am_categories' component={Categories} />
            <Stack.Screen name='am_items' component={Items} />
            <Stack.Screen name='am_item' component={Item} />
        </Stack.Navigator>
    )
}

export default AppMainStack;