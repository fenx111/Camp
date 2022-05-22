import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { useRef, useState } from 'react';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Image } from 'react-native';
import CustomInput from '../components/CustomInput';
import Navigation from '../navigation';
import SettingsRow from '../components/SettingsRow';
import CustomButton from '../components/CustomButton';
import context from 'react-bootstrap/esm/AccordionContext';

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

export default function Account({ navigation }: RootTabScreenProps<'TabOne'>) {
  const openReview = () => {
    navigation.push('MarkActivities')
  }

  const openMap = () => {
    navigation.push('Map')
  }

  const forceUpdate = useForceUpdate();
  const openMedicineCard = () => {
    navigation.push('MedicalCard')
  }

  var isChildenSelected = true
  var style1: any = { height: 100, width: 100, borderRadius: 50, borderWidth: 5, borderColor: '#7766c6' }
  var style2: any = { height: 80, width: 80, borderRadius: 40 }


  const test = () => {
    if (isChildenSelected) {
      style1 = { height: 100, width: 100, borderRadius: 50, borderWidth: 5, borderColor: '#7766c6' }
      style2 = { height: 80, width: 80, borderRadius: 40 }
    } else {
      style1 = { height: 80, width: 80, borderRadius: 40 }
      style2 = { height: 100, width: 100, borderRadius: 50, borderWidth: 5, borderColor: '#7766c6' }
    }
    isChildenSelected = !isChildenSelected
    console.log(isChildenSelected)
  }

  test()



  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.row}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1653044290119-5a5e848b4725?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170' }}
            style={{ height: 100, width: 100, borderRadius: 50, marginLeft: 20 }}></Image>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 23 }}>Татьяна Петрова</Text>
          </View>

        </View>
        <Text style={{ marginLeft: 16, marginBottom: 15, fontSize: 20, fontWeight: 'bold', color: 'black' }}>Дети</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Pressable onPress={test} style={{ marginLeft: 15 }}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1652946337027-dc061893e5e7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936' }}
              style={style1}></Image>
            <Text style={{ width: '80%', textAlign: 'center' }}>Петя Посыльный</Text>
          </Pressable>

          <Pressable onPress={test} style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1652541592401-a295591ba687?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974' }}
              style={style2}></Image>
            <Text style={{ width: '80%', textAlign: 'center' }}>Марина Дневальная</Text>
          </Pressable>


        </ScrollView>
        <Text style={{ marginLeft: 16, marginTop: 15, fontSize: 20, fontWeight: 'bold', color: 'black' }}>Баланс</Text>
        <View style={{ height: 150, justifyContent: 'center', alignItems: 'center' }}>
          <Pressable style={{ width: '90%', height: '80%', borderRadius: 15, backgroundColor: 'whitesmoke', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} onPress={() => { navigation.navigate('Modal') }}>
            <Text style={{ fontSize: 60, fontWeight: 'bold', marginLeft: 20, marginRight: 5 }}>553.33</Text>
            <Image source={require('../assets/images/vitochka.png')} style={{ height: 35, width: 35, opacity: 0.3 }}></Image>
            <Image source={require('../assets/images/xhdpi.png')} style={{ height: 25, width: 25, marginLeft: 70, marginRight: 10, opacity: 0.3 }}></Image>
          </Pressable>
        </View>
        <View style={{ marginHorizontal: 15 }}>
          <Text style={{ marginLeft: 16, marginTop: 15, fontSize: 20, fontWeight: 'bold', color: 'black' }}>Основная информация</Text>
          <SettingsRow name={'Мероприятия'} action={openReview}></SettingsRow>
          <SettingsRow name={'Медкарта'} action={openMedicineCard}></SettingsRow>

          <SettingsRow name={'Карта лагеря'} action={openMap}></SettingsRow>
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
