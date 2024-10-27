import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export default function Device_binding() {
  const navigation = useNavigation();
  return (
    <View className="bg-slate-100 h-screen">
      <StatusBar backgroundColor="#001D68" barStyle="light-content" />
      <Text className="text-center mt-3 text-2xl font-bold">
        Device Binding
      </Text>
      <View className="flex flex-row mt-3">
        <Image
          source={require("../assets/BgIcon.png")}
          className="w-16 h-16 ml-10"
        ></Image>
        <Text className="ml-3 mt-3 text-2xl font-bold text-blue-700">
          THE DEMO BANK LTD.
        </Text>
      </View>
      <View className=" m-6 mt-10 rounded-lg items-center bg-white shadow-2xl p-5 pb-32">
      <MaterialIcons  name="sim-card" size={90} color="#900" />
        <Text className="mt-5 text-gray-500 text-sm font-medium">
          We need to send SMS to verify your mobile number, please make your
          choice
        </Text>
        <Text>*Standard sms charges may apply*</Text>
      </View>

      <View className="items-center m-2">
        <TouchableOpacity
          className="w-full p-3 items-center text-white rounded-lg bg-blue-900"
          onPress={() => navigation.navigate('mpin')}
        >
          <Text className="text-base text-white">Verify my device with default SIM</Text>
        </TouchableOpacity>
      </View>
      <View className="items-center m-2">
        <TouchableOpacity
          className="w-full p-3 items-center rounded-lg border border-yellow-500 bg-white"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-base">Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
