import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import TransactionCell from '../components/TransactionCell';

import { ScrollView } from 'react-native';

import { RootTabScreenProps } from '../types';
import MedicalCardCell from '../components/MedicalCardCell';

export default function MedicalCard({ navigation }: RootTabScreenProps<'TabOne'>) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={{fontSize: 35, fontWeight: 'bold', paddingHorizontal: 16, paddingTop: 10}}>Посыльный</Text>
                <Text style={{fontSize: 30, paddingHorizontal: 16}}>Петр Олегович</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold', paddingHorizontal: 16, paddingBottom: 10, paddingTop: 5}}>17 сентября 2012 ( возраст 10)</Text>
                <MedicalCardCell type='Заболевания' value='Астма'></MedicalCardCell>
                <MedicalCardCell type='Аллергические реакции' value='Шоколад'></MedicalCardCell>
                <MedicalCardCell type='Медикаменты' value='АЦЦ'></MedicalCardCell>
                <MedicalCardCell type='Группа крови' value='1 положительная'></MedicalCardCell>
                <MedicalCardCell type='Вес' value='53 кг.'></MedicalCardCell>
                <MedicalCardCell type='Рост' value='153 см.'></MedicalCardCell>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
