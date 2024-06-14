import React from 'react';
import { StyleSheet, View } from 'react-native';
import { s } from 'react-native-wind';

const PaginationIndicator = ({
    index, 
    activeIndex,
    indicatorHeight = 5, 
    indicatorWidth = 5, 
    indicatorOpacity = 0.7, 
    indicatorColor = theme.colors.Orange500,
    activeIndicatorHeight = 4,
    activeIndicatorWidth = 14,
    activeIndicatorOpacity = 1,
    activeIndicatorColor = theme.colors.Orange500
}) => {
    return(
        <View style={[
            s`rounded-full`,
            {
                height: indicatorHeight, 
                width: indicatorWidth, 
                backgroundColor: indicatorColor, 
                opacity: indicatorOpacity
            },
            index == activeIndex && {
                height: activeIndicatorHeight, 
                width: activeIndicatorWidth, 
                backgroundColor: activeIndicatorColor, 
                opacity: activeIndicatorOpacity
            }
        ]} key={index} />
    )
}

const styles = StyleSheet.create({})

export default PaginationIndicator