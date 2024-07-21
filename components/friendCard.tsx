import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface FriendCardProps {
  name: String;
}

export default function FriendCard(props: FriendCardProps) {
  return (
    <View
      style={{
        marginHorizontal: 20,
        marginVertical: 5,
        padding: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        borderRadius: 5,
        backgroundColor: "#323232",
      }}
    >
      <Text style={{ color: "white", fontWeight: "600", fontSize: 20 }}>
        {props.name}
      </Text>
      <Ionicons name="caret-forward" color={"white"} size={20} />
    </View>
  );
}
