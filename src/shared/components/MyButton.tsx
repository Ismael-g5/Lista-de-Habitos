import { View, Text, TouchableOpacity } from "react-native";

interface IMyButtonProps{
  order: number;
  children?: React.ReactNode
  //onPress seria uma especie de função que chama uma ação ao clique
  onPress?: () => void;
}
export const MyButton = (props: IMyButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
    <View>
      {props.children}
    </View>
    </TouchableOpacity>
  );
}