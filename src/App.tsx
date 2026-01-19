import { SafeAreaView } from 'react-native-safe-area-context'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import { MyButton } from './shared/components/MyButton';
import { useState } from 'react';
import { FlatList } from 'react-native';
//import { ScrollView } from 'react-native/types_generated/index';

export default function App() {
  const [list, setList] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ]);
  return (
    <SafeAreaView>
     
    <FlatList

    data={list}
    keyExtractor={(item, index) => item.toString()}
    renderItem={({item, index}) => (
      <Text>Item {item} index {index}</Text>
    ) }
    />
    <View style={styles.container}>
    <Pressable style= { ({ pressed })  => pressed ?  styles.buttonPressed : styles.button } >
      <Text style={styles.buttonText}>Press me</Text>

    </Pressable>
    </View>
    </SafeAreaView>
    // a tag vazia se chama "fragment" para retornar uma tela vazia
    //const teste = () => {} -> é um function, assim como function teste3(){}, 
    // function Teste(){} passa a ser um component, note que o que muda é a letra maiuscula  
    // no caso do component ele pode ser chamado por exemplo como: </Teste>
    // exemplo de hook -> function useTeste(){ const[] = useState() }, 
    // por exemplo, eles podem ser aproveitados em outras telas

  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    width: 100,
    padding: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,

  },
  container: {
    margin: 16
  },
  buttonText:{
    color: 'white',

  },
  buttonPressed:{
     backgroundColor: 'black',
    width: 100,
    padding: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  }
});

