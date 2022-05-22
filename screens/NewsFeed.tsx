import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { ImageBackground, FlatList, Image, ScrollView, Pressable } from 'react-native';
import Item from '../components/PopularItem';
import { RootTabScreenProps } from '../types';

const Tag = ({ title }: { title: string }) => (
  <View style={{ marginLeft: 10, backgroundColor: '#7766c6', borderRadius: 30, justifyContent: 'center', }}>
    <Text style={{ marginLeft: 40, marginRight: 40, marginTop: 10, marginBottom: 10, color: 'white', fontWeight: 'bold' }}>{title}</Text>
  </View>
)

const fonre_image = { uri: "" };


export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={require('../assets/images/ohuennyigradient.png')} resizeMode="cover" style={styles.image_fon}> */}
      <ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Tag title='Развлекательные'></Tag>
          <Tag title='Спортивные'></Tag>
          <Tag title='Экскурсии'></Tag>
          <Tag title='Оздоровительные'></Tag>

        </ScrollView>

        <Text style={{ marginTop: 20, marginLeft: 16, fontSize: 20, fontWeight: 'bold', color: 'black' }}>Новости отряда</Text>

        <ScrollView style={{ marginBottom: 10 }} horizontal={true}>
          <Pressable onPress={() => { navigation.push('NewsDetails') }}>
            <Item title='Мероприятие 1' type={'экскурсия'} time={'15:00'} date={'6'} month={'мая'} wide={false}></Item>
          </Pressable>
          <Pressable onPress={() => { navigation.navigate('Modal') }}>
            <Item title='Мероприятие 1' type={'экскурсия'} time={'15:00'} date={'6'} month={'мая'} wide={false}></Item>
          </Pressable>
          <Pressable onPress={() => { navigation.navigate('Modal') }}>
            <Item title='Мероприятие 1' type={'экскурсия'} time={'15:00'} date={'6'} month={'мая'} wide={false}></Item>
          </Pressable>

        </ScrollView>

        <Text style={{ marginLeft: 16, fontSize: 20, fontWeight: 'bold', color: 'black', backgroundColor: 'rgba(52, 52, 52, 0.0)' }}>Новости лагеря</Text>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(52, 52, 52, 0.0)'
        }}>
          <Item title='Мероприятие 1' type={'экскурсия'} time={'15:00'} date={'6'} month={'мая'} wide={true}></Item>
          <Item title='Мероприятие 1' type={'экскурсия'} time={'15:00'} date={'6'} month={'мая'} wide={true}></Item>
        </View>
      </ScrollView>
      {/* </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
