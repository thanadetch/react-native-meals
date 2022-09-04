import React, { useLayoutEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

const MealsOverviewScreen = ({ route, navigation }: NativeStackScreenProps<RootStackParamList, 'MealsOverview'>) => {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.includes(catId));

    useLayoutEffect(() => {
        const categoryTile = CATEGORIES.find((category) => category.id === catId)?.title;
        navigation.setOptions({ title: categoryTile });
    }, [catId, navigation]);

    return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;


