// abidusmani/paniwala/paniwala-ea6dbe8b62d8c4d0cd26a9067d013f7cc8ea3a24/components/StyledInput.tsx
import { View, Text, TextInput, TextInputProps } from 'react-native';
import React from 'react';
import { LucideIcon } from 'lucide-react-native';

interface StyledInputProps extends TextInputProps {
  label: string;
  Icon: LucideIcon;
  className?: string;
  inputClassName?: string;
}

export default function StyledInput({
  label,
  Icon,
  className,
  inputClassName,
  ...props
}: StyledInputProps) {
  return (
    // Increased bottom margin from mb-4 to mb-5
    <View className={`w-full mb-5 ${className || ''}`}>
      <Text className="text-sm font-medium text-gray-700 mb-2">{label}</Text>
      <View className="relative w-full">
        <View className="absolute left-3 top-0 bottom-0 flex-row items-center justify-center z-10">
          <Icon size={20} color="#6B7280" />
        </View>
        <TextInput
          // Made input taller (py-4), added bg-gray-50, and softened border
          className={`w-full rounded-lg border border-gray-200 bg-gray-50 py-4 pl-12 pr-4 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 ${
            inputClassName || ''
          }`}
          placeholderTextColor="#9CA3AF"
          {...props}
        />
      </View>
    </View>
  );
}