import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import News from "./screens/News";
import store from "./state/store";
import { Provider } from "react-redux";

export default App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={Home}
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
      </Provider>
    </NavigationContainer>
  );
};
