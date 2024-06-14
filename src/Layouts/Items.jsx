import React from 'react'
import {
    Dimensions, 
    SafeAreaView, 
    ScrollView, 
    StatusBar, 
    TouchableOpacity, 
    View
} from 'react-native'
import { theme } from '../constants'
import { s } from 'react-native-wind'
import { GilText, ItemCard } from '../components'
import { ArrowLeftIcon, BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/solid'
import {
    Categories, 
    Items as ItemsData
} from '../utility'
import categories from '../utility/store/categories'
import { useItems } from '../hooks'

const Items = ({ navigation, route }) => {
    const { width, height } = Dimensions.get('window');
    const parameters = route.params;
    const category = Categories.find((category) => category.id == route.params?.id);
    const Items = useItems(category.id);
    console.log(Items)
    if (!category) {
        console.error('Category not found');
        setTimeout(() => {
            navigation.goBack()
        }, 1000)
    } else {
        console.log(category);
    }

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
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <ArrowLeftIcon height={25} width={25} color={theme.colors.Orange500} />
                    </TouchableOpacity>
                    <GilText className='ml-2' color={theme.colors.Orange500} weight='semiBold' fontSize={24}>{category.name}</GilText>
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
                <View style={s`w-full mb-2 justify-center items-center px-2`}>
                    <View style={s`w-full mb-2 justify-around items-center flex-row flex-wrap`}>
                        {Items.length > 0 ?
                            Items.map((item, index) => {
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
                            No Items.
                        </GilText>}
                    </View>
                </View>
            </ScrollView>
            {/* <AdBanner bannerHeight={50} bannerWidth={300} /> */}
        </SafeAreaView>
    )
}

export default Items