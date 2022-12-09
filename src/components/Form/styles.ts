import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
    paddingTop: 30,
  },
  form: {
    width: "100%",
  },
  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  formInput: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#003beb",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
  textButton: {
    fontSize: 20,
    color: "#fff",
  },
});

export default styles;
