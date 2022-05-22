import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { ImageBackground, FlatList, Image, ScrollView, Pressable, Modal, Alert, TextInput } from 'react-native';
import Item from '../components/PopularItem';
import { RootTabScreenProps } from '../types';
import React, { useState } from 'react';
import CustomButton from '../components/CustomButton';


import { Rating, AirbnbRating } from 'react-native-ratings';
export default function MarkActivities({ navigation }: RootTabScreenProps<'TabTwo'>) {
    const [modalVisible, setModalVisible] = useState(false);
    const markCellPressed = () => {

    }
    return (
        <View style={styles.container}>
            <Modal
                style={{ alignItems: 'center', justifyContent: 'center' }}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Поставьте оценку мероприятию</Text>
                        <Rating
                            style={{ paddingVertical: 10 }}
                            startingValue={4}
                        />
                        <TextInput multiline style={{ marginVertical: 20, width: '100%', height: 100, borderRadius: 10, borderWidth: 1, borderColor: 'rgba(52, 52, 52, 0.1)' }} placeholder='Оставьте ваш комментарий о мероприятии' />
                        <CustomButton onPress={() => setModalVisible(!modalVisible)} text={'Поставить оценку'}></CustomButton>
                    </View>
                </View>
            </Modal>
            <ScrollView>
                <View style={{
                    margin: 10, height: 60, paddingLeft: 20, borderRadius: 15, elevation: 10, shadowRadius: 10,
                    shadowOffset: { width: 10, height: 10 }, alignItems: 'flex-start', justifyContent: 'center'
                }}>
                    <Text style={{ fontWeight: '500', fontSize: 16 }}>Поход в театр 16.04.2022</Text>
                </View>
                <View style={{
                    margin: 10, height: 60, paddingLeft: 20, borderRadius: 15, elevation: 10, shadowRadius: 10,
                    shadowOffset: { width: 10, height: 10 }, alignItems: 'flex-start', justifyContent: 'center',
                    backgroundColor: 'lightgray'
                }}>
                    <Text style={{ fontWeight: '500', fontSize: 16, opacity: 0.6 }}>Занятие по плаванию 14.04.2022</Text>
                    <Text style={{ fontSize: 18, opacity: 0.6 }}>Вы поставили этому занятию 4/5 баллов</Text>
                </View>
                <View style={{
                    margin: 10, height: 60, paddingLeft: 20, borderRadius: 15, elevation: 10, shadowRadius: 10,
                    shadowOffset: { width: 10, height: 10 }
                }}>
                    <Pressable onPress={() => setModalVisible(!modalVisible)} style={{ height: '100%', width: '100%', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: '500', fontSize: 16 }}>Занятие по вокалу 13.04.2022</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent'
    },
    title: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    image_fon: {

    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
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
    title1: {
        fontSize: 32,
    },
    img: {
        width: '100%',
        height: '60%'
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'rgba(52, 52, 52, 0.1)'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: "center"
    }
});
