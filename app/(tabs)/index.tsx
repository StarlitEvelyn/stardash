import { Pressable, Text, View } from "react-native";
import LockCard from "../../components/lockCard";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { TypeLock, getLock } from "../scripts/lockManager";
import { Fragment, useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import LockCreateModal from "@/components/modals/lockCreateModal";

export default function Index() {
  const [locks, setLocks] = useState<TypeLock[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [showDrawer, setDrawerState] = useState(false);

  useEffect(() => {
    async function load() {
      const newLocks = [];
      for (let i = 0; i < 1; i++) {
        // Assuming you want to load two locks initially
        const lock = await getLock(0);
        newLocks.push(lock);
      }
      setLocks(newLocks);
      setLoaded(true);
    }

    if (!loaded) {
      load();
    }
  }, [loaded]);

  return (
    <GestureHandlerRootView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!loaded ? (
          <Text style={{ color: "white" }}>Loading...</Text>
        ) : (
          <ScrollView
            style={{
              width: "100%",
            }}
          >
            <View style={{ height: 60 }} />
            {locks.map((lock) => (
              <Fragment key={lock.id}>
                <LockCard
                  timeLeft={parseInt(
                    (lock.unlockAt - Date.now() / 1000).toString()
                  )}
                  timeTotal={parseInt(lock.timeTotal.toString())}
                />
              </Fragment>
            ))}
            <View style={{ height: 60 }} />
          </ScrollView>
        )}
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            right: 10,
            bottom: 20,
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: "white",
          }}
        >
          <Pressable
            onPress={() => {
              setDrawerState(true);
            }}
          >
            <Ionicons name="add" size={40} />
          </Pressable>
        </View>
        <LockCreateModal visible={showDrawer} toggle={setDrawerState} />
      </View>
    </GestureHandlerRootView>
  );
}
