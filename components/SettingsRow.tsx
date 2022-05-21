import React from "react";

import { View, Text, TextInput, StyleSheet, Image, Pressable } from "react-native";

export default function SettingsRow({ name, action }: { name: string, action: (() => void) }) {
    return (
        <Pressable onPress={action}>
            <Text style={{fontSize: 20  }}>{name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
})