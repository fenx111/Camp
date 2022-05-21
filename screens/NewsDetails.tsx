import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { useState } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Image } from 'react-native';
import CustomInput from '../components/CustomInput';
import Navigation from '../navigation';

import CustomButton from '../components/CustomButton';


import { Rating, AirbnbRating } from 'react-native-ratings';
import * as Progress from 'react-native-progress';

export default function NewsDetails({ navigation }: RootTabScreenProps<'TabOne'>) {
  const onPress = () => {
    console.log('ad')
  }

  return (
    <ScrollView>
      <View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1652946337027-dc061893e5e7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936' }}
            style={{ height: 200, width: '100%' }}></Image>
        </View>
        <Text style={{ marginLeft: 16, marginTop: 15, fontSize: 20, fontWeight: 'bold', color: 'black' }}>Мероприятие 1</Text>
        <Text style={{ marginLeft: 16, marginRight: 16, marginTop: 10, fontSize: 16 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        <View style={{ marginTop: 10, marginRight: 16, marginLeft: 16, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{color: '#7766c6', fontWeight: 'normal'}}>Осталось 60 из 100 свободных мест</Text>
          <Progress.Bar progress={0.4} width={300} color={'#7766c6'} style={{ marginTop: 10, marginBottom: 40 }} />
          <CustomButton onPress={onPress} text={"Хочу принять участие!"}></CustomButton>
        </View>
      </View>

    </ScrollView>
  )
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
