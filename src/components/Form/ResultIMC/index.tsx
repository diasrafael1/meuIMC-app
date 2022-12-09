import { View, Text } from "react-native";
import styles from "./styles";

interface Props {
  imc: string;
  messageResult: string;
}

export default function ResultIMC({ imc, messageResult }: Props) {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.information}>{messageResult}</Text>
      <Text style={styles.imc}>{imc}</Text>
    </View>
  );
}
