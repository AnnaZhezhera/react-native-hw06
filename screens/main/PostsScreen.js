import {
  Image,
  Text,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import LogOutIcon from "../../assets/images/logOut.svg";

const PostsScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ ...styles.title, fontFamily: "RobotoMedium" }}>
          Posts
        </Text>
        <TouchableOpacity
          style={styles.logOutBtn}
          onPress={() => navigation.navigate("Login")}
        >
          <LogOutIcon width={24} height={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.userInfo}>
        <Image
          style={{ marginRight: 8, borderRadius: 16 }}
          source={require("../../assets/images/User.jpg")}
        />
        <View>
          <Text style={{ fontFamily: "RobotoMedium" }}>Natali Romanova</Text>
          <Text style={{ fontFamily: "RobotoRegular" }}>email@example.com</Text>
        </View>
      </View>
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
    paddingTop: 55,
    paddingBottom: 11,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
  },
  title: {
    fontSize: 17,
    lineHeight: 22,
  },

  logOutBtn: {
    position: "absolute",
    top: 54,
    right: 15,
  },
  userInfo: {
    paddingLeft: 16,
    paddingTop: 32,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default PostsScreen;
