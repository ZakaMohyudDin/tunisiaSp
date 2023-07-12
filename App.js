// In App.js in a new project
import * as React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./src/redux/store/index";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { colors } from "./src/utils/colors";
import LinearGradient from "react-native-linear-gradient";
import { MenuProvider } from "react-native-popup-menu";
import { ThemeProvider } from "./ThemeContext";
import MainStack from "./src/navigation/MainStack";

const { store, persistor } = configureStore();

const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: colors.red }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 12,
        fontWeight: "600",
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
      text2NumberOfLines={2}
    />
  ),
  tunisia: ({ text1 }) => (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[colors.primary_color, colors.primary_color]}
      style={{
        // height: 40,
        paddingVertical: 12,
        width: "90%",
        backgroundColor: colors.tagColor,
        borderRadius: 8,
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: colors.white,
          fontWeight: "bold",
        }}
      >
        {text1}
      </Text>
    </LinearGradient>
  ),
};

function App() {
  return (
    <ThemeProvider>
      <MenuProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
              <MainStack />
              <>
                <Toast position="top" config={toastConfig} />
              </>
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </MenuProvider>
    </ThemeProvider>
  );
}

export default App;
