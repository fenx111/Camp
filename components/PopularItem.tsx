import React from "react";

import { Image, StyleSheet } from "react-native";
import { Text, View } from '../components/Themed';


export default function Item({ title, type, time, date, month, wide }: { title: string, type: string, time: string, date: string, month: string, wide: boolean }) {
    var dict: { [key: string]: string } = {}
    if (wide) {
        dict = { width: '90%' }
    }
    return (
        <View style={[styles.item, dict]}>

            <Image source={{ uri: 'https://images.unsplash.com/photo-1652946337027-dc061893e5e7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936' }}
                style={styles.imageStyle} />
            <View>
                <View style={styles.dateContainer}>
                    <Text style={[styles.dateTextStyle, { fontSize: 20 }]}>{date}</Text>
                    <Text style={[styles.dateTextStyle, { fontSize: 13 }]}>{month}</Text>
                </View>
                <Text style={styles.title}>{title}</Text>
                <Text style={{ marginLeft: 10, opacity: 0.5 }}>{type}</Text>
                <Text style={{ marginLeft: 10, opacity: 0.5 }}>{time}</Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    dateTextStyle: { fontWeight: 'bold', color: '#7766c6' },
    dateContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50, height: 50,
        marginTop: -35,
        marginLeft: 10,
        borderRadius: 5,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 10,
    },
    title: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    imageStyle: {
        width: '100%',
        height: '60%'
    },
    item: {
        marginVertical: 20,
        marginHorizontal: 16,
        borderRadius: 10,
        overflow: 'hidden',
        width: 300,
        height: 280,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 10,
    },
    container: {
        backgroundColor: "#3B71F3",
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