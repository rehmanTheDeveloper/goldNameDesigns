import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import GilText from '../atoms/GilText';
import { s } from 'react-native-wind';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../../constants';
import { CheckCircleIcon } from 'react-native-heroicons/solid';

const CategoryBadge = ({
    item, 
    index = 0, 
    active, 
    onPress = () => {}
}) => {
    return (
        <View key={index}>
            <LinearGradient 
                style={s`px-3 py-1 mr-3 rounded-full flex flex-row`}
                colors={['rgba(249,115,22,1)', 'rgba(245,158,11,1)']} 
                start={{x: 0.5,y: 1}} 
                end={{x: 1,y: 0.5}}>
                    <TouchableOpacity style={s`flex flex-row items-center`} onPress={() => {
                        onPress(index)
                    }}>
                        { index == active && (<CheckCircleIcon height={20} width={20} color={theme.colors.Slate50} />) }
                        <GilText className='ml-1' weight='regular' fontSize={18} color={theme.colors.Slate50}>{item.name}</GilText>
                    </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({})

export default CategoryBadge;
