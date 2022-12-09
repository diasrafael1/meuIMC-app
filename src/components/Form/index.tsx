import { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import ResultIMC from "./ResultIMC";
import styles from "./styles";

export default function Form() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [message, setMessage] = useState("Preencha o peso e altura.");
  const [textButton, setTextButton] = useState("Calcular IMC");
  const [imc, setImc] = useState("");

  function imcCalculator() {
    const formatHeight = Number(height.replace(",", "."));
    return setImc((Number(weight) / (formatHeight * formatHeight)).toFixed(2));
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
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          onChangeText={(value) => setHeight(value)}
          value={height.toString()}
        />
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Ex. 80"
          keyboardType="numeric"
          onChangeText={(value) => setWeight(value)}
          value={weight.toString()}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            validationImc();
          }}
        >
          <Text style={styles.textButton}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultIMC imc={imc} messageResult={message} />
    </View>
  );
}
