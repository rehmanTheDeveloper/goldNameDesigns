import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native'
import { theme } from '../../constants';
import { s } from 'react-native-wind';

const AdBanner = ({
    wrapperClassName = "",
    wrapperStyle = {},
    bannerWidth = 0,
    bannerHeight = 280,
    bannerStyle = {},
    bannerClassName = ""
}) => {
    const { width } = Dimensions.get('window')
    if (bannerWidth == 0) {
        bannerWidth = width * 0.80
    }

    return (
        <View style={[
            s`w-full flex flex-row items-center justify-center py-1 ${wrapperClassName}`,
            {},
            wrapperStyle
        ]}>
            <View style={[
                s`${bannerClassName}`,
                ,{
                    width: bannerWidth,
                    height: bannerHeight,
                    backgroundColor: theme.colors.Slate300
                },
                bannerStyle
            ]}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default AdBanner;
