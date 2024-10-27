import { View, Text, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function Login_screen() {
  return (
    <View>
      <View>
        <View className="flex flex-row mt-3 ">
          <Image
            source={require("../assets/BgIcon.png")}
            className="w-16 h-16 ml-10"
          ></Image>
          <Text className="ml-3 mt-3 text-2xl font-bold text-blue-700">
            THE DEMO BANK LTD.
          </Text>
        </View>
        <View className="bg-white shadow-2xl mt-10 p-5 ml-8 mr-8 rounded-lg ">
          <View className="flex flex-row justify-center mt-5">
            <Image
              source={require("../assets/user_logo.png")}
              className="w-20 h-20"
            ></Image>
            <View className="flex flex-col justify-center ml-5">
              <Text className="text-xl font-bold">Hello,</Text>
              <Text>UserName</Text>
            </View>
          </View>
          <View className="flex flex-col justify-center items-center mt-10">
            <Text>Use M-PIN</Text>
            <Text>input box </Text>
          </View>
          <Text className="underline text-yellow-500 text-center mt-10">
            Forget Login Pin ?
          </Text>
        </View>
         <Text className="text-center mt-5">Or Use</Text>
      </View>

      <View className='flex flex-row justify-center items-center m-5 p-5'>
        <View className=''>
        <MaterialIcons name="fingerprint" size={50} color="black" />
        <Text className='w-20'>Login using Touch ID</Text>
        </View>
        <View>
        <MaterialIcons name="face" size={50} color="black" />
        <Text  className='w-20'>Login using Face ID</Text>
        </View>
      </View>
      <Text className='text-center underline'>Login as a different user</Text>
      <View className='mt-10'>
      <View className='flex flex-row gap-5 justify-center'>
        <MaterialIcons name="account-balance" size={50} color="black" />
      <MaterialIcons name="language" size={50} color="black" />
      <MaterialIcons name="contacts" size={50} color="black" />
      <MaterialIcons name="support-agent" size={50} color="black" />
      </View>
      </View>
    </View>
  );
}
