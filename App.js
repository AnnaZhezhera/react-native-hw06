import React, { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./screens/auth/LoginScreen";
import Registration from "./screens/auth/RegistrationScreen";
import CreatePostScreen from "./screens/main/CreatePostScreen";
import ProfileScreen from "./screens/main/ProfileScreen";
import PostsScreen from "./screens/main/PostsScreen";

import GridIcon from "./assets/images/grid.svg";
import NewPostIcon from "./assets/images/new.svg";
import UserIcon from "./assets/images/user.svg";

SplashScreen.preventAutoHideAsync();

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const renderGridIcon = () => {
  return <GridIcon size={25} />;
};

const renderNewPostIcon = () => {
  return <NewPostIcon width={70} height={40} />;
};

const renderUserIcon = () => {
  return <UserIcon size={24} />;
};

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          name="Registration"
          component={Registration}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator>
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerShown: false,
          tabBarIcon: renderGridIcon,
          tabBarShowLabel: false,
        }}
      />
      <MainTab.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          headerShown: false,
          tabBarIcon: renderNewPostIcon,
          tabBarShowLabel: false,
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: renderUserIcon,
          tabBarShowLabel: false,
        }}
      />
    </MainTab.Navigator>
  );
};

export default function App() {
  const routing = useRoute(true);

  const [fontsLoaded] = useFonts({
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  console.log("render", fontsLoaded);

  //adding fonts

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      console.log("fonts loaded");
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    console.log("fonts not loaded");
    return null;
  }
  //   end

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>{routing}</NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
