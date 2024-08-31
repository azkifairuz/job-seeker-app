import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useCallback, useEffect } from "react";

SplashScreen.preventAutoHideAsync()
export default function RootLayout() {
  const [fontLoaded] = useFonts({
    DMBold: require('@/assets/fonts/DMSans-Bold.ttf'),
    DMRegular: require('@/assets/fonts/DMSans-Regular.ttf'),
    DMMedium: require('@/assets/fonts/DMSans-Medium.ttf'),

  })

  useEffect(() => {
    const prepare = async () => {
      if (fontLoaded) {
        await SplashScreen.hideAsync();  // Menyembunyikan Splash Screen setelah font selesai dimuat
      }
    };

    prepare();
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null; 
  }
  return (
    <Stack >
    </Stack>
  );
}
