import React, { useState, useEffect, useCallback } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import AddIcon from "./assets/images/add.svg";

import * as SplashScreen from "expo-splash-screen";

const initialState = {
  login: "",
  email: "",
  password: "",
};

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoThin: require("./assets/fonts/Roboto-ThinItalic.ttf"),
  });

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const [borderLoginColor, setBorderLoginColor] = useState("#E8E8E8");
  const [borderEmailColor, setBorderEmailColor] = useState("#E8E8E8");
  const [borderPasswordColor, setBorderPasswordColor] = useState("#E8E8E8");

  const [inputBgLoginColor, setInputBgLoginColor] = useState("#F6F6F6");
  const [inputBgEmailColor, setInputBgEmailColor] = useState("#F6F6F6");
  const [inputBgPasswordColor, setInputBgPasswordColor] = useState("#F6F6F6");

  const windowWidth = Dimensions.get("window").width - 16 * 2;
  const [dimensions, setDimensions] = useState({ windowWidth });

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions({ windowWidth: window.width - 16 * 2 });
    });
    return () => subscription?.remove();
  });

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log("state", state);
    setState(initialState);
  };

  //adding fonts

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  //   end

  return (
    <ScrollView style={styles.container} onLayout={onLayoutRootView}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/images/Photo-BG.jpg")}
        >
          <View
            style={{
              ...styles.wrapp,
              width: "100%",
              marginTop: isShowKeyboard ? 147 : 263,
            }}
          >
            <View style={styles.userImageThumb}>
              <AddIcon style={styles.addBtn} width={25} height={25} />
            </View>

            <View style={{ ...styles.form, width: dimensions.windowWidth }}>
              <Text
                style={{
                  ...styles.header,
                  fontFamily: "RobotoMedium",
                }}
              >
                Registration
              </Text>

              <TextInput
                value={state.login}
                class="my-input"
                style={{
                  ...styles.input,
                  marginBottom: 16,
                  fontFamily: "RobotoRegular",
                  borderColor: borderLoginColor,
                  backgroundColor: inputBgLoginColor,
                }}
                placeholder="Login"
                onFocus={() => {
                  setIsShowKeyboard(true);
                  setBorderLoginColor("#FF6C00");
                  setInputBgLoginColor("#FFFFFF");
                }}
                onBlur={() => {
                  setBorderLoginColor("#E8E8E8");
                  setInputBgLoginColor("#F6F6F6");
                }}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, login: value }))
                }
              />

              <TextInput
                value={state.email}
                style={{
                  ...styles.input,
                  marginBottom: 16,
                  fontFamily: "RobotoRegular",
                  borderColor: borderEmailColor,
                  backgroundColor: inputBgEmailColor,
                }}
                placeholder="Email adress"
                onFocus={() => {
                  setIsShowKeyboard(true);
                  setBorderEmailColor("#FF6C00");
                  setInputBgEmailColor("#FFFFFF");
                }}
                onBlur={() => {
                  setBorderEmailColor("#E8E8E8");
                  setInputBgEmailColor("#F6F6F6");
                }}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />

              <TextInput
                value={state.password}
                style={{
                  ...styles.input,
                  marginBottom: 43,
                  fontFamily: "RobotoRegular",
                  borderColor: borderPasswordColor,
                  backgroundColor: inputBgPasswordColor,
                }}
                secureTextEntry={true}
                placeholder="Password"
                onFocus={() => {
                  setIsShowKeyboard(true);
                  setBorderPasswordColor("#FF6C00");
                  setInputBgPasswordColor("#FFFFFF");
                }}
                onBlur={() => {
                  setBorderPasswordColor("#E8E8E8");
                  setInputBgPasswordColor("#F6F6F6");
                }}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
              />
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={keyboardHide}
              >
                <Text
                  style={{ ...styles.btnTitle, fontFamily: "RobotoRegular" }}
                >
                  Register
                </Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text
                  style={{ ...styles.linkTitle, fontFamily: "RobotoRegular" }}
                >
                  Already have an account?
                </Text>
              </TouchableOpacity>
            </View>

            <StatusBar style="auto" />
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  wrapp: {
    flex: 1,
    alignItems: "center",

    paddingTop: 92,
    borderWidth: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
  },

  userImageThumb: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 16,
  },

  addBtn: {
    position: "absolute",
    bottom: 14,
    left: 104,
  },

  header: {
    fontSize: 30,
    textAlign: "center",
    lineHeight: 35.16,
    marginBottom: 33,
  },
  form: {
    flex: 1,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    placeholderTextColor: "#BDBDBD",
  },
  btn: {
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  btnTitle: {
    fontSize: 16,
    color: "#FFFFFF",
    lineHeight: 19,
  },
  linkTitle: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 18.75,
    color: "#1B4371",
  },
});
