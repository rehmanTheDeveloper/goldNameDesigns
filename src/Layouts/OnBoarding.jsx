import React from 'react'
import {
    View,
    SafeAreaView,
    StatusBar,
    FlatList,
    Dimensions
} from 'react-native'
import { s } from 'react-native-wind'
import { Button, CircleImage, GilText, Pagination } from '../components'
import { theme } from '../constants'
import { logo } from '../assets'

const { width, height } = Dimensions.get('window');

const Slide = ({ item }) => {
    return(
        <View style={[
                {
                    height: height * 0.75,
                    width, 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                }
            ]}>
            <CircleImage 
                source={item.img} 
                size={width * 0.75} 
                className='mb-6' />
            <GilText 
                className='text-center mb-3'
                weight='medium' 
                fontSize={22}
                color={theme.colors.Amber950}>
                    {item?.title}
            </GilText>
            <GilText 
                style={{ lineHeight: 25 }}
                className='text-center'
                fontSize={18}
                color={theme.colors.Amber950}>
                    {item?.subtitle}
            </GilText>
        </View>
    )
}

const OnBoarding = ({ navigation }) => {
    const ref = React.useRef(null);
    const [slideIndex, setSlideIndex] = React.useState(0);

    const slides = [
        {
            "id": 1,
            "img": 'https://i.pinimg.com/originals/be/bc/1c/bebc1cd91b443b42f1dc8cb6b16a8e15.png',
            "title": 'First Title',
            "subtitle": 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, tempore.'
        },
        {
            "id": 2,
            "img": 'https://i.pinimg.com/originals/be/bc/1c/bebc1cd91b443b42f1dc8cb6b16a8e15.png',
            "title": 'Second Title',
            "subtitle": 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, tempore.'
        },
        {
            "id": 3,
            "img": 'https://i.pinimg.com/originals/be/bc/1c/bebc1cd91b443b42f1dc8cb6b16a8e15.png',
            "title": 'Third Title',
            "subtitle": 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, tempore.'
        }
    ]
    
    const Footer = () => {
        return (
            <View style={s`h-1/4 w-full flex justify-between items-center`}>
                <Pagination 
                    data={slides} 
                    activeIndex={slideIndex} 
                    indicatorHeight={7} 
                    indicatorWidth={7} 
                    indicatorOpacity={0.8} 
                    activeIndicatorHeight={6} 
                    activeIndicatorOpacity={1}
                    activeIndicatorWidth={15} 
                    className='px-3' 
                />
                <View style={s`w-full flex flex-row justify-between items-center px-3`}>
                    { slideIndex == slides.length - 1 ? 
                        <View style={s`w-full flex flex-row justify-center items-center`}>
                            <Button
                                type='gradient'
                                GradientBoxClassName="flex justify-center items-center mb-3 rounded-md w-full"
                                TouchableOpacityClassName='w-full'
                                onPress={() => {
                                    navigation.navigate('m_main')
                                }}>
                                <GilText color={theme.colors.Slate50} weight='semiBold'>Get Started</GilText>
                            </Button>
                        </View>
                    : 
                        <View style={s`flex flex-row justify-between w-full`}>
                            <Button
                                TouchableOpacityClassName="flex justify-center items-center mb-3 rounded-md w-full" 
                                TouchableOpacityStyle={{
                                    width: width * 0.43
                                }}
                                type='outline'
                                onPress={skipBtn}>
                                <GilText color={theme.colors.Orange500} weight='semiBold'>SKIP</GilText>
                            </Button>
                            <Button
                                GradientBoxClassName="flex justify-center items-center mb-3 rounded-md" 
                                type='gradient'
                                GradientBoxStyle={{
                                    width: width * 0.43
                                }}
                                TouchableOpacityClassName='w-full'
                                onPress={nextBtn}>
                                <GilText color={theme.colors.Slate50} weight='semiBold'>NEXT</GilText>
                            </Button>
                        </View>
                    }
                </View>
            </View>
        )
    }
    const FlatListMomentumScrollEnd = (e) => {
        const offsetX = e.nativeEvent.contentOffset.x;
        const offsetXSlideIndex = Math.round(offsetX / width);
        setSlideIndex(offsetXSlideIndex)
    }

    const nextBtn = () => {
        const slideIndexIncrement = slideIndex + 1;
        if (slideIndexIncrement != slides.length) {
            const offset = slideIndexIncrement * width
            ref?.current.scrollToOffset({offset})
            setSlideIndex(slideIndexIncrement)
        }
    }

    const skipBtn = () => {
        const slideIndexLast = slides.length - 1;
        const offset = slideIndexLast * width
        ref?.current.scrollToOffset({offset})
        setSlideIndex(slideIndexLast)
    }

    return (
        <SafeAreaView style={[
                s`flex flex-1 justify-center items-center`,
                { backgroundColor: theme.colors.Slate50 }
            ]}>
            <StatusBar backgroundColor={theme.colors.Slate50} barStyle={'dark-content'} />
            <View style={s`h-3/4 w-full flex justify-center items-center`}>
                <FlatList 
                    style={s`h-full`}
                    data={slides} 
                    ref={ref}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    onMomentumScrollEnd={FlatListMomentumScrollEnd}
                    renderItem={({ item }) => {
                        return <Slide item={item} />;
                    }} 
                />
            </View>
            <Footer />
        </SafeAreaView>
    );
}

export default OnBoarding