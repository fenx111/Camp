import React from "react";

import { View, Text, TextInput, StyleSheet, Image } from "react-native";

import { TransactionType } from "../screens/BankAccount";

export default function TransactionCell({ amount, type, description }: { amount: number, type: TransactionType, description: string }) {
    var operationSymbol: string = ''
    var style: string
    switch (type) {
        case TransactionType.withdraw: {
            operationSymbol = '-'
            style = 'darkred'
            break;

        }
        case TransactionType.refill: {
            operationSymbol = '+'
            style = 'darkgreen'
            break;
        }
    }

    return (
        <View style={{ marginTop: 5 }}>
            <View style={{ height: 70, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{
                    width: '95%', height: '80%', borderRadius: 15, backgroundColor: 'whitesmoke', justifyContent: 'space-between', alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <Text style={{ fontSize: 16, marginLeft: 20 }}>{description}</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 16, marginLeft: 20, color: style }}>{operationSymbol}{amount}</Text>
                        <Image source={require('../assets/images/vitochka.png')}
                            style={{ height: 16, width: 16, opacity: 0.5, marginRight: 20, tintColor: style }}></Image>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
})