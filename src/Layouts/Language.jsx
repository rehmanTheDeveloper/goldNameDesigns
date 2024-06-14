import React from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import { s } from 'react-native-wind'
import { ArabicText, Button, GilText, UrduText } from '../components'
import { theme } from '../constants'

const Language = ({ navigation }) => {
    return (
        <SafeAreaView style={[
            s`min-h-screen flex flex-1 items-center justify-center`,
            { backgroundColor: theme.colors.Slate50 }
        ]}>
            <StatusBar backgroundColor={theme.colors.Slate50} barStyle={'dark-content'} />
            <View style={s`w-full flex flex-column justify-center items-center h-1/5`}>
            {/* <GilText className='mb-4' fontSize={22} weight='medium'>Select Language</GilText> */}
                <Button 
                type='gradient'
                    GradientBoxClassName="w-9/12 flex justify-center items-center mb-3 rounded-md" 
                    TouchableOpacityClassName='w-full'
                    onPress={() => {
                        navigation.navigate('ab_onboard');
                        // console.log('English Name')
                    }}>
                    <GilText color={theme.colors.Slate50} weight='semiBold'>English</GilText>
                </Button>
                <Button 
                type='gradient'
                    GradientBoxClassName="w-9/12 flex justify-center items-center mb-3 rounded-md" 
                    TouchableOpacityClassName='w-full'
                    
                    onPress={() => {
                        navigation.navigate('ab_onboard');
                        // console.log('Urdu Name')
                    }}>
                    <UrduText color={theme.colors.Slate50} weight='semiBold'>اردو</UrduText>
                </Button>
                <Button 
                type='gradient'
                    GradientBoxClassName="w-9/12 flex justify-center items-center mb-3 rounded-md" 
                    TouchableOpacityClassName='w-full'
                    
                    onPress={() => {
                        navigation.navigate('ab_onboard');
                        // console.log('Arabic Name')
                    }}>
                    <ArabicText color={theme.colors.Slate50} weight='medium'>عربية</ArabicText>
                </Button>
            </View>
        </SafeAreaView>
    );
}

export default Language