import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Register from "./Register";
import News from "./News";
import Auth from "./Auth";
import Settings from "./Settings";
import Tickets from "./Tickets";
import Shop from "./Shop";
import Podcasts from "./Podcasts";
import { useSelector } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

export default Main = () => {
  const Stack = createNativeStackNavigator();
  const TabNav = createBottomTabNavigator();
  const isUserSignedIn = useSelector((user) => user.user.user.username);

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

                case "Tickets":
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
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <TabNav.Screen name="Shop" component={Shop} />
          <TabNav.Screen name="Tickets" component={Tickets} />
          <TabNav.Screen name="News" component={News} />
          <TabNav.Screen name="Podcasts" component={Podcasts} />
          <TabNav.Screen name="Settings" component={Settings} />
        </TabNav.Navigator>
      )}
    </NavigationContainer>
  );
};
