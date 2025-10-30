// abidusmani/paniwala/paniwala-ea6dbe8b62d8c4d0cd26a9067d013f7cc8ea3a24/app/logIn.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Mail, Lock } from 'lucide-react-native';

// Import the re-usable components from your /components folder
import AuthLayout from '@/components/AuthLayout';
import StyledButton from '@/components/StyledButton';
import StyledInput from '@/components/StyledInput';

// --- Main Login Screen ---
export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onLogin = () => {
    // Basic validation
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      console.log('Logging in with:', email, password);
      // On success, navigate to the main app
      router.replace('/(tabs)');
    }, 2000);
  };

  return (
    <AuthLayout title="Welcome Back!">
      <View className="w-full">
        {/* Email Input */}
        <StyledInput
          label="Email"
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          Icon={Mail}
          // mb-5 is now default in StyledInput
        />

        {/* Password Input */}
        <StyledInput
          label="Password"
          placeholder="Your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          Icon={Lock}
          // Added small margin before the "Forgot Password" link
          className="mb-2"
        />

        {/* Forgot Password Link */}
        <View className="items-end w-full mb-6">
          <Link href="/forgot-password" asChild>
            <TouchableOpacity>
              <Text className="text-sm font-medium text-indigo-600 active:text-indigo-700">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Login Button */}
        <StyledButton title="Login" onPress={onLogin} loading={loading} />

        {/* Sign Up Link */}
        {/* Added more top margin for breathing room */}
        <View className="flex-row justify-center mt-8">
          <Text className="text-gray-600">Don't have an account? </Text>
          <Link href="/register" asChild>
            <TouchableOpacity>
              <Text className="font-bold text-indigo-600 active:text-indigo-700">
                Sign Up
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </AuthLayout>
  );
}