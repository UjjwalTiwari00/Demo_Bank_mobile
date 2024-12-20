import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const PinInputSection = ({ label, password, setPassword, inputRef }) => {
  const handlePinChange = (index, value) => {
    if (value.length <= 1) {
      const newPasswordArray = [...password];
      newPasswordArray[index] = value;
      setPassword(newPasswordArray);

      // Move to the next input box if the current one is filled
      if (value && index < 3) {
        setTimeout(() => {
          inputRef.current[index + 1]?.focus();
        }, 100);
      }
    }
  };

  return (
    <View className="mb-6">
      <Text className="text-sm font-medium text-gray-700 mb-2">{label}</Text>
      <View className="flex flex-row justify-between mb-4">
        {password.map((pin, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRef.current[index] = ref)}
            secureTextEntry
            className="w-12 h-12 text-2xl text-center border border-gray-300 rounded-md"
            value={pin}
            onChangeText={(text) => handlePinChange(index, text)}
            maxLength={1}
            keyboardType="numeric"
          />
        ))}
      </View>
    </View>
  );
};

export default function Tpin() {
  const navigation = useNavigation();
  const [currentPassword, setCurrentPassword] = useState(["", "", "", ""]);
  const [newPassword, setNewPassword] = useState(["", "", "", ""]);
  const [confirmPassword, setConfirmPassword] = useState(["", "", "", ""]);

  const currentRef = React.useRef([]);
  const newRef = React.useRef([]);
  const confirmRef = React.useRef([]);

  return (
    <View className="flex-1 bg-gray-100">
      <View className="bg-white p-4 shadow">
        <Text className="text-2xl font-bold text-gray-900">Set T-PIN</Text>
      </View>
      <View className="flex-grow justify-center items-center px-4">
        <View className="bg-white rounded-lg p-6 shadow w-full max-w-xs">
          <PinInputSection
            label="Current Password"
            password={currentPassword}
            setPassword={setCurrentPassword}
            inputRef={currentRef}
          />
          <PinInputSection
            label="New Password"
            password={newPassword}
            setPassword={setNewPassword}
            inputRef={newRef}
          />
          <PinInputSection
            label="Confirm Password"
            password={confirmPassword}
            setPassword={setConfirmPassword}
            inputRef={confirmRef}
          />
          <TouchableOpacity className="bg-indigo-600 p-2 rounded-md">
            <Text
              className="text-white text-base text-center"
              onPress={() => navigation.navigate("login_page")}
            >
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
