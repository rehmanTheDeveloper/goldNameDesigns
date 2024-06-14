import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {s} from 'react-native-wind';
import CircleImage from '../molecules/CircleImage';
import GilText from '../atoms/GilText';
import {theme} from '../../constants';
import {
  CurrencyRupeeIcon,
  HeartIcon as HeartIconSolid,
} from 'react-native-heroicons/solid';
import {HeartIcon as HeartIconOutline} from 'react-native-heroicons/outline';
import Card from '../atoms/Card';

const ItemCard = ({
    item, 
    index, 
    className = '',
    style = {},
    wrapperClassName = '',
    wrapperStyle = {},
    minHeight = 'min-h-56'
}) => {
  const {width} = Dimensions.get('window');
  const cardWidth = width * 0.48;

  return (
    <Card 
        wrapperClassName={`${wrapperClassName}`}
        wrapperStyle={[{width: cardWidth}, wrapperStyle]}
        className={`flex flex-column justify-around items-center py-2 rounded-xl ${minHeight} ${className}`} 
        style={style}
        type='gradient'
        pressable={true} index={index}>
        {item?.imgUrl && (
            <CircleImage source={item.imgUrl} className="mb-2" size={140} />
          )}
          <View
            style={s`w-full flex flex-column justify-around items-start px-2`}>
            <View
              style={s`w-full flex flex-row justify-between items-start mb-1`}>
              <GilText
                fontSize={16}
                className="mb-0.5"
                weight="medium"
                color="white">
                {item?.title}
              </GilText>
              {item?.likes && (
                <View style={s`flex flex-row justify-center items-center`}>
                    {
                        item?.favorite == 1 ? 
                            <HeartIconSolid
                                height={20}
                                width={20}
                                color={theme.colors.Red500}
                            />
                        : 
                            <HeartIconOutline
                                height={20}
                                width={20}
                                color={theme.colors.Slate50}
                            />
                    }
                  <GilText weight="medium" color="white">3.5K</GilText>
                </View>
              )}
            </View>
            <View style={s`w-full flex flex-row justify-between items-center`}>
              {item?.tag == 0 ? (
                <GilText
                  className="bg-white py-1 px-2 rounded-full"
                  fontSize={12}
                  weight="medium"
                  color={theme.colors.Amber500}>FREE</GilText>
              ) : item?.tag == 1 ? (
                <>
                  <GilText
                    style={{backgroundColor: theme.colors.Purple500}}
                    className="py-1 px-2 rounded-full"
                    fontSize={12}
                    weight="medium"
                    color={theme.colors.Slate50}>PREMIUM</GilText>
                  <View
                    style={s`flex flex-row justify-between items-center pr-0.5`}>
                    <CurrencyRupeeIcon
                      color={theme.colors.Slate50}
                      height={18}
                      width={18}
                    />
                    <GilText className="ml-1" weight="medium" color="white">{item?.price.toLocaleString()}</GilText>
                  </View>
                </>
              ) : (
                ''
              )}
            </View>
          </View>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default ItemCard;
