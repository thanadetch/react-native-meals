import React, { useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { addFavorite, removeFavorite } from '../store/redux/favorites';
import { useAppDispatch, useAppSelector } from '../hooks';

const MealDetailScreen = ({ route, navigation }: NativeStackScreenProps<RootStackParamList, 'MealDetail'>) => {
    const favoriteMealIds = useAppSelector(state => state.favoriteMeals.ids);
    const dispatch = useAppDispatch();

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)!;
    const mealIsFavorite = favoriteMealIds.includes(mealId);

    const changeFavoriteStatusHandler = () => {
        if (mealIsFavorite) {
            dispatch(removeFavorite({ id: mealId }));
        } else {
            dispatch(addFavorite({ id: mealId }));
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton icon={mealIsFavorite ? 'star' : 'star-outline'}
                                color='white'
                                onPress={changeFavoriteStatusHandler}
                    />
                );
            }
        });
    }, [navigation, changeFavoriteStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal?.title}</Text>
            <MealDetails duration={selectedMeal.duration}
                         complexity={selectedMeal.complexity}
                         affordability={selectedMeal.affordability}
                         textStyle={styles.detailText} />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
});
