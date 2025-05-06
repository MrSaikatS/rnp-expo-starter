import { useState } from "react";
import { Button, Text } from "react-native-paper";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

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
