import { Pressable, Text, View } from "react-native";
import BottomSheet from "../BottomSheet";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { humanToInt } from "@/app/scripts/timeconverter";
import { SaveLock } from "@/app/scripts/lockManager";

interface Props {
  visible: boolean;
  toggle: Function;
}

export default function LockCreateModal(props: Props) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  return (
    <BottomSheet visible={props.visible} toggle={props.toggle}>
      <View style={{ height: 14 }} />
      <Text style={{ color: "white", fontWeight: "600", fontSize: 24 }}>
        Create new lock
      </Text>
      <View style={{ height: 20 }} />
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TimeInput
          NumberProps={{
            maxNumber: undefined,
            minNumber: 0,
            value: days,
            setValue: setDays,
          }}
          title="days"
        />
        <TimeInput
          NumberProps={{
            maxNumber: 60,
            minNumber: 0,
            value: hours,
            setValue: setHours,
          }}
          title="hours"
        />
        <TimeInput
          NumberProps={{
            maxNumber: 60,
            minNumber: 0,
            value: minutes,
            setValue: setMinutes,
          }}
          title="minutes"
        />
        <TimeInput
          NumberProps={{
            maxNumber: 60,
            minNumber: 0,
            value: seconds,
            setValue: setSeconds,
          }}
          title="seconds"
        />
      </View>
      <Pressable
        onPress={() => {
          console.log(`D: ${days}|H: ${hours}|M: ${minutes}|S: ${seconds}`);
          console.log(`R: ${humanToInt(days, hours, minutes, seconds)}`);

          /* 
          interface TypeLock {
            id: number;
            unlockAt: number;
            timeTotal: number;
          }
          */

          SaveLock({
            id: 0,
            unlockAt:
              Date.now() / 1000 + humanToInt(days, hours, minutes, seconds),
            timeTotal: 0,
          });
        }}
      >
        <View
          style={{
            height: 40,
            width: "80%",
            backgroundColor: "green",
            borderRadius: 10,
            marginHorizontal: "auto",
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
            Start a new lock!
          </Text>
        </View>
      </Pressable>
    </BottomSheet>
  );
}

interface TimeProps {
  maxSeconds?: number;
  minSeconds?: number;
  title?: string;
  NumberProps: NumberProps;
}

function TimeInput(props: TimeProps) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", width: 80 }}>
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        {props.title}
      </Text>
      <NumberInput
        maxNumber={props.NumberProps.maxNumber}
        minNumber={props.NumberProps.minNumber}
        setValue={props.NumberProps.setValue}
        value={props.NumberProps.value}
      />
    </View>
  );
}

interface NumberProps {
  maxNumber?: number;
  minNumber?: number;
  setValue: Function;
  value: number;
}

function NumberInput(props: NumberProps) {
  const increment = useRef(setTimeout(() => {}));

  const handlePressIn = (incrementFn: { (): void; (): void; (): void }) => {
    increment.current = setInterval(incrementFn, 100);
  };

  const handlePressOut = () => {
    if (increment.current) {
      clearInterval(increment.current);
    }
  };

  return (
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <Pressable
        onPressIn={() =>
          handlePressIn(() => {
            props.setValue((prevValue: number) => {
              const newValue = prevValue + 1;
              return props.maxNumber
                ? Math.min(newValue, props.maxNumber)
                : newValue;
            });
          })
        }
        onPressOut={handlePressOut}
      >
        <Ionicons name="caret-up" size={30} color={"white"} />
      </Pressable>
      <Text style={{ color: "white", fontSize: 30 }}>
        {props.value >= 10 ? props.value : "0" + props.value}
      </Text>
      <Pressable
        onPressIn={() =>
          handlePressIn(() => {
            props.setValue((prevValue: number) => {
              const newValue = prevValue - 1;
              return props.minNumber != null
                ? Math.max(newValue, props.minNumber)
                : Math.max(newValue, 0);
            });
          })
        }
        onPressOut={handlePressOut}
      >
        <Ionicons name="caret-down" size={30} color={"white"} />
      </Pressable>
    </View>
  );
}
