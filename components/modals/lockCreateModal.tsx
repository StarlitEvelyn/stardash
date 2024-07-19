import { Pressable, Text, View } from "react-native";
import BottomSheet from "../BottomSheet";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

interface Props {
  visible: boolean;
  toggle: Function;
}

export default function LockCreateModal(props: Props) {
  return (
    <BottomSheet visible={props.visible} toggle={props.toggle}>
      <Text style={{ color: "white", fontWeight: "600", fontSize: 24 }}>
        Create new lock
      </Text>
      <TimeInput />
    </BottomSheet>
  );
}

interface TimeProps {
  maxSeconds?: number;
  minSeconds?: number;
  title?: string;
}

function TimeInput(props: TimeProps) {
  return (
    <View>
      <Text>{props.title}</Text>
      <NumberInput />
    </View>
  );
}

interface NumberProps {
  maxNumber?: number;
  minNumber?: number;
}

function NumberInput(props: NumberProps) {
  const [value, setValue] = useState(props.minNumber ?? 0);
  return (
    <View style={{ flexDirection: "column", backgroundColor: "red" }}>
      <Pressable
        onPress={() => {
          if (
            (props.maxNumber && value < props.maxNumber) ||
            !props.maxNumber
          ) {
            setValue(value + 1);
          }
        }}
      >
        <Ionicons name="arrow-up" size={20} color={"white"} />
      </Pressable>
      <Text style={{ color: "white", fontSize: 20 }}>
        {value > 10 ? value : "0" + value} {props.maxNumber}
      </Text>
      <Pressable
        onPress={() => {
          if (
            (props.minNumber && value > props.minNumber) ||
            (!props.minNumber && props.minNumber != 0)
          ) {
            setValue(value - 1);
          }
        }}
      >
        <Ionicons name="arrow-down" size={20} color={"white"} />
      </Pressable>
    </View>
  );
}
