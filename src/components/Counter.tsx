import { useAtom } from "jotai";
import { Button, Text } from "react-native-paper";
import { counterAtom } from "../lib/atoms";

const Counter = () => {
  const [count, setCount] = useAtom(counterAtom);

  return (
    <>
      <Text variant="displayMedium">Counter: {count}</Text>

      <Button
        icon="plus"
        mode="contained"
        style={{ marginTop: 20 }}
        onPress={() => setCount(count + 1)}>
        Press me
      </Button>
    </>
  );
};

export default Counter;

// const styles = StyleSheet.create({})
