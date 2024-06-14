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
import { Card, GilText } from '../components'
import { ArrowLeftIcon, BellIcon, ChevronRightIcon, MagnifyingGlassIcon } from 'react-native-heroicons/solid'
import { Categories } from '../utility'

const Search = ({ navigation, route }) => {
    const { width, height } = Dimensions.get('window');
    const parameters = route.params;

    return (
        <SafeAreaView style={[
                s`flex flex-1 justify-center items-center pb-2`,
                {
                    backgroundColor: theme.colors.Slate50
                }
            ]}>
            <StatusBar backgroundColor={theme.colors.Slate50} barStyle={'dark-content'} />
            <View  style={s`w-full h-1/12 px-2 flex flex-row justify-between items-center`}>
                <View style={s`flex flex-row items-center`}>
                    { parameters?.type == 'bt' && (
                        <TouchableOpacity onPress={() => {
                            navigation.goBack()
                        }}>
                            <ArrowLeftIcon height={25} width={25} color={theme.colors.Orange500} />
                        </TouchableOpacity>
                    )}
                    <GilText className='ml-2' color={theme.colors.Orange500} weight='semiBold' fontSize={24}>Categories</GilText>
                </View>
                <View style={s`flex flex-row items-center`}>
                    { parameters?.type == 'bt' ? (
                        <TouchableOpacity style={s`px-2`}>
                            <MagnifyingGlassIcon color={theme.colors.Orange500} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={s`px-2`}>
                            <BellIcon color={theme.colors.Orange500} />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
            <ScrollView style={s`w-full h-11/12`}>
                <View style={s`w-full mb-2 justify-center items-center`}>
                    <View style={s`w-full px-5 mt-3`}>
                        {
                            Categories.map((item) => {
                                return(
                                    <Card 
                                        className='flex flex-row items-center justify-between py-6 px-3 pl-4' 
                                        wrapperClassName='mb-4'
                                        onPress={() => {
                                            navigation.navigate('am_items', { id: item.id })
                                        }} 
                                        index={item.id} 
                                        type='gradient'
                                        pressable={true}>
                                        <GilText weight='medium' color={theme.colors.Slate50}>{item.name}</GilText>
                                        <ChevronRightIcon height={30} width={30} color={theme.colors.Slate50} />
                                    </Card>
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>
            {/* <AdBanner bannerHeight={50} bannerWidth={300} /> */}
        </SafeAreaView>
    )
}

export default Search