import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { intToHuman } from "../app/scripts/timeconverter";
import ProgressCalc from "@/app/scripts/progresscalc";

interface LockCardProps {
  timeLeft: number;
  timeTotal: number;
  locked?: boolean;
}

export default function LockCard(props: LockCardProps) {
  const [timeLeft, setTime] = useState(props.timeLeft);
  const [progress, setProgress] = useState(
    ProgressCalc(props.timeLeft, props.timeTotal)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((timeLeft) => timeLeft - 1);
      setProgress(ProgressCalc(timeLeft, props.timeTotal));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View>
      <View
        style={{
          width: "95%",
          position: "relative",
          backgroundColor: "#323232",
          height: 80,
          padding: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
          marginHorizontal: "auto",
          marginVertical: 5,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "600", fontSize: 22 }}>
            {intToHuman(timeLeft)}
          </Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons name="add-circle" size={25} color="white" />
          </View>
        </View>
        <View style={{ flex: 1 }} />
        <View style={{ backgroundColor: "black" }}>
          <View
            style={{
              height: 5,
              width: `${progress}%`,
              maxWidth: `95%`,
              backgroundColor: "green",
              borderRadius: 5,
            }}
          />
        </View>
      </View>
    </View>
  );
}
