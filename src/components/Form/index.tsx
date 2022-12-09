import { useState } from "react";
import {
  Keyboard,
  Pressable,
  Text,
  TextInput,
  View,
  Vibration,
  TouchableOpacity,
} from "react-native";
import ResultIMC from "./ResultIMC";
import styles from "./styles";

export default function Form() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura.");
  const [textButton, setTextButton] = useState("Calcular IMC");
  const [imc, setImc] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function imcCalculator() {
    const formatHeight = Number(height.replace(",", "."));
    const formatWeight = Number(weight.replace(",", "."));
    return setImc((formatWeight / (formatHeight * formatHeight)).toFixed(2));
  }

  function validationImc() {
    if (weight && height) {
      imcCalculator();
      setHeight("");
      setWeight("");
      setMessageImc("Seu IMC é igual:");
      setTextButton("Calcular Novamente");
      setErrorMessage("");
      Keyboard.dismiss();
      return;
    }
    verificationImc();
    setImc("");
    setTextButton("Calcular seu IMC");
    setMessageImc("Preencha o peso e altura.");
  }

  function verificationImc() {
    if (!imc) {
      setErrorMessage("Campo obrigatório!");
      Vibration.vibrate();
    }
  }

  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          onChangeText={(value) => setHeight(value)}
          value={height.toString()}
        />
        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Ex. 80"
          keyboardType="numeric"
          onChangeText={(value) => setWeight(value)}
          value={weight.toString()}
        />
        <TouchableOpacity style={styles.button} onPress={validationImc}>
          <Text style={styles.textButton}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultIMC imc={imc} messageResult={messageImc} />
    </Pressable>
  );
}
