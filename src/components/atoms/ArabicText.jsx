import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { s } from 'react-native-wind'
import { theme } from '../../constants'

const ArabicText = ({
    children, 
    color = theme.colors.secondary,
    fontSize = 18,
    className = ''
}) => {
    return (
        <Text style={[className, {
            color: color,
            fontFamily: 'Greta-Arabic-Regular',
            fontSize: fontSize,
            marginTop: -8,
            marginBottom: -2
        }]}>{ children }</Text>
    )
}

export default ArabicText