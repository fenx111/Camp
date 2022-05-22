import React from "react";

import { View, Text, TextInput, StyleSheet, Image, Pressable } from "react-native";

export default function SettingsRow({ name, action }: { name: string, action: (() => void) }) {
    return (
        <Pressable style={{ alignItems: "center", justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 20, backgroundColor: "whitesmoke", paddingHorizontal: 20, marginTop: 10, borderRadius: 20 }} onPress={action}>
            <Text style={{ fontSize: 20 }}>{name}</Text>
            <Image source={require('../assets/images/xhdpi.png')} style={{ height: 25, width: 25, opacity: 0.3 }}></Image>
        </Pressable>
    )
}

const styles = StyleSheet.create({
})