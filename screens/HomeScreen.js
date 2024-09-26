import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import Categories from '../components/categories';
import FeaturedRow from '../components/featuredRow';
import { featured } from '../constants';

const HomeScreen = () => {
    return (
        <SafeAreaView className='bg-white pt-3 mb-14'>
            <StatusBar barStyle='dark-content' />
            {/* Search Bar */}
            <View className='flex-row items-center space-x-2 px-4 pb-5'>
                <View className='flex-1 flex-row items-center p-3 rounded-full border border-gray-300'>
                    <Icon.Search height='25' width='25' stroke='gray' />
                    <TextInput placeholder='Restaurants' className='ml-2 flex-1' />
                    <View className='flex-row items-center space-x-1 border-0 border-l-2 border-l-gray-300 pl-2'>
                        <Icon.MapPin height='20' width='20' stroke='gray' />
                        <Text className='text-gray-500'>New York, NYC</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: themeColors.bgColor(1) }} className='p-3 rounded-full'>
                    <Icon.Sliders height='20' width='20' stroke='white' strokeWidth={2.5} />
                </View>
            </View>

            {/* Main */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20,
                }}
            >
                {/* Categories */}
                <Categories />

                {/* Featured Rows */}
                {
                    [featured, featured, featured].map((item, index) => (
                        <FeaturedRow
                            key={index}
                            title={item.title}
                            restaurants={item.restaurant}
                            description={item.description}
                        />
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
