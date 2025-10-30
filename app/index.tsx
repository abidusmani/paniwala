// abidusmani/paniwala/paniwala-ea6dbe8b62d8c4d0cd26a9067d013f7cc8ea3a24/app/index.tsx
import React, { useState, useEffect } from 'react';
import { Redirect } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';

// --- Mock Auth Hook ---
const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for a user session
    setTimeout(() => {
      // Set to `false` to see your Login Page.
      setIsLoggedIn(false); 
      setLoading(false);
    }, 1000); 
  }, []);

  return { isLoggedIn, loading };
};
// --- End Mock Auth Hook ---


export default function AuthGateway() {
  const { isLoggedIn, loading } = useAuth();

  // Show a loading spinner
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // If NOT logged in, redirect to the login screen.
  if (!isLoggedIn) {
    return <Redirect href="/logIn" />;
  }

  // If LOGGED IN, redirect to the main app (tabs).
  return <Redirect href="/(tabs)" />;
}