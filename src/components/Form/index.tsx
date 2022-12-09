import { Text, TextInput, View, Button } from "react-native";
import ResultIMC from "./ResultIMC";

export default function Form() {
  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput placeholder="Ex. 1.75" keyboardType="numeric" />
        <Text>Peso</Text>
        <TextInput placeholder="Ex. 80" keyboardType="numeric" />
        <Button title="Calcular IMC" />
      </View>
      <ResultIMC imc="" messageResult="" />
    </View>
  );
}
