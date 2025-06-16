// app/_layout.tsx
import { Slot, Redirect } from 'expo-router';

export default function RootLayout() {
  // If you want to always redirect to login first:
  return (
    <>
      <Redirect href="/(auth)/login" />
      <Slot />
    </>
  );
}
