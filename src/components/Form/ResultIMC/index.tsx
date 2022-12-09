import { View, Text } from "react-native";

interface Props {
  imc: string;
  messageResult: string;
}

export default function ResultIMC({ imc, messageResult }: Props) {
  return (
    <View>
      <Text>{imc}</Text>
      <Text>{messageResult}</Text>
    </View>
  );
}
