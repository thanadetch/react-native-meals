import React from 'react';
import { GestureResponderEvent, OpaqueColorValue, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


interface IconButtonProps {
    onPress: null | ((event: GestureResponderEvent) => void) | undefined;
    color: string | OpaqueColorValue;
    icon: any;
}

const IconButton = ({ icon, onPress, color }: IconButtonProps) => {

    return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
            <Ionicons name={icon} size={24} color={color} />
        </Pressable>
    );
};

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
});
