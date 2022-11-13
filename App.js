import Main from "./screens/MainScreen";
import store from "./state/store";
import { Provider } from "react-redux";

export default App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
