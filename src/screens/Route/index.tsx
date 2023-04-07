import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export function Route() {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text>Route</Text>
      <Button
        title="Home"
        onPress={() => {
          navigate("Home");
        }}
      />
    </SafeAreaView>
  );
}
