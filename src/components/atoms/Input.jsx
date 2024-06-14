import React from 'react'
import { StyleSheet, TextInput, View, Dimensions, KeyboardAvoidingView } from 'react-native'
import { s } from 'react-native-wind'
import { theme } from '../../constants'

const Input = ({
    fontFamily = 'Gilroy-Regular',
    borderColor = theme.colors.Amber500,
    textColor = theme.colors.Slate900,
    onFocus = () => {},
    onBlur = () => {},
    focused = false,
    className = "",
    placeholder = 'Text Input',
    primaryIcon = [],
    secondaryIcon = [],
    style = {}
}) => {

    const { width } = Dimensions.get('window');

    return (
        <View style={[
            s`w-full flex flex-row items-center justify-center border px-2 py-2 rounded-full ${className}`,
            style,
            {
                borderColor: borderColor,
                borderWidth: 1,
                backgroundColor: theme.colors.Slate100
            },
            focused == true ?
            {
                shadowColor: borderColor,
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 5
            }
            : 
            {}
        ]}>
            { primaryIcon ? 
                <View style={s`pl-1 pr-2`}>
                    {primaryIcon}
                </View>
            : "" }

            <TextInput 
                style={[
                    s`flex-1 p-0`, 
                    {
                        fontFamily: fontFamily, 
                        color: textColor,
                        fontSize: 16
                    }
                ]} 
                onFocus={onFocus}
                onBlur={onBlur}
                placeholderTextColor={textColor}
                placeholder={placeholder} 
            />

            { secondaryIcon ? 
                <View style={s`pl-1 pr-2`}>
                    {secondaryIcon}
                </View>
            : "" }
        </View>
    )
}

const styles = StyleSheet.create({})

export default Input