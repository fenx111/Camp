import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import TransactionCell from '../components/TransactionCell';

import { ScrollView } from 'react-native';

import { RootTabScreenProps } from '../types';
import MedicalCardCell from '../components/MedicalCardCell';

export default function Map({ navigation }: RootTabScreenProps<'TabOne'>) {
    return (
        <View>
            <ScrollView horizontal>
                <Image source={require('../assets/images/map.jpg')}></Image>
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
