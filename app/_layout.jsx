import { useFonts } from 'expo-font'; // Example: loading fonts
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import './global.css';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  // 2. Load any assets you need (e.g., fonts, API data)
  // This is just an example using fonts
  const [fontsLoaded] = useFonts({
    'Avigea': require('../assets/fonts/Avigea.ttf'),
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    
    if (fontsLoaded) {
      setAppIsReady(true);
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]); // Re-run this effect when 'fontsLoaded' changes

  // 4. If the app is not ready, return null. The splash screen will stay visible.
  if (!appIsReady) {
    return null;
  }

  // 5. When ready, render your actual app layout
  return (
    <Stack>
      <Stack.Screen 
        name='(tabs)' 
        options={{
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name='services' 
        options={{
          headerShown: false,
        }} 
      />
      {/* Add any other Tabs.Screen here */}
    </Stack>
  );
}

export default RootLayout;