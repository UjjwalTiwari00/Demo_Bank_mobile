import { View, Text, StyleSheet,StatusBar, Image } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View className="bg-slate-100 h-screen">
     <StatusBar backgroundColor="#001D68" barStyle="light-content" />
      <Text className="text-center mt-3 text-2xl font-bold">
        Terms and Conditions
      </Text>
      <View className="flex flex-row mt-3">
        <Image 
        source={require("../assets/BgIcon.png")}
        className="w-16 h-16 ml-10"
        ></Image>
        <Text className="ml-3 mt-3 text-2xl font-bold text-blue-700">THE DEMO BANK LTD.</Text>
      </View>
      <View>
        <Text>
          Welcome User,
        </Text>
        <Text>
          By Clicking on the Accept Button i Understand and agree to the terms and conditions prescribed by bank of bahrain and kuwait which are listed on the web site, www.demobank.com and accept that these will be govern by use of my mobile phone for transactions on my Demo Bnak account. i have read, understand and agree general security tips put on Demo Bank Web Site.
        </Text>
      </View>
    </View>
  )
}
