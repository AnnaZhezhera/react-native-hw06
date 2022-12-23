import { Text, StyleSheet } from "react-native";

const Comments = () => {
  return <Text style={styles.container}>Comments</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
});

export default Comments;
