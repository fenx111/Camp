import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { useState } from 'react';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Image } from 'react-native';
import CustomInput from '../components/CustomInput';
import Navigation from '../navigation';
import SettingsRow from '../components/SettingsRow';
import CustomButton from '../components/CustomButton';

export default function Account({ navigation }: RootTabScreenProps<'TabOne'>) {
  const openReview = () => {
    navigation.push('MarkActivities')
  }

  const openMedicineCard = () => {
    navigation.push('MedicalCard')
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.row}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1652946337027-dc061893e5e7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936' }}
            style={{ height: 100, width: 100, borderRadius: 50, marginLeft: 20 }}></Image>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 23 }}>Петя Посыльный</Text>
            <Text style={{ fontSize: 16, opacity: 0.5 }}>Старший пионер</Text>
          </View>

        </View>
        <Text style={{ marginLeft: 16, marginBottom: 15, fontSize: 20, fontWeight: 'bold', color: 'black' }}>Награды</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image source={require('../assets/images/one.png')} style={{ height: 100, width: 100, marginLeft: 15 }}></Image>
          <Image source={require('../assets/images/1lvl.png')} style={{ height: 100, width: 100, marginLeft: 15 }}></Image>
          <Image source={require('../assets/images/three.png')} style={{ height: 100, width: 100, marginLeft: 15 }}></Image>
          <Image source={require('../assets/images/2lvl.png')} style={{ height: 100, width: 100, marginLeft: 15 }}></Image>
          <Image source={require('../assets/images/five.png')} style={{ height: 100, width: 100, marginLeft: 15 }}></Image>
          <Image source={require('../assets/images/3lvl.png')} style={{ height: 100, width: 100, marginLeft: 15 }}></Image>
          <Image source={require('../assets/images/seven.png')} style={{ height: 100, width: 100, marginLeft: 15 }}></Image>
        </ScrollView>
        <Text style={{ marginLeft: 16, marginTop: 15, fontSize: 20, fontWeight: 'bold', color: 'black' }}>Баланс</Text>
        <View style={{ height: 150, justifyContent: 'center', alignItems: 'center' }}>
          <Pressable style={{ width: '90%', height: '80%', borderRadius: 15, backgroundColor: 'whitesmoke', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} onPress={() => { navigation.navigate('Modal') }}>
            <Text style={{ fontSize: 60, fontWeight: 'bold', marginLeft: 20, marginRight: 5 }}>553.33</Text>
            <Image source={require('../assets/images/vitochka.png')} style={{ height: 35, width: 35, opacity: 0.3 }}></Image>
            <Image source={require('../assets/images/xhdpi.png')} style={{ height: 25, width: 25, marginLeft: 70, marginRight: 10, opacity: 0.3 }}></Image>
          </Pressable>
        </View>
        <View style={{marginHorizontal: 15}}>
          <Text style={{ marginLeft: 16, marginTop: 15, fontSize: 20, fontWeight: 'bold', color: 'black' }}>Настройки</Text>
          <SettingsRow name={'Оценка мероприятий'} action={openReview}></SettingsRow>
          <SettingsRow name={'Конфиденциальность'} action={console.log}></SettingsRow>
          <SettingsRow name={'Медкарта'} action={openMedicineCard}></SettingsRow>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  container: {
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
