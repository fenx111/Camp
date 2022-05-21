import React from "react";

import { View, Text, Pressable, StyleSheet } from "react-native";

export default function CustomButton({ onPress, text }: { onPress: () => void, text: string }) {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#7766c6",
        width: '100%',
        padding: 15,
        alignItems: 'center',
        borderRadius: 10
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    }
})