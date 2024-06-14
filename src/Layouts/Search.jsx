import React from 'react'
import {
    Dimensions, 
    FlatList, 
    SafeAreaView, 
    ScrollView, 
    StatusBar, 
    TouchableOpacity, 
    View
} from 'react-native'
import { theme } from '../constants'
import { s } from 'react-native-wind'
import { Button, GilText, Input } from '../components'
import { ArrowLeftIcon, BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/solid'

const Search = ({ navigation }) => {
    const { width, height } = Dimensions.get('window');

    return (
        <SafeAreaView style={[
                s`flex flex-1 justify-center items-center`,
                {
                    backgroundColor: theme.colors.Slate50
                }
            ]}>
            <StatusBar backgroundColor={theme.colors.Slate50} barStyle={'dark-content'} />
            <View  style={s`w-full h-1/12 px-2 flex flex-row justify-between items-center`}>
                <View style={s`flex flex-row items-center`}>
                    <Button 
                        TouchableOpacityClassName={'flex item-center justify-center mr-2'} 
                        type='simple' bgColor={theme.colors.Slate50} 
                        onPress={() => {
                            navigation.navigate('bt_home', navigation.setParams({ title: 'home' }))
                        }}>
                        <ArrowLeftIcon height={30} width={30} color={theme.colors.Orange500} />
                    </Button>
                    <GilText color={theme.colors.Orange500} weight='bold' fontSize={24}>Search</GilText>
                </View>
                <View style={s`flex flex-row items-center`}>
                    <TouchableOpacity style={s`px-2`}>
                        <BellIcon color={theme.colors.Orange500} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={s`w-full h-11/12`}>
                <View style={s`w-full mb-2 justify-center items-center`}>
                    <Input 
                        style={{width: width * 0.95}} 
                        className='rounded-xl'
                        secondaryIcon={<MagnifyingGlassIcon 
                            height={20} 
                            width={20} 
                            color={theme.colors.Orange500} 
                        />} 
                        borderColor={theme.colors.Slate50}
                        placeholder='Search Gold Name' 
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Search