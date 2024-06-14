import React from 'react';
import {TouchableHighlight, Image} from 'react-native'
import { s } from 'react-native-wind';

const CircleImage = ({
    source,
    size = 100,
    radius = size / 2,
    height = 0,
    width = 0,
    wrapperClassName = '',
    imageClassName = {},
    wrapperStyle = {},
    imageStyle = {}
}) => {
    // console.log(source)
    return (
        <TouchableHighlight style={[
            { borderRadius: radius, height: size, width: size },
            wrapperStyle,
            s`${wrapperClassName}`
        ]}>
            <Image 
                source={{uri: source}} 
                style={[
                    s`${imageClassName}`,
                    { borderRadius: radius, height: size, width: size }, 
                    imageStyle
                ]} />
        </TouchableHighlight>
    )
}

export default CircleImage;
