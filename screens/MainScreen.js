import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import News from "./News";
import Auth from "./Auth/Auth";
import Settings from "./Settings";
import Shows from "./Shows/Shows";
import Shop from "./Shop/Shop";
import Podcasts from "./Podcasts/Podcasts";
import { useSelector, useDispatch } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { logout } from "../state/slices/userSlice";

export default Main = () => {
  const dispatch = useDispatch();
  const Stack = createNativeStackNavigator();
  const TabNav = createBottomTabNavigator();
  const isUserSignedIn = useSelector((user) => user.user.user.username);
  const show = useSelector((user) => user.user.viewShowInfo);

  const logUserOut = () => {
    dispatch(logout());
  };

  return (
    <NavigationContainer>
      {!isUserSignedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={Auth}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Register"
            component={Register}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="News"
            component={News}
          />
        </Stack.Navigator>
      ) : (
        <TabNav.Navigator
          initialRouteName="News"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              switch (route.name) {
                case "Settings":
                  iconName = focused ? "settings" : "settings-outline";
                  break;

                case "Podcasts":
                  iconName = focused ? "mic" : "mic-outline";
                  break;

                case "News":
                  iconName = focused ? "newspaper" : "newspaper-outline";
                  break;

                case "Shows":
                  iconName = focused ? "pricetag" : "pricetag-outline";
                  break;

                case "Shop":
                  iconName = focused ? "cart" : "cart-outline";
                  break;

                default:
                  break;
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <TabNav.Screen
            options={{
              headerRight: (props) => (
                <Pressable
                  onPress={() => {
                    console.log("test");
                  }}
                >
                  <Ionicons style={styles.headerRight} color="black" size={20} name="funnel" />
                </Pressable>
              ),
            }}
            name="Shop"
            component={Shop}
          />
          <TabNav.Screen
            options={{
              headerRight: (props) => (
                <Pressable
                  onPress={() => {
                    console.log(show);
                  }}
                >
                  <Ionicons style={styles.headerRight} color="black" size={20} name="funnel" />
                </Pressable>
              ),
            }}
            name="Shows"
            component={Shows}
          />
          <TabNav.Screen name="News" component={News} />
          <TabNav.Screen
            options={{
              headerRight: (props) => (
                <Pressable
                  onPress={() => {
                    console.log("test");
                  }}
                >
                  <Ionicons style={styles.headerRight} color="black" size={20} name="funnel" />
                </Pressable>
              ),
            }}
            name="Podcasts"
            component={Podcasts}
          />
          <TabNav.Screen
            options={{
              headerRight: (props) => (
                <Pressable onPress={logUserOut}>
                  <View style={styles.logout}>
                    <Text>Logout</Text>
                    <Ionicons style={styles.headerRight} color="black" size={20} name="exit" />
                  </View>
                </Pressable>
              ),
            }}
            name="Settings"
            component={Settings}
          />
        </TabNav.Navigator>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 20,
    marginLeft: 5,
  },

  logout: {
    display: "flex",
    flexDirection: "row",
  },
});
