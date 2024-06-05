//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";

// create a component
const MainScreen = () => {
  return (
    <>
      <StatusBar className="dark" />
      <SafeAreaView className="">
        <TouchableOpacity className="flex-row mt-4 justify-center items-center">
          <View className="bg-orange-600 flex-row h-12 w-[90%] rounded-3xl justify-center items-center space-x-3 shadow-xl">
            <AntDesign name="down" size={20} color="white" />
            <Text className="font-bold text-gray-50 text-[18px]">
              Share my card
            </Text>
          </View>
        </TouchableOpacity>
        <View>
          <View className="mt-10 h-[200px] flex-row justify-center">
            {/* <Image
              className="h-full w-[60%]"
              source={require("../assets/qr.jpg")}
            /> */}
            <QRCode
              value="https://www.nexalink.co/"
              logo={require("../assets/qr.png")}
              logoSize={30}
              logoBackgroundColor="transparent"
              size={200}
            />
          </View>
        </View>
        <View className="mt-10 flex-row justify-center ">
          <View className="bg-gray-200 space-y-3 py-6 pl-5 pr-10 rounded-xl">
            <TouchableOpacity className="space-x-2 flex-row item-center">
              <FontAwesome6
                name="share-from-square"
                size={24}
                color="#6B7280"
              />
              <Text className="font-bold text-[18px] text-gray-500">
                Share my card
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="space-x-2 flex-row  item-center">
              <MaterialCommunityIcons
                name="wallet-outline"
                size={24}
                color="#6B7280"
              />
              <Text className="font-bold text-[18px] text-gray-500">
                Add card to Wallet
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="space-x-2 flex-row  item-center">
              <SimpleLineIcons
                name="screen-smartphone"
                size={24}
                color="#6B7280"
              />
              <Text className="font-bold text-[18px] text-gray-500">
                Add card to Homesreen
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="space-x-2 flex-row item-center ">
              <MaterialCommunityIcons
                name="email-multiple-outline"
                size={24}
                color="#6B7280"
              />
              <Text className="font-bold text-[18px] text-gray-500">
                Create email signature
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="space-x-2 flex-row item-center ">
              <Entypo name="image" size={24} color="#6B7280" />
              <Text className="font-bold text-[18px] text-gray-500">
                create virtual background
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row mt-10 justify-center items-center">
          <TouchableOpacity className="bg-orange-400 flex-row h-14 w-[90%] rounded-3xl justify-center items-center space-x-4">
            <MaterialIcons name="wifi-tethering" size={35} color="white" />
            <Text className="font-bold text-gray-50 text-[18px]">
              Share with AirDrop
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};
export default MainScreen;
