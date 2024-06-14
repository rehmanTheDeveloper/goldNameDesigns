import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PaginationIndicator } from '../';
import { s } from 'react-native-wind';
import { theme } from '../../constants';

const Pagination = ({
    data = [], 
    className = "", 
    activeIndex = 0,
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
            s`w-full flex flex-row justify-center items-center ${className}`, 
            {
                gap: 5
            }
        ]} key={0}>
            { data.map((_, index) => {
                return <PaginationIndicator 
                    index={index} 
                    activeIndex={activeIndex} 
                    indicatorHeight={indicatorHeight}
                    indicatorWidth={indicatorWidth}
                    indicatorOpacity={indicatorOpacity}
                    indicatorColor={indicatorColor}
                    activeIndicatorHeight={activeIndicatorHeight}
                    activeIndicatorWidth={activeIndicatorWidth}
                    activeIndicatorOpacity={activeIndicatorOpacity}
                    activeIndicatorColor={activeIndicatorColor}
                />
            }) }
        </View>
    )
}

const styles = StyleSheet.create({})

export default Pagination;
