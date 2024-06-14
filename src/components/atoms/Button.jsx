import React from 'react'
import {
    TouchableOpacity
} from 'react-native'
import { s } from 'react-native-wind'
import { theme } from '../../constants'
import LinearGradient from 'react-native-linear-gradient'

const Button = ({
    children, 
    GradientBoxClassName = '',
    GradientBoxStyle = {},
    TouchableOpacityClassName = '',
    TouchableOpacityStyle = {},
    type = 'simple',
    bgColor = theme.colors.Orange500,
    onPress = () => {},
    minHeight = 45
}) => {

    if (type == 'simple') {
        return (
            <TouchableOpacity style={[ 
                s`${TouchableOpacityClassName}`,
                {
                    backgroundColor: bgColor,
                    minHeight: minHeight
                }, TouchableOpacityStyle
            ]}
            onPress={onPress}>
                {children}
            </TouchableOpacity>
        )
    } else if (type == 'gradient') {
        return(
            <LinearGradient 
                style={[
                    { minHeight: minHeight }, 
                    s`flex justify-center items-center rounded-md px-3 py-1 ${GradientBoxClassName}`,
                    GradientBoxStyle
                ]} 
                colors={['rgba(249,115,22,1)', 'rgba(245,158,11,1)']} 
                start={{x: 0.5,y: 1}} 
                end={{x: 1,y: 0.5}}>
                <TouchableOpacity style={[ 
                    s`flex flex-row justify-center items-center ${TouchableOpacityClassName}`,
                    {
                        minHeight: minHeight
                    }, TouchableOpacityStyle
                    ]}
                    onPress={onPress}>
                    {children}
                </TouchableOpacity>
            </LinearGradient> 
        )
    } else if (type == 'outline') {
        return(
            <TouchableOpacity style={[ 
                s`${TouchableOpacityClassName}`,
                {   
                    borderWidth: 1,
                    borderColor: bgColor,
                    minHeight: minHeight
                }, TouchableOpacityStyle
            ]}
            onPress={onPress}>
                {children}
            </TouchableOpacity>
        )
    }
}

export default Button