import { SafeAreaView } from 'react-native-safe-area-context'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FirstComponent } from './shared/components/FirstComponent';

export default function App() {
  return (
    <SafeAreaView>
      <FirstComponent order={1} />
      <FirstComponent order={2} />
      <FirstComponent order={3} />

    </SafeAreaView>
    // a tag vazia se chama "fragment" para retornar uma tela vazia
    //const teste = () => {} -> é um function, assim como function teste3(){}, 
    // function Teste(){} passa a ser um component, note que o que muda é a letra maiuscula  
    // no caso do component ele pode ser chamado por exemplo como: </Teste>
    // exemplo de hook -> function useTeste(){ const[] = useState() }, 
    // por exemplo, eles podem ser aproveitados em outras telas

  );
}


