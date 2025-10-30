// abidusmani/paniwala/paniwala-ea6dbe8b62d8c4d0cd26a9067d013f7cc8ea3a24/components/StyledButton.tsx
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';

interface StyledButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  className?: string;
  textClassName?: string;
}

export default function StyledButton({
  title,
  loading = false,
  className,
  textClassName,
  ...props
}: StyledButtonProps) {
  return (
    <TouchableOpacity
      // Made button taller (py-4)
      className={`w-full items-center justify-center rounded-lg bg-indigo-600 py-4 px-4 shadow-sm active:bg-indigo-700 ${
        loading ? 'opacity-70' : ''
      } ${className || ''}`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        // Made text bolder
        <Text
          className={`text-base font-bold text-white ${textClassName || ''}`}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}