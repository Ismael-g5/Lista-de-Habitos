import { SafeAreaView } from 'react-native-safe-area-context'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MyButton } from './shared/components/MyButton';
import { useState } from 'react';

export default function App() {
  const [hide, setHide] = useState(false);
  // {hide &&} é uma das formas de esconder um texto no tela
  const teste = '123'
  return (
    <SafeAreaView>
      
      { hide 
      ? <Text>Showed</Text>
      : <Text>Hided</Text>
    } 

      
      <TouchableOpacity onPress={() => setHide(!hide)}>
        <Text>Toggle</Text>

      </TouchableOpacity>

    </SafeAreaView>
    // a tag vazia se chama "fragment" para retornar uma tela vazia
    //const teste = () => {} -> é um function, assim como function teste3(){}, 
    // function Teste(){} passa a ser um component, note que o que muda é a letra maiuscula  
    // no caso do component ele pode ser chamado por exemplo como: </Teste>
    // exemplo de hook -> function useTeste(){ const[] = useState() }, 
    // por exemplo, eles podem ser aproveitados em outras telas

  );
}


