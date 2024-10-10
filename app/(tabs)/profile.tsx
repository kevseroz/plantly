import { Text, View, StyleSheet } from "react-native";
import { PlantlyButton } from "@/components/PlantlyButton";
import { useRouter } from "expo-router";
import { useUserStore } from "@/store/userStore";

export default function ProfileScreen() {
  const router = useRouter();
  const toggleHasOnboarded = useUserStore((state) => state.toggleHadOnboarded);
  const handlePress = () => {
    toggleHasOnboarded();
    router.replace("/onboarding");
  };

  return (
    <View style={styles.container}>
      <PlantlyButton title={"Let me out!"} onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
  },
});
