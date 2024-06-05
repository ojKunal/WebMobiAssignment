import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./Screens/MainScreen";

export default function App() {
  return (
    <View>
      <MainScreen />
    </View>
  );
}
