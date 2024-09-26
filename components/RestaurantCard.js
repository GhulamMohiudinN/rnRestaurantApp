import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback, Platform } from 'react-native'
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Restaurant', { ...item })}>
            <View className='mr-6 bg-white rounded-3xl shadow-lg'
                style={{
                    shadowColor: themeColors.bgColor(0.2),
                    shadowRadius: 7,
                    borderWidth: Platform.OS === 'android' ? 2 : 0,
                    borderColor: Platform.OS === 'android' ? themeColors.bgColor(0.2) : 'transparent',
                }}>
                <Image className='h-36 w-64 rounded-t-3xl' source={item.image} />
                <View className='px-3 pb-4 space-y-2'>
                    <Text className='text-lg font-bold pt-2'>{item.name}</Text>
                    <View className='flex-row items-center space-x-1'>
                        <Image source={require('../assets/images/star.png')} className='h-4 w-4' />
                        <Text className='text-xs'>
                            <Text className='text-green-700'>{item.stars}</Text>
                            <Text className='text-gray-700'>({item.reviews} reviews) - <Text className='font-semibold'>{item.category}</Text></Text>
                        </Text>
                    </View>
                    <View className='flex-row items-center space-x-1'>
                        <Icon.MapPin color='gray' width='15' height='15' />
                        <Text className='text-gray-700 text-xs'>Nearby - {item.address}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default RestaurantCard
