import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  // --- Adding other common imports as a potential fix for the preview bundler ---
  TouchableOpacity,
  Alert,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
// --- Also adding other top-level package imports ---
import 'expo-router';
import 'lucide-react-native';

type AuthLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function AuthLayout({ title, children }: AuthLayoutProps) {
  return (
    <LinearGradient
      colors={['#f3e8ff', '#e0c3fc']} // Light purple gradient
      className="flex-1"
    >
      <SafeAreaView className="flex-1">
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className="flex-1"
        >
          <ScrollView
            contentContainerClassName="flex-grow justify-center p-6"
            keyboardShouldPersistTaps="handled"
          >
            <View className="bg-white rounded-2xl shadow-xl p-8 items-center">
              {/* Logo or Icon can go here */}
              <Text className="text-3xl font-bold text-gray-900 mb-6">
                {title}
              </Text>
              {children}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}

