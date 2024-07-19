import { ReactElement, useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
interface Props {
  children: ReactElement | ReactElement[];
  visible: boolean;
  toggle: Function;
  defaultHeight?: number;
}

export default function BottomSheet(props: Props) {
  const DEFAULT_HEIGHT = props.defaultHeight ?? 300;
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [pageHeight, setPageHeight] = useState(0);
  return (
    <Modal transparent={true} visible={props.visible}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
        onLayout={(evt) => {
          setPageHeight(evt.nativeEvent.layout.height);
        }}
      >
        <Pressable
          onPress={() => {
            props.toggle(false);
          }}
          style={{
            flex: 1,
            width: "100%",
          }}
        />
        <Pressable
          style={{
            width: "100%",
            height: 30,
            backgroundColor: "#323232",
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
          onTouchMove={(evt) => {
            setHeight(pageHeight - evt.nativeEvent.pageY);
            if (height < (pageHeight / 100) * 10) {
              props.toggle(false);
              setHeight(DEFAULT_HEIGHT);
            }
          }}
        >
          <View
            style={{
              width: "50%",
              height: "30%",
              backgroundColor: "#fff",
              borderRadius: 20,
            }}
          />
        </Pressable>
        <View
          style={{
            backgroundColor: "#323232",
            height: height,
            width: "100%",
            padding: 10,
            paddingTop: 0,
          }}
        >
          {props.children}
        </View>
      </View>
    </Modal>
  );
}
