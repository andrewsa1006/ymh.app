import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

const News = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text style={styles.header}>News</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    marginTop: 100,
    marginLeft: 15,
  },

  inputGroup: {
    display: "flex",
  },

  input: {
    borderColor: "#1C1C1C",
    borderWidth: 2,
    borderStyle: "solid",
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 15,
  },

  loginButton: {
    backgroundColor: "#1C1C1C",
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 15,
  },

  loginText: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center",
  },
});

export default News;
