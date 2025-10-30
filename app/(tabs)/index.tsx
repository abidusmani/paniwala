import { Redirect } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { styled } from 'nativewind';

// Assuming you have an Auth context set up at this path
// import { useAuth } from '../context/AuthContext'; 

// --- MOCK AUTH HOOK for testing ---
// (Remove this and uncomment the real one above when your context is ready)
const useAuth = () => {
  // Set to true to test loading spinner
  // Set to false and user to null to test login redirect
  // Set to false and user to {name: 'Test'} to test app redirect
  return { isLoading: false, user: { name: 'Test User' } }; 
};
// ---------------------------------


// Style the ActivityIndicator to accept Tailwind classes
const StyledActivityIndicator = styled(ActivityIndicator);

export default function Index() {
  const { user, isLoading } = useAuth(); // Get user and loading state

  if (isLoading) {
    // Show a loading spinner while checking auth state
    return (
      <View className="flex-1 justify-center items-center bg-white dark:bg-black">
        <StyledActivityIndicator size="large" className="text-blue-500" />
      </View>
    );
  }

  if (!user) {
    // If no user, redirect to the login screen.
    return <Redirect href="/login" />;
  }

  // If user is logged in, redirect to the main app (tabs) layout.
  // This will load your app/(tabs)/_layout.tsx and then app/(tabs)/index.tsx.
  return <Redirect href="/(tabs)" />;
}

