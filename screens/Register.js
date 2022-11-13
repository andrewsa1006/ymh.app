import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserInformation } from "../state/slices/userSlice";
import axios from "axios";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const dispatch = useDispatch();

  // REGISTRATION
  const handleRegistration = async () => {
    try {
      const res = await axios.post("http://192.168.1.104:3000/auth/register", { email, username, password });
      dispatch(updateUserInformation({ email, username }));
      navigation.navigate("News");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <View>
        <Text style={styles.header}>Register</Text>
      </View>
      <View style={styles.inputGroup}>
        <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} value={email}></TextInput>
        <TextInput style={styles.input} placeholder="Username" onChangeText={setUsername} value={username}></TextInput>
        <TextInput style={styles.input} secureTextEntry placeholder="Password" onChangeText={setPassword} value={password}></TextInput>
        <TextInput style={styles.input} secureTextEntry placeholder="Confirm Password" onChangeText={setPassword2} value={password2}></TextInput>
      </View>
      <View>
        <Pressable style={styles.loginButton}>
          <Text onPress={handleRegistration} style={styles.loginText}>
            SUBMIT
          </Text>
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
