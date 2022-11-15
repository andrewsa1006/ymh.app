import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";

const Settings = () => {
  const user = useSelector((user) => user.user.user.username);

  return (
    <View style={styles.settingsMenu}>
      <Text style={styles.signedInAs}>Signed in as: {user}</Text>
      <Pressable style={styles.menuItem}>
        <Ionicons size={20} name="document" />
        <Text style={styles.menuItemText}>View Privacy Policy</Text>
      </Pressable>

      <Pressable style={styles.menuItem}>
        <Ionicons size={20} name="card" />
        <Text style={styles.menuItemText}>View Purchase History</Text>
      </Pressable>

      <Pressable style={styles.menuItem}>
        <Ionicons size={20} name="options" />
        <Text style={styles.menuItemText}>Account Preferences</Text>
      </Pressable>

      <Pressable style={styles.menuItem}>
        <Ionicons size={20} name="key" />
        <Text style={styles.menuItemText}>Change Password</Text>
      </Pressable>

      <Pressable style={styles.menuItem}>
        <Ionicons size={20} name="person" />
        <Text style={styles.menuItemText}>Change Username</Text>
      </Pressable>

      <Pressable style={styles.menuItem}>
        <Ionicons size={20} name="bug" />
        <Text style={styles.menuItemText}>Submit Feedback</Text>
      </Pressable>

      <Pressable style={styles.menuItem}>
        <Ionicons size={20} name="information-circle" />
        <Text style={styles.menuItemText}>Help</Text>
      </Pressable>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  settingsMenu: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: Dimensions.get("screen").width * 0.95,
    alignSelf: "center",
  },

  signedInAs: {
    fontSize: 22,
    backgroundColor: "#CCC",
    width: Dimensions.get("screen").width * 0.95,
    textAlign: "center",
    borderRadius: 10,
    padding: 5,
  },

  menuItem: {
    backgroundColor: "#DDD",
    width: Dimensions.get("screen").width * 0.95,
    textAlign: "center",
    borderRadius: 10,
    padding: 5,
    margin: 10,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },

  menuItemText: {
    marginHorizontal: 20,
    fontSize: 16,
  },
});
