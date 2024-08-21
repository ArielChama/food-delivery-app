import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="screens/auth/login" options={{ headerShown: false }} />
      <Stack.Screen name="screens/auth/register" options={{ headerShown: false }} />
      <Stack.Screen name="screens/auth/forgot-password" options={{ headerShown: false }} />
      <Stack.Screen name="screens/auth/verification" options={{ headerShown: false }} />
      <Stack.Screen name="screens/permissions/location" options={{ headerShown: false }} />
      <Stack.Screen name="screens/Home/index" options={{ headerShown: false }} />
    </Stack>
  );
}
