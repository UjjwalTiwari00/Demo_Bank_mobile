import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { Checkbox } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';

export default function Security_functionality() {
  const [isCheck, setCheck] = useState(false);
  const navigation = useNavigation();

  return (
    <View className="bg-slate-100 h-full">
      <StatusBar backgroundColor="#001D68" barStyle="light-content" />
      <Text className="text-center mt-3 text-2xl font-bold">
        Terms and Conditions
      </Text>
      <View className="flex flex-row mt-3">
        <Image
          source={require("../assets/BgIcon.png")}
          className="w-16 h-16 ml-10"
        />
        <Text className="ml-3 mt-3 text-2xl font-bold text-blue-700">
          THE DEMO BANK LTD.
        </Text>
      </View>
      <View className="m-6 mt-10 rounded-lg bg-white shadow-2xl p-5 pb-12">
        <Text className="text-2xl font-bold">Welcome User,</Text>
        <Text className="mt-5 text-gray-500 text-sm font-medium">
          By Clicking on the Accept Button I understand and agree to the terms
          and conditions prescribed by bank of bahrain and kuwait which are
          listed on the web site, www.demobank.com and accept that these will be
          govern by use of my mobile phone for transactions on my Demo Bank
          account. I have read, understand and agree general security tips put
          on Demo Bank Web Site.
        </Text>
      </View>
      <View className="flex flex-row p-5">
        <Checkbox
          color={isCheck ? "#FFAA1D" : '#FFFFFF'}
          onPress={() => setCheck(!isCheck)}
          status={isCheck ? "checked" : "unchecked"}
        />
        <Text className="m-2">I accept the Terms and Conditions</Text>
      </View>
      <Text className="underline text-center text-lg font-semibold">
        Privacy Policy
      </Text>
      <View className="items-center m-2 mt-5">
        <TouchableOpacity
          className={`w-full p-3 items-center rounded-lg ${
            isCheck ? "bg-blue-900" : "bg-gray-400"
          }`}
          onPress={() => {
            if (isCheck) {
              navigation.navigate("Device_binding");
            }
          }}
          disabled={!isCheck}
        >
          <Text className={`${isCheck ? "text-white" : "text-gray-600"} text-base`}>
            Proceed
          </Text>
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