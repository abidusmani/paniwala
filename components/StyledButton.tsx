import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';

interface StyledButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

export default function StyledButton({
  title,
  onPress,
  loading,
  className,
  ...props
}: StyledButtonProps) {
  const disabled = loading || props.disabled;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`w-full bg-indigo-600 rounded-xl p-4 flex-row justify-center items-center shadow-md ${
        disabled ? 'opacity-60' : ''
      } ${className}`}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color="#ffffff" />
      ) : (
        <Text className="text-white text-base font-bold text-center">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
