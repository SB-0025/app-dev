import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Username",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="people-circle" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
