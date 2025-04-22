import Counter from "@/src/components/Counter";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

const index = () => {
  return (
    <>
      <Tabs.Screen options={{ title: "Home" }}></Tabs.Screen>

      <View style={styles.container}>
        <Counter />
      </View>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
