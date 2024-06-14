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
import { GilText, ItemCard } from '../components'
import { BellIcon } from 'react-native-heroicons/solid'
import { useFavorites } from '../hooks'

const Favorites = ({ navigation }) => {
    const { width, height } = Dimensions.get('window');
    const favoriteItems = useFavorites()

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
                    <GilText color={theme.colors.Orange500} weight='semiBold' fontSize={24}>Favorites</GilText>
                </View>
                <View style={s`flex flex-row items-center`}>
                    <TouchableOpacity style={s`px-2`}>
                        <BellIcon color={theme.colors.Orange500} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={s`w-full h-11/12`}>
                <View style={s`w-full px-2 justify-center items-center`}>
                    <View style={s`w-full mb-2 justify-around items-center flex-row flex-wrap`}>
                        {favoriteItems.length > 0 ?
                            favoriteItems.map((item, index) => {
                                return <ItemCard 
                                wrapperClassName='px-2 mb-3'
                                    item={item} 
                                    index={item.id} 
                                />;
                            })
                        : 
                        <GilText 
                            className='py-2'
                            color={theme.colors.Orange500}
                            fontSize={18} weight='medium'>
                            No Favorites.
                        </GilText>}
                    </View>
                </View>
            </ScrollView>
            {/* <AdBanner bannerHeight={50} bannerWidth={300} /> */}
        </SafeAreaView>
    )
}

export default Favorites