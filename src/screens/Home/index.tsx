import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export function Home() {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Route"
        onPress={() => {
          navigate("Route");
        }}
      />
    </SafeAreaView>
  );
}
