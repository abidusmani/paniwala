// abidusmani/paniwala/paniwala-ea6dbe8b62d8c4d0cd26a9067d013f7cc8ea3a24/app/register.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import { User, Mail, Lock } from 'lucide-react-native';

// Import the re-usable components
import AuthLayout from '@/components/AuthLayout';
import StyledButton from '@/components/StyledButton';
import StyledInput from '@/components/StyledInput';

// --- Main Register Screen ---
export default function RegisterScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onRegister = () => {
    // Basic validation
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      console.log('Registering with:', fullName, email, password);
      // On success, navigate to the main app
      router.replace('/(tabs)');
    }, 2000);
  };

  return (
    <AuthLayout title="Create Account">
      <View className="w-full">
        {/* Full Name Input */}
        <StyledInput
          label="Full Name"
          placeholder="John Doe"
          value={fullName}
          onChangeText={setFullName}
          Icon={User}
        />

        {/* Email Input */}
        <StyledInput
          label="Email"
          placeholder="you@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          Icon={Mail}
        />

        {/* Password Input */}
        <StyledInput
          label="Password"
          placeholder="Your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          Icon={Lock}
        />

        {/* Confirm Password Input */}
        <StyledInput
          label="Confirm Password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          Icon={Lock}
          // Added small margin before the button
          className="mb-2"
        />

        {/* Register Button */}
        <StyledButton
          title="Create Account"
          onPress={onRegister}
          loading={loading}
          // Added more top margin
          className="mt-6"
        />

        {/* Login Link */}
        {/* Added more top margin for breathing room */}
        <View className="flex-row justify-center mt-8">
          <Text className="text-gray-600">Already have an account? </Text>
          <Link href="/logIn" asChild>
            <TouchableOpacity>
              <Text className="font-bold text-indigo-600 active:text-indigo-700">
                Log In
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </AuthLayout>
  );
}