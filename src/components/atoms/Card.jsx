import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { s } from 'react-native-wind'
import LinearGradient from 'react-native-linear-gradient';
import GilText from './GilText';

const Card = ({ 
    children,
    type = 'simple',
    index = 0,
    pressable = false,
    onPress = () => {},
    className = '',
    style = {},
    wrapperClassName = '',
    wrapperStyle = {},
    gradientClassName = '',
    gradientStyle = {},
    gradientColors = ['rgba(249,115,22,1)', 'rgba(245,158,11,1)'],
    gradientPositionStart = {x: 0.5,y: 1},
    gradientPositionEnd = {x: 1,y: 0.5},
}) => {
    
    if (type == 'simple') {
        if (pressable) {
            return (
                <View style={s`px-2 ${wrapperClassName}`} key={index}>
                    <TouchableOpacity style={[
                            s`flex flex-column justify-around items-center py-2 rounded-xl ${className}`,
                            style
                        ]} onPress={onPress} 
                        key={index}>
                        {children}
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View style={s`px-2 ${wrapperClassName}`} key={index}>
                    <View style={[
                            s`flex flex-column justify-around items-center py-2 rounded-xl ${className}`,
                            style
                        ]} onPress={onPress} 
                        key={index}>
                        {children}
                    </View>
                </View>
            )
        }
    } else if (type == 'gradient') {
        if (pressable) {
            return (
                <View style={[
                    s`${wrapperClassName}`,
                    wrapperStyle
                ]} key={index}>
                    <LinearGradient 
                        style={[
                            s`rounded-xl ${gradientClassName}`,
                            gradientStyle
                        ]} 
                        colors={gradientColors} 
                        start={gradientPositionStart} 
                        end={gradientPositionEnd}>
                        <TouchableOpacity style={[
                            s`flex flex-column justify-around items-center py-2 rounded-xl ${className}`,
                            style
                        ]} onPress={onPress}>
                            {children}
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            )
        } else {
            return (
                <View style={[
                    s`${wrapperClassName}`,
                    wrapperStyle
                ]} key={index}>
                    <LinearGradient 
                        style={[
                            s`rounded-xl ${gradientClassName}`,
                            gradientStyle
                        ]} 
                        colors={gradientColors} 
                        start={gradientPositionStart} 
                        end={gradientPositionEnd}>
                        <View style={[
                            s`flex flex-column justify-around items-center py-2 rounded-xl ${className}`,
                            style
                        ]} onPress={onPress}>
                            {children}
                        </View>
                    </LinearGradient>
                </View>
            )
        }
    } else if (type == 'outline') {
        return (
            <TouchableOpacity style={[
                s`flex flex-column justify-around items-center py-2 rounded-xl ${className}`,
                style
            ]} onPress={onPress} key={index}>
                {children}
            </TouchableOpacity>
        )
    } else {
        return (
            <GilText>Testing</GilText>
        )
    }
}

const styles = StyleSheet.create({})

export default Card