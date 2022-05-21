import React from "react";

import { View, Text, TextInput, StyleSheet, Image } from "react-native";

export default function MedicalCardCell({ type, value }: { type: string, value: string }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{type}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    title: {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'darkgray'
    },
    value: {
        fontSize: 18,
        fontWeight: '500',
    }
});
