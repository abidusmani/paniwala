import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  ActivityIndicator,
  TextInputProps,
  TouchableOpacityProps,
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import { User, Mail, Lock, LucideIcon } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

// --- Re-usable Components ---
// We are placing these components in the same file to resolve the import errors
// in the preview environment. In your actual project, you should keep them
// in separate files inside your 'components' directory as I originally suggested.

// --- StyledButton Component ---
interface StyledButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

function StyledButton({
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

// --- StyledInput Component ---
interface StyledInputProps extends TextInputProps {
  label: string;
  Icon: LucideIcon; // Type for lucide icon component
}

function StyledInput({
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

// --- AuthLayout Component ---
type AuthLayoutProps = {
  title: string;
  children: React.ReactNode;
};

function AuthLayout({ title, children }: AuthLayoutProps) {
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
      // Replace '/(tabs)' with your main authenticated route
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
        />

        {/* Register Button */}
        <StyledButton
          title="Create Account"
          onPress={onRegister}
          loading={loading}
          className="mt-4"
        />

        {/* Login Link */}
        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-600">Already have an account? </Text>
          <Link href="/login" asChild>
            <TouchableOpacity>
              <Text className="font-bold text-indigo-600">Log In</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </AuthLayout>
  );
}

