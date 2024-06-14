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
import { Button, CategoryBadge, GilText, Input, ItemCard, Pagination } from '../components'
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/solid'
import LinearGradient from 'react-native-linear-gradient'
import { CarouselSlides, Categories, Items } from '../utility'

const Home = ({ navigation }) => {
    const isCarousel = React.useRef();
    const [currentCarouselIndex, setCurrentCarouselIndex] = React.useState(0);
    const [currentCategoryId, setCurrentCategoryId] = React.useState(1);
    const { height, width } = Dimensions.get('window');

    React.useEffect(() => {
        let interval = setInterval(() => {
            if (currentCarouselIndex == CarouselSlides.length - 1) {
                isCarousel.current.scrollToIndex({
                    index: 0,
                    animation: true
                })
            } else {
                var offsetIndex = currentCarouselIndex + 1
                isCarousel.current.scrollToIndex({
                    index: offsetIndex,
                    animation: true
                })
            }
        }, 3000)

        return () => clearInterval(interval);
    });

    const onCarouselScroll = (e) => {
        const offset = e.nativeEvent.contentOffset.x;
        const carouselIndex = Math.round(offset / width);
        setCurrentCarouselIndex(carouselIndex)
    }

    const ItemLayout = (data, index) => ({
        length: width,
        offset: width * index,
        index: index
    })

    const CarouselCard = ({ item, index }) => {
        return(
            <LinearGradient 
            style={[s`min-h-48 flex justify-center items-center`, {width: width}]} 
            colors={['rgba(249,115,22,1)', 'rgba(245,158,11,1)']} 
            start={{x: 0.5,y: 1}} 
            end={{x: 1,y: 0.5}} key={index}>
                <GilText color='white' weight='semiBold' fontSize={24}>{item.title}</GilText>
            </LinearGradient>
        )
    }
    const onPressCategory = (id) => {
        setCurrentCategoryId(id)
    }

    return (
        <SafeAreaView style={[
                s`flex flex-1 justify-center items-center`,
                {
                    backgroundColor: theme.colors.Slate50
                }
            ]}>
            <StatusBar backgroundColor={theme.colors.Slate50} barStyle={'dark-content'} />
            <View style={s`w-full h-1/12 px-2 flex flex-row justify-between items-center`}>
                <View style={s`flex flex-row`}>
                    <GilText color={theme.colors.Orange500} weight='semiBold' fontSize={24}>Welcome </GilText>
                    <GilText color={theme.colors.Orange500} fontSize={24}>Guest!</GilText>
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
                        onFocus={() => {
                            navigation.navigate('bt_search')
                        }}
                        placeholder='Search Gold Name' 
                    />
                    <View style={s`w-full my-2 flex flex-column justify-center items-center`}>
                        <FlatList 
                            ref={isCarousel}
                            data={CarouselSlides} 
                            onScroll={onCarouselScroll}
                            getItemLayout={ItemLayout}
                            keyExtractor={(item) => item.id}
                            renderItem={CarouselCard}
                            horizontal={true} 
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={true}
                        />
                        <View style={s`w-full mt-2`}>
                            <Pagination data={CarouselSlides} activeIndex={currentCarouselIndex} />
                        </View>
                    </View>
                </View>
                <View style={s`w-full mb-0`}>
                    <View style={s`w-full flex flex-row justify-between items-center px-2`}>
                        <GilText className='' weight='semiBold' fontSize={22} color={theme.colors.Orange500}>Categories</GilText>
                        <Button bgColor={theme.colors.Slate50} type='simple' minHeight={'auto'} onPress={() => {
                            navigation.navigate('am_categories', {type: 'bt'})
                        }}>
                            <GilText style={s`mr-1`} color={theme.colors.Orange500} weight='regular'>See all</GilText>
                        </Button>
                    </View>
                    <View style={s`w-full my-3`}>
                        <FlatList 
                            contentContainerStyle={s`items-center flex-row px-2`}
                            data={Categories} 
                            keyExtractor={(item) => item.id}
                            renderItem={({ item, index }) => 
                                <CategoryBadge 
                                    item={item} 
                                    index={item.id} 
                                    active={currentCategoryId} 
                                    onPress={(id) => {
                                        onPressCategory(id)
                                    }}
                                />
                            }
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                <View style={s`w-full px-2 bg-transparent`}>
                    <View style={s`w-full my-2 justify-center items-center flex-row flex-wrap`}>
                        {Items.map((item, index) => {
                            return <ItemCard 
                                wrapperClassName='px-2 mb-3'
                                item={item} 
                                index={index} 
                            />
                        })}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home