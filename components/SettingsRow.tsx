import React from "react";

import { View, Text, TextInput, StyleSheet, Image, Pressable } from "react-native";

export default function SettingsRow({ name, action }: { name: string, action: (() => void) }) {
    return (
        <Pressable style={{ alignItems: "center", justifyContent: "center", paddingTop: 20, paddingBottom: 20, backgroundColor: "whitesmoke" }} onPress={action}>
            <View>
                <Text style={{ fontSize: 20 }}>{name}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
})