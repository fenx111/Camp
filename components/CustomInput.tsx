import React from "react";

import { View, Text, TextInput, StyleSheet, Image } from "react-native";

export default function CustomInput({ value, setValue, placeholder, secureTextEntry }: { value: string, setValue: ((text: string) => void), placeholder: string, secureTextEntry: boolean }) {
    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: '100%',
        borderColor: "#e8e8e8",
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5,
        height: 50,
        justifyContent: 'center',
    },
    input: {
        paddingLeft: 30
    }
})