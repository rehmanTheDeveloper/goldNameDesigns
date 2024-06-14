import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { s } from 'react-native-wind'
import { theme } from '../../constants'

const UrduText = ({
    children, 
    color = theme.colors.secondary,
    fontSize = 22,
    className = ''
}) => {
    return (
        <View style={s`flex justify-center items-center`}>
            <Text style={[className, {
                color: color,
                fontFamily: 'Jameel-Noori-regular',
                fontSize: fontSize,
                marginTop: -10,
                marginBottom: -4
            }]}>{ children }</Text>
        </View>
    )
}

export default UrduText