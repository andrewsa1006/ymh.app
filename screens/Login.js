import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { useSelector } from "react-redux";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("doo@gmail.com");
  const [password, setPassword] = useState("mrdoo");

  const handleLoginRequest = async () => {
    navigation.navigate("News");
  };

  return (
    <View>
      <View>
        <Text style={styles.header}>Login</Text>
      </View>
      <View style={styles.inputGroup}>
        <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} value={email}></TextInput>
        <TextInput secureTextEntry style={styles.input} placeholder="Password" onChangeText={setPassword} value={password}></TextInput>
      </View>
      <View>
        <Pressable onPress={handleLoginRequest} style={styles.loginButton}>
          <Text style={styles.loginText}>SUBMIT</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    marginTop: 65,
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    borderStyle: "solid",
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

export default Login;
