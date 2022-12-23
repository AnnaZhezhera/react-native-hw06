import React, { useState, useEffect } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Delete from "../../assets/images/delete.svg";
import LogOutIcon from "../../assets/images/logOut.svg";

import Shape from "../../assets/images/Shape.svg";
import ThumbsUp from "../../assets/images/thumbUp.svg";
import Location from "../../assets/images/mapPin.svg";

const ProfileScreen = () => {
  // const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  // const keyboardHide = () => {
  //   setIsShowKeyboard(false);
  //   Keyboard.dismiss();
  // };

  const [windowWidth, setWindowWidth] = useState(
    Dimensions.get("window").width
  );

  const [windowHeight, setWindowHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setWindowWidth(width);
      const height = Dimensions.get("window").height;
      setWindowHeight(height);
    };
    const dimensionsHandler = Dimensions.addEventListener("change", onChange);

    return () => dimensionsHandler?.remove();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ImageBackground
          style={{
            ...styles.imageBGPicture,
            width: windowWidth,
            height: windowHeight,
          }}
          source={require("../../assets/images/Photo-BG.jpg")}
        >
          <View style={styles.wrapper}>
            <View style={styles.image_thumb}>
              <Delete style={styles.delBtn} width={25} height={25} />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={styles.logOutBtn}
            >
              <LogOutIcon width={24} height={24} />
            </TouchableOpacity>
            <Text style={{ ...styles.title, fontFamily: "RobotoMedium" }}>
              User Name
            </Text>

            <View style={styles.cardInfo}>
              <Image
                source={require("../../assets/images/Forest.jpg")}
                style={{ height: 240, borderRadius: 8 }}
              />
              <View>
                <Text
                  style={{
                    ...styles.locationName,
                    fontFamily: "RobotoRegular",
                  }}
                >
                  Forest
                </Text>
                <View
                  style={{ ...styles.infoSection, width: windowWidth - 32 }}
                >
                  <View style={{ flexDirection: "row", marginRight: 27 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 15,
                      }}
                    >
                      <TouchableOpacity>
                        <Shape width={24} height={24} />
                      </TouchableOpacity>

                      <Text style={{ alignSelf: "center", marginLeft: 3 }}>
                        8
                      </Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity>
                        <ThumbsUp width={24} height={24} />
                      </TouchableOpacity>
                      <Text style={{ alignSelf: "center", marginLeft: 3 }}>
                        153
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                  >
                    <Location width={24} height={24} />
                    <Text style={{ alignSelf: "center", marginLeft: 8 }}>
                      Location
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  imageBGPicture: {
    flex: 1,
    resizeMode: "cover",
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    marginTop: 147,

    paddingTop: 33,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },

  image_thumb: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 16,
  },
  delBtn: {
    position: "absolute",
    bottom: 14,
    left: 104,
  },
  logOutBtn: {
    position: "absolute",
    top: 24,
    right: 16,
  },
  title: {
    marginTop: 32,
    fontSize: 30,
    textAlign: "center",
    lineHeight: 35.16,
    marginBottom: 33,
  },
  cardInfo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 35,
  },
  locationName: {
    fontSize: 16,
    marginTop: 8,
  },
  infoSection: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default ProfileScreen;
