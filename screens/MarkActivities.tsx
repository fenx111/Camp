import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { ImageBackground, FlatList, Image, ScrollView, Pressable } from 'react-native';
import Item from '../components/PopularItem';
import { RootTabScreenProps } from '../types';


export default function MarkActivities({ navigation }: RootTabScreenProps<'TabTwo'>) {
    return (
        <View style={styles.container}>
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
                    shadowOffset: { width: 10, height: 10 }, alignItems: 'flex-start', justifyContent: 'center'
                }}>
                    <Text style={{ fontWeight: '500', fontSize: 16 }}>Занятие по вокалу 13.04.2022</Text>
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
});
