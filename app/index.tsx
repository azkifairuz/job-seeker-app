import { Text, ScrollView, SafeAreaView, View } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS } from "@/constants/Themes";
import ScreenHeaderBtn from "@/components/common/header/ScreenHeaderBtn";
import Icons from "@/constants/Icons";
import Welcome from "@/components/home/welcome/Welcome";
import Popularjobs from "@/components/home/popular/Popularjobs";
import Nearbyjobs from "@/components/home/nearby/Nearbyjobs";
export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.lightWhite,padding:16 }}
    >
      <Stack.Screen options={{
        headerStyle: {backgroundColor:COLORS.lightWhite},
        headerShadowVisible:false,
        headerLeft: () => (
          <ScreenHeaderBtn/>
        ),
        headerRight: () => (
          <ScreenHeaderBtn/>
        ),
        headerTitle:''
      }}>
      </Stack.Screen>
      <ScrollView>
        <View style={{flex:1}}>
          <Welcome/>
          <Popularjobs/>
          <Nearbyjobs/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
