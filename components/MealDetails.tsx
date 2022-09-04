import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import Meal from '../models/meal';

type MealDetailsProps =
    Pick<Meal, 'duration' | 'complexity' | 'affordability'> &
    {
        style?: StyleProp<ViewStyle>,
        textStyle?: StyleProp<TextStyle>
    };

const MealDetails = ({ duration, complexity, affordability, style, textStyle }: MealDetailsProps) => {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
            <Text style={[styles.detailItem, textStyle]}>{complexity?.toUpperCase()}</Text>
            <Text style={[styles.detailItem, textStyle]}>{affordability?.toUpperCase()}</Text>
        </View>
    );
};

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
});
