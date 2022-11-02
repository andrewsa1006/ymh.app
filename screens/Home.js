import { StatusBar } from "expo-status-bar";
import { View, ImageBackground, StyleSheet, Pressable, Text } from "react-native";

export default Home = ({ navigation }) => {
  return (
    <View>
      <ImageBackground style={styles.backgroundImage} source={require("../assets/background.png")} resizeMode="stretch"></ImageBackground>
      <View style={styles.authOptions}>
        <Pressable
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.loginButton}
        >
          <Text>LOGIN</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("Register");
          }}
          style={styles.registerButton}
        >
          <Text style={styles.whiteText}>REGISTER</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  backgroundImage: {
    width: "100%",
    height: "92%",
    marginTop: "10%",
  },

  authOptions: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    width: "100%",
    bottom: "1%",
    justifyContent: "space-evenly",
    alignContent: "center",
  },

  loginButton: {
    backgroundColor: "#FFFFFF",
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 60,
    borderColor: "#1C1C1C",
    borderWidth: 1,
    borderStyle: "solid",
  },

  registerButton: {
    backgroundColor: "#1C1C1C",
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 60,
  },

  whiteText: {
    color: "#FFFFFF",
  },
});
