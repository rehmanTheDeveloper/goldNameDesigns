import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { s } from 'react-native-wind'
import { theme } from '../../constants'

const GilText = ({
    children, 
    color = theme.colors.Dark950,
    weight = 'regular',
    fontSize = 18,
    className = '',
    style = {}
}) => {
    var fontStyles = {
        'regular': {family: 'Gilroy-Regular'},
        'regularItalic': {family: 'Gilroy-RegularItalic'},
        'medium': {family: 'Gilroy-Medium'},
        'mediumItalic': {family: 'Gilroy-MediumItalic'},
        'semiBold': {family: 'Gilroy-SemiBold'},
        'semiBoldItalic': {family: 'Gilroy-SemiBoldItalic'},
        'bold': {family: 'Gilroy-Bold'},
        'boldItalic': {family: 'Gilroy-BoldItalic'},
        'light': {family: 'Gilroy-Light'},
        'lightItalic': {family: 'Gilroy-LightItalic'},
        'lighter': {family: 'Gilroy-Thin'},
        'lighterItalic': {family: 'Gilroy-ThinItalic'}
    }

    Object.entries(fontStyles).forEach(([key, value]) => {
        if (weight == key) {
            swapWeight = value.family
            weight = swapWeight
            return
        }
    });

    return (
        <Text style={[s`${className}`, {
            color: color,
            fontFamily: weight,
            fontSize: fontSize
        }, style]}>{ children }</Text>
    )
}

export default GilText