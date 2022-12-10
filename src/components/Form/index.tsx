import { useState } from "react";
import {
  Keyboard,
  Pressable,
  Text,
  TextInput,
  View,
  Vibration,
  TouchableOpacity,
  FlatList,
} from "react-native";
import ResultIMC from "./ResultIMC";
import styles from "./styles";

interface ImcList {
  id: number;
  imc: string;
}

export default function Form() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [textButton, setTextButton] = useState("Calcular IMC");
  const [imc, setImc] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [imcList, setImcList] = useState<ImcList[]>([]);

  function imcCalculator() {
    const formatHeight = Number(height.replace(",", "."));
    const formatWeight = Number(weight.replace(",", "."));
    const imc = (formatWeight / (formatHeight * formatHeight)).toFixed(2);
    setImc(imc);
    setImcList((imcList) => [...imcList, { id: new Date().getTime(), imc }]);
  }

  function validationImc() {
    if (weight && height) {
      imcCalculator();
      setHeight("");
      setWeight("");
      setTextButton("Calcular Novamente");
      setErrorMessage("");
      Keyboard.dismiss();
    } else {
      setErrorMessage("Campo obrigatório!");
      Vibration.vibrate();
      setImc("");
      setTextButton("Calcular seu IMC");
    }
  }

  return (
    <View style={styles.formContext}>
      {!imc ? (
        <Pressable onPress={() => Keyboard.dismiss()} style={styles.form}>
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
        </Pressable>
      ) : (
        <View style={styles.exhibitionResultImc}>
          <ResultIMC imc={imc} />
          <TouchableOpacity style={styles.button} onPress={validationImc}>
            <Text style={styles.textButton}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={imcList}
        style={styles.listImcs}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
        renderItem={({ item }) => (
          <Text style={styles.resultImcItem}>
            <Text style={styles.textResultItemList}>Resultado IMC = </Text>
            {item.imc}
          </Text>
        )}
      />
    </View>
  );
}
