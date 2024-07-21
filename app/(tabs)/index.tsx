import LockTimer from "@/components/lockTimer";
import { ScrollView, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Home() {
  return (
    <GestureHandlerRootView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScrollView
          style={{
            width: "100%",
          }}
        >
          <View style={{ height: 60 }} />
          <LockTimer timeRemaining={Date.now() / 1000 + 60} />
          <View style={{ height: 60 }} />
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
}
