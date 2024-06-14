import React from 'react'
import {
    Dimensions, 
    SafeAreaView, 
    ScrollView, 
    StatusBar, 
    View
} from 'react-native'
import { theme } from '../constants'
import { s } from 'react-native-wind'
import { Button, Card, CircleImage, GilText } from '../components'
import { ArrowLeftStartOnRectangleIcon, BellAlertIcon, Cog6ToothIcon, PencilSquareIcon } from 'react-native-heroicons/solid'

const Profile = ({ navigation }) => {
    const { width, height } = Dimensions.get('window');

    return (
        <SafeAreaView style={[
                s`flex flex-1 justify-center items-center pb-2`,
                {
                    backgroundColor: theme.colors.Slate50
                }
            ]}>
                <StatusBar backgroundColor={'transparent'} />
            <ScrollView style={s`w-full h-12/12`}>
                <Card 
                    className='w-full px-2 py-3 flex flex-row justify-start items-center min-h-36'
                    gradientClassName='px-0 rounded-none rounded-bl-3xl rounded-br-3xl'
                    style={{
                        position: 'relative'
                    }} 
                    type='gradient'>
                        <Button bgColor={theme.colors.Slate50} TouchableOpacityClassName='rounded-full p-1.5 absolute right-3 top-3' minHeight={'auto'}>
                            <Cog6ToothIcon color={theme.colors.Orange500} height={23} width={23} />
                        </Button>
                        <CircleImage 
                            source={'https://scontent.flhe7-2.fna.fbcdn.net/v/t39.30808-6/437943298_403561432477371_7144338643687239428_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE4qjLBjCWOw3ugDm3MPbQF02YoSwNN0h_TZihLA03SH_xTWmZfh75vK7ZpqsQiObOMQS1rDKq1LfqTohWj_Wg1&_nc_ohc=TswexHk5B1AQ7kNvgGdIewe&_nc_ht=scontent.flhe7-2.fna&oh=00_AYDc8GpsaQSUEALvHuw_xlaAS5yt-ssDYWCmftE2KOt9ng&oe=6670F3D2'} 
                            size={75}
                        />
                        <View style={s`flex flex-column justify-center ml-3`}>
                            <GilText 
                                color={theme.colors.Slate50} 
                                fontSize={20} 
                                weight='semiBold'>
                                Abdul Rehman
                            </GilText>
                            <GilText 
                                color={theme.colors.Slate50} 
                                fontSize={16} 
                                weight='regular'>
                                abdulrehman@example.com
                            </GilText>
                        </View>
                </Card>
                <View style={s`w-full mb-2 justify-center items-center pt-2`}>
                    <View style={s`px-2`}>
                        <View style={s`w-full flex flex-row flex-wrap`}>
                            <View style={s`p-2 w-2/6`} aria-label='Card wrapper'>
                                <Card 
                                    className='w-full rounded-md py-5' 
                                    type='gradient'>
                                        <PencilSquareIcon color={theme.colors.Slate50} height={35} width={35} />
                                        <GilText className='mt-2' color={theme.colors.Slate50} weight='medium' fontSize={16}>Edit Profile</GilText>
                                </Card>
                            </View>
                            <View style={s`p-2 w-2/6`} aria-label='Card wrapper'>
                                <Card 
                                    className='w-full rounded-md py-5' 
                                    type='gradient'>
                                        <BellAlertIcon color={theme.colors.Slate50} height={35} width={35} />
                                        <GilText className='mt-2' color={theme.colors.Slate50} weight='medium' fontSize={16}>Notifications</GilText>
                                </Card>
                            </View>
                            <View style={s`p-2 w-2/6`} aria-label='Card wrapper'>
                                <Card 
                                    className='w-full rounded-md py-5' 
                                    type='gradient'>
                                        <ArrowLeftStartOnRectangleIcon color={theme.colors.Slate50} height={35} width={35} />
                                        <GilText className='mt-2' color={theme.colors.Slate50} weight='medium' fontSize={16}>Logout</GilText>
                                </Card>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            {/* <AdBanner bannerHeight={50} bannerWidth={300} /> */}
        </SafeAreaView>
    )
}

export default Profile