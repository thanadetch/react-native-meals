import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';
import { DrawerParamList, RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';

type CategoriesScreenProp = CompositeScreenProps<DrawerScreenProps<DrawerParamList, 'Categories'>, NativeStackScreenProps<RootStackParamList>>

const CategoriesScreen = ({ navigation }: CategoriesScreenProp) => {
    const renderCategoryItem: ListRenderItem<Category> = (itemData) => {
        const pressHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            });
        };

        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    };

    return (
        <FlatList data={CATEGORIES}
                  keyExtractor={(item) => item.id}
                  renderItem={renderCategoryItem}
                  numColumns={2}
        />
    );
};

export default CategoriesScreen;
