import React from 'react'
import {
    View
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    Favorites as FavoritesPage, 
    Home as HomePage, 
    Profile as ProfilePage, 
    Categories as CategoriesPage
} from '../../Layouts';
import AppSettingStack from '../stack/AppSettingStack';
import { HomeIcon, HeartIcon, UserCircleIcon, MagnifyingGlassIcon, CircleStackIcon, TagIcon } from 'react-native-heroicons/solid';
import { theme } from '../../constants';
import { GilText } from '../../components';
import { s } from 'react-native-wind';

const BTN = createBottomTabNavigator() // BTN => BottomTabsNavigation

const BottomTabs = () => {
    return (
        <BTN.Navigator
            initialRouteName='bt_home' 
            screenOptions={{
                headerShown: false, 
                tabBarStyle: [
                    s`flex flex-column pb-3 rounded-tl-3xl rounded-tr-3xl`,
                    {
                        height: 70,
                        backgroundColor: 'white'
                    }
                ],
                tabBarHideOnKeyboard: true
            }}>
            <BTN.Screen 
                name='bt_home' 
                component={HomePage} 
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <HomeIcon 
                                color={ focused ? theme.colors.Orange500 : theme.colors.Amber500 } 
                                style={focused ? { opacity: 1 } : { opacity: 0.9 } }
                                height={ focused ? 26 : 28 } 
                                width={ focused ? 26 : 28 } 
                            />
                        )
                    },
                    tabBarLabel: ({ focused }) => {
                        return(
                            focused ? 
                                <GilText color={theme.colors.Orange500} weight='semiBold' fontSize={16}>Home</GilText>
                            : ''
                        )
                    }
                }}
            />
            <BTN.Screen 
                name='bt_categories' 
                component={CategoriesPage} 
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TagIcon
                                color={ focused ? theme.colors.Orange500 : theme.colors.Amber500 } 
                                style={focused ? { opacity: 1 } : { opacity: 0.9 } }
                                height={ focused ? 26 : 28 } 
                                width={ focused ? 26 : 28 } 
                            />
                        )
                    },
                    tabBarLabel: ({ focused }) => {
                        return(
                            focused ? 
                                <GilText color={theme.colors.Orange500} weight='semiBold' fontSize={16}>Categories</GilText>
                            : ''
                        )
                    }
                }}
            />
            <BTN.Screen 
                name='bt_favorites' 
                component={FavoritesPage} 
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <HeartIcon 
                                color={ focused ? theme.colors.Orange500 : theme.colors.Amber500 } 
                                style={focused ? { opacity: 1 } : { opacity: 0.9 } }
                                height={ focused ? 26 : 28 } 
                                width={ focused ? 26 : 28 } 
                            />
                        )
                    },
                    tabBarLabel: ({ focused }) => {
                        return(
                            focused ? 
                                <GilText color={theme.colors.Orange500} weight='semiBold' fontSize={16}>Favorites</GilText>
                            : ''
                        )
                    }
                }}
            />
            <BTN.Screen 
                name='bt_profile' 
                component={AppSettingStack} 
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <UserCircleIcon
                                color={ focused ? theme.colors.Orange500 : theme.colors.Amber500 } 
                                style={focused ? { opacity: 1 } : { opacity: 0.9 } }
                                height={ focused ? 26 : 28 } 
                                width={ focused ? 26 : 28 } 
                            />
                        )
                    },
                    tabBarLabel: ({ focused }) => {
                        return(
                            focused ? 
                                <GilText color={theme.colors.Orange500} weight='semiBold' fontSize={16}>Profile</GilText>
                            : ''
                        )
                    }
                }}
            />
        </BTN.Navigator>
    )
}

export default BottomTabs