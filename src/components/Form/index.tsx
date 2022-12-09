import { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";
import ResultIMC from "./ResultIMC";

export default function Form() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [message, setMessage] = useState("Preencha o peso e altura.");
  const [textButton, setTextButton] = useState("Calcular IMC");
  const [imc, setImc] = useState("");

  function imcCalculator() {
    return setImc(
      (Number(weight) / (Number(height) * Number(height))).toFixed(2)
    );
  }

  function validationImc() {
    if (weight && height) {
      imcCalculator();
      setHeight("");
      setWeight("");
      setMessage("Seu IMC é igual:");
      setTextButton("Calcular Novamente");
      return;
    }
    setImc("");
    setTextButton("Calcular seu IMC");
    setMessage("Preencha o peso e altura.");
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          onChangeText={(value) => setHeight(value)}
          value={height.toString()}
        />
        <Text>Peso</Text>
        <TextInput
          placeholder="Ex. 80"
          keyboardType="numeric"
          onChangeText={(value) => setWeight(value)}
          value={weight.toString()}
        />
        <Button title={textButton} onPress={validationImc} />
      </View>
      <ResultIMC imc={imc} messageResult={message} />
    </View>
  );
}
