import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import TransactionCell from '../components/TransactionCell';

import { ScrollView } from 'react-native';

export enum TransactionType {
  withdraw,
  refill
}

export default function BankAccount() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ height: 150, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: '90%', height: '80%', borderRadius: 15, backgroundColor: 'whitesmoke', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
            <Text style={{ fontSize: 60, fontWeight: 'bold', marginLeft: 20, marginRight: 5 }}>553.33</Text>
            <Image source={require('../assets/images/vitochka.png')} style={{ height: 50, width: 50, opacity: 0.3 }}></Image>
          </View>
        </View>
        <Text style={{ marginLeft: 16, marginTop: 15, fontSize: 20, fontWeight: 'bold', color: 'black' }}>Последние транзакции</Text>
        <TransactionCell amount={23.3} type={TransactionType.withdraw} description={'Стандартное описание'} />
        <TransactionCell amount={234.3} type={TransactionType.refill} description={'Стандартное описание'}/>
        <TransactionCell amount={223.3} type={TransactionType.refill} description={'Стандартное описание'}/>
        <TransactionCell amount={2423.3} type={TransactionType.withdraw} description={'Стандартное описание'}/>
        <TransactionCell amount={23.3} type={TransactionType.withdraw} description={'Стандартное описание'}/>
        <TransactionCell amount={253.3} type={TransactionType.refill} description={'Стандартное описание'}/>
        <TransactionCell amount={23.3} type={TransactionType.withdraw} description={'Стандартное описание'}/>
        <TransactionCell amount={23.3} type={TransactionType.refill} description={'Стандартное описание'}/>
        <TransactionCell amount={23.3} type={TransactionType.withdraw} description={'Стандартное описание'}/>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {

  }
});
