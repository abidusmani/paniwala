// abidusmani/paniwala/paniwala-ea6dbe8b62d8c4d0cd26a9067d013f7cc8ea3a24/components/AuthLayout.tsx
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';

type AuthLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function AuthLayout({ title, children }: AuthLayoutProps) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {/* Changed p-4 to p-6 for more space */}
            <View className="flex-1 items-center justify-center p-6">
              {/* You can add a Logo here in the future
                <Image source={require('@/assets/images/logo.png')} className="w-32 h-32 mb-4" /> 
              */}

              {/* Made title larger, bolder, and added more margin */}
              <Text className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {title}
              </Text>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}