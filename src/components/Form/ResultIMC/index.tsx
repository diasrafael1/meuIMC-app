import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./styles";

interface Props {
  imc: string;
  messageResult: string;
}

export default function ResultIMC({ imc, messageResult }: Props) {
  async function onShare() {
    const result = await Share.share({
      message: `Meu IMC é: ${imc}`,
    });
  }

  return (
    <View style={styles.resultContainer}>
      {imc ? (
        <View style={styles.shareButtonContainer}>
          <TouchableOpacity style={styles.shareButton} onPress={onShare}>
            <Text style={styles.shareText}>Compartilhar</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <Text style={styles.information}>{messageResult}</Text>
      <Text style={styles.imc}>{imc}</Text>
    </View>
  );
}
