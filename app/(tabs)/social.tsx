import FriendCard from "@/components/friendCard";
import { ScrollView, View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function SocialPage() {
  return (
    <GestureHandlerRootView>
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={{ height: 60 }} />
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ color: "white", fontWeight: "600", fontSize: 30 }}>
            Friends
          </Text>
        </View>
        <ScrollView>
          <FriendCard name={"StarlitEvelyn"} />
          <FriendCard name={"StarlitEvelyn"} />
          <FriendCard name={"StarlitEvelyn"} />
          <FriendCard name={"StarlitEvelyn"} />
        </ScrollView>
        <View style={{ height: 60 }} />
      </View>
    </GestureHandlerRootView>
  );
}
