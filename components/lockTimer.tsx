import { intToHuman } from "@/app/scripts/timeconverter";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

interface LockTimerProps {
  timeRemaining: number;
}

export default function LockTimer(props: LockTimerProps) {
  const [displayTime, setDisplayTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayTime(props.timeRemaining - Date.now() / 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View
      style={{
        width: "90%",
        marginHorizontal: "auto",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 18 }}>Time remaining</Text>
      <Text
        style={{
          color: "#fff",
          fontWeight: "600",
          fontSize: 40,
        }}
      >
        {intToHuman(displayTime)}
      </Text>
    </View>
  );
}
