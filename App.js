import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FONTS } from "./constants/fonts";
import { useCallback } from "react";
import AppNavigations from "./navigations/AppNavigations";
import { View, Text } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts(FONTS);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <AppNavigations />
    </SafeAreaProvider>
  );
}

// import React, { useEffect } from "react";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { FONTS } from "./constants/fonts";
// import AppNavigations from "./navigations/AppNavigations";
// import { View } from "react-native";

// SplashScreen.preventAutoHideAsync();

// export default function App() {
//   const [fontsLoaded] = useFonts(FONTS);

//   useEffect(() => {
//     async function loadFontsAndHideSplashScreen() {
//       if (fontsLoaded) {
//         await SplashScreen.hideAsync();
//       }
//     }
//     loadFontsAndHideSplashScreen();
//   }, [fontsLoaded]);

//   if (!fontsLoaded) {
//     // Return a loading indicator or splash screen
//     return null;
//   }

//   return (
//     <SafeAreaProvider>
//       <AppNavigations />
//       {/* Additional content */}
//       <View></View>
//     </SafeAreaProvider>
//   );
// }
