import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./styles";

interface Props {
  imc: string;
}

export default function ResultIMC({ imc }: Props) {
  async function onShare() {
    const result = await Share.share({
      message: `Meu IMC é: ${imc}`,
    });
  }

  return (
    <View style={styles.resultContainer}>
      <View style={styles.shareButtonContainer}>
        <TouchableOpacity style={styles.shareButton} onPress={onShare}>
          <Text style={styles.shareText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.information}>Seu IMC é igual:</Text>
      <Text style={styles.imc}>{imc}</Text>
    </View>
  );
}
