import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  resultContainer: {
    flex: 1,
    marginTop: 15,
    paddingTop: 60,
    borderRadius: 50,
    alignItems: "center",
    width: "100%",
  },
  shareButtonContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  shareButton: {
    backgroundColor: "#1877f2",
    borderRadius: 50,
    paddingBottom: 5,
    paddingTop: 5,
  },
  shareText: {
    color: "#ffff",
    fontWeight: "bold",
    paddingHorizontal: 30,
  },
  information: {
    fontSize: 18,
    color: "#003beb",
    fontWeight: "bold",
  },
  imc: {
    fontSize: 48,
    color: "#003beb",
    fontWeight: "bold",
  },
});

export default styles;
