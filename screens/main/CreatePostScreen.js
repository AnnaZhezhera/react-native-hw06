import React, { useState } from "react";

import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  View,
} from "react-native";

import ArrowLeftIcon from "../../assets/images/arrowLeft.svg";
import CameraIcon from "../../assets/images/camera.svg";
import MapPinIcon from "../../assets/images/mapPin.svg";
import DeleteIcon from "../../assets/images/trashBin.svg";

export const CreatePostScreen = () => {
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const locationHandler = (text) => setLocation(text.trim());
  const nameHandler = (text) => setName(text.trim());

  const onPost = () => {
    setName("");
    setLocation("");

    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View>
          <View style={styles.header}>
            <Text style={{ ...styles.title, fontFamily: "RobotoMedium" }}>
              Create post
            </Text>
            <TouchableOpacity style={styles.backBtn}>
              <ArrowLeftIcon width={24} height={24} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <View>
              <View style={{ ...styles.imgThumb }}>
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 60,
                    width: 60,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 50,
                  }}
                >
                  <CameraIcon style={styles.cameraIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.form}>
                <TouchableOpacity>
                  <Text
                    style={{ ...styles.download, fontFamily: "RobotoRegular" }}
                  >
                    Download a photo
                  </Text>
                </TouchableOpacity>
                <TextInput
                  value={name}
                  onChangeText={nameHandler}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  placeholder="Name..."
                  placeholderTextColor="#BDBDBD"
                  style={{
                    ...styles.input,
                    fontFamily: "RobotoRegular",
                  }}
                />
                <View>
                  <MapPinIcon style={styles.location} />
                  <TextInput
                    value={location}
                    onChangeText={locationHandler}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                    }}
                    placeholder="Location"
                    placeholderTextColor="#BDBDBD"
                    style={{
                      ...styles.input,
                      paddingLeft: 28,
                      fontFamily: "RobotoRegular",
                    }}
                  />
                </View>
                <TouchableOpacity
                  style={{ ...styles.submitBtn, backgroundColor: "#F6F6F6" }}
                  activeOpacity={0.8}
                  onPress={onPost}
                >
                  <Text
                    style={{ color: "#BDBDBD", fontFamily: "RobotoRegular" }}
                  >
                    Publish
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.deleteWrapp}
                >
                  <DeleteIcon width={24} height={24} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 55,
    paddingBottom: 11,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
  },
  title: {
    fontSize: 17,
    lineHeight: 22,
  },

  backBtn: {
    position: "absolute",
    top: 55,
    left: 16,
  },
  imgThumb: {
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginHorizontal: 16,
    marginTop: 32,
  },
  cameraIcon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  download: {
    fontSize: 16,
    color: "#BDBDBD",
    marginBottom: 32,
  },
  form: {
    marginHorizontal: 16,
    marginTop: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    height: 50,
    fontSize: 16,
  },
  location: {
    position: "absolute",
    left: 0,
    bottom: 15,
  },
  submitBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 100,
    height: 50,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#F6F6F6",
    backgroundColor: "#BDBDBD",
  },
  deleteWrapp: {
    height: 40,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
});

export default CreatePostScreen;
