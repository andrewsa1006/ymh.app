import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserInformation } from "../../state/slices/userSlice";
import axios from "axios";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginRequest = async () => {
    try {
      let response = await axios.post("https://v6n6cm02tj.execute-api.us-east-1.amazonaws.com/dev/auth/login", { email: email, password: password });
      dispatch(
        updateUserInformation({ user: { username: response.data.user.username, email: response.data.user.email }, token: response.data.token })
      );
      navigation.navigate("News");
    } catch (error) {
      console.log(error);
    }
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
