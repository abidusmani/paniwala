import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { LucideIcon } from 'lucide-react-native';

// --- Adding other imports as a potential fix for the preview bundler ---
import 'expo-router';
import 'expo-linear-gradient';
import 'react-native-safe-area-context';

// Define the props for the component
interface StyledInputProps extends TextInputProps {
  label: string;
  Icon: LucideIcon; // Type for lucide icon component
}

export default function StyledInput({
  label,
  Icon,
  ...props
}: StyledInputProps) {
  return (
    <View className="w-full mb-4">
      <Text className="text-sm font-medium text-gray-700 mb-2 ml-1">
        {label}
      </Text>
      <View className="flex-row items-center bg-gray-100 rounded-xl p-4">
        <Icon color="#6b7280" size={20} />
        <TextInput
          className="flex-1 ml-3 text-base text-gray-900"
          placeholderTextColor="#9ca3af"
          {...props}
        />
      </View>
    </View>
  );
}

